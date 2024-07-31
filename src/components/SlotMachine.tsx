import React, { useState, useEffect, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import { ideas as allIdeas } from '../data/ideas';
import {
  SlotMachineWrapper,
  SlotWindowWrapper,
  SlotColumn,
  SlotWindow,
  SlotContent,
  Slot,
  IdeaText,
  IdeaImage,
  ColumnHeader
} from '../styles/SlotMachineStyles';
import GenerateButton from './GenerateButton';
import { Idea } from '../types';

interface Props {
  ideas: Idea[];
  spinning: boolean;
  onGenerate: () => void;
}

const SlotMachine: React.FC<Props> = ({ ideas, spinning, onGenerate }) => {
  const { t, i18n } = useTranslation();
  const [displayedIdeas, setDisplayedIdeas] = useState<Idea[][]>([]);
  const spinningRef = useRef(spinning);
  spinningRef.current = spinning;

  const initializeDisplayedIdeas = (baseIdeas: Idea[]) => {
    return baseIdeas.map(idea => {
      const categoryIdeas = allIdeas[idea.category];
      return [
        categoryIdeas[Math.floor(Math.random() * categoryIdeas.length)],
        idea,
        categoryIdeas[Math.floor(Math.random() * categoryIdeas.length)]
      ];
    });
  };

  useEffect(() => {
    setDisplayedIdeas(initializeDisplayedIdeas(ideas));
  }, [ideas]);

  useEffect(() => {
    if (spinning) {
      const newDisplayedIdeas = ideas.map(idea => {
        const categoryIdeas = allIdeas[idea.category];
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
          // Set the final position
          setDisplayedIdeas(initializeDisplayedIdeas(ideas));
        } else {
          setDisplayedIdeas(prev => prev.map(column => {
            const [first, ...rest] = column;
            return [...rest, first];
          }));
        }
      }, intervalDuration);

      return () => clearInterval(interval);
    }
  }, [spinning, ideas]);

  if (displayedIdeas.length === 0) {
    return null; // or a loading indicator
  }

  return (
    <SlotMachineWrapper lang={i18n.language as 'en' | 'zh'}>
      <SlotWindowWrapper>
        {displayedIdeas.map((ideaColumn, index) => (
          <SlotColumn key={index}>
            <ColumnHeader lang={i18n.language as 'en' | 'zh'}>{t(`categories.${ideaColumn[1].category}`)}</ColumnHeader>
            <SlotWindow>
              <SlotContent spinning={spinning} duration={2 + Math.random()} delay={Math.random() * 0.5}>
                {ideaColumn.map((idea, ideaIndex) => (
                  <Slot key={ideaIndex}>
                    <IdeaImage src={idea.image} alt={idea.text.en} />
                    <IdeaText lang={i18n.language as 'en' | 'zh'}>
                      {i18n.language === 'zh' ? idea.text.zh : idea.text.en}
                    </IdeaText>
                  </Slot>
                ))}
              </SlotContent>
            </SlotWindow>
          </SlotColumn>
        ))}
      </SlotWindowWrapper>
        <GenerateButton onClick={onGenerate} />
    </SlotMachineWrapper>
  );
};

export default SlotMachine;