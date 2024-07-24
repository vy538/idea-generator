import React from 'react';
import { useTranslation } from 'react-i18next';
import { Idea } from '../data/ideas';
import {
  SlotMachineWrapper,
  SlotRow,
  Slot,
  CategoryTitle,
  IdeaText
} from '../styles/SlotMachineStyles';

interface Props {
  ideas: Idea[];
}

const SlotMachine: React.FC<Props> = ({ ideas }) => {
  const { t, i18n } = useTranslation();

  return (
    <SlotMachineWrapper>
      <SlotRow>
        {ideas.map((idea, index) => (
          <Slot key={index}>
            <CategoryTitle>{t(`categories.${idea.category}`)}</CategoryTitle>
            <IdeaText>
              {i18n.language.startsWith('zh') ? idea.text.zh : idea.text.en}
            </IdeaText>
          </Slot>
        ))}
      </SlotRow>
    </SlotMachineWrapper>
  );
};

export default SlotMachine;