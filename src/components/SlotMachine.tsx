import React, { useState, useEffect, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import { Idea, ideas as allIdeas } from '../data/ideas';
import {
  SlotMachineWrapper,
  SlotColumn,
  SlotContent,
  Slot,
  CategoryTitle,
  IdeaText
} from '../styles/SlotMachineStyles';

interface Props {
  ideas: Idea[];
  spinning: boolean;
}

const SlotMachine: React.FC<Props> = ({ ideas, spinning }) => {
  const { t, i18n } = useTranslation();
  const [displayedIdeas, setDisplayedIdeas] = useState<Idea[][]>([]);
  const spinningRef = useRef(spinning);
  spinningRef.current = spinning;

  useEffect(() => {
    if (spinning) {
      const newDisplayedIdeas = ideas.map(idea => {
        const categoryIdeas = allIdeas.filter(i => i.category === idea.category);
        return [...categoryIdeas, ...categoryIdeas, ...categoryIdeas]; // Repeat to ensure enough items
      });
      setDisplayedIdeas(newDisplayedIdeas);

      const spinDuration = 3000; // 3 seconds of spinning
      const intervalDuration = 100; // Update every 100ms for smooth animation
      let elapsed = 0;

      const interval = setInterval(() => {
        elapsed += intervalDuration;
        if (elapsed >= spinDuration || !spinningRef.current) {
          clearInterval(interval);
        } else {
          setDisplayedIdeas(prev => prev.map(column => {
            const [first, ...rest] = column;
            return [...rest, first];
          }));
        }
      }, intervalDuration);

      return () => clearInterval(interval);
    } else {
      setDisplayedIdeas(ideas.map(idea => [idea]));
    }
  }, [spinning, ideas]);

  return (
    <SlotMachineWrapper>
      {displayedIdeas.map((ideaColumn, index) => (
        <SlotColumn key={index}>
          <SlotContent spinning={spinning} duration={2 + Math.random()} delay={Math.random() * 0.5}>
            {ideaColumn.map((idea, ideaIndex) => (
              <Slot key={ideaIndex}>
                <CategoryTitle>{t(`categories.${idea.category}`)}</CategoryTitle>
                <IdeaText>
                  {i18n.language.startsWith('zh') ? idea.text.zh : idea.text.en}
                </IdeaText>
              </Slot>
            ))}
          </SlotContent>
        </SlotColumn>
      ))}
    </SlotMachineWrapper>
  );
};

export default SlotMachine;