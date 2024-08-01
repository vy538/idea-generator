import React from 'react';
import { useTranslation } from 'react-i18next';
import { Idea } from '../types';
import GenerateButton from './GenerateButton';
import { CategoryCard, IdeaImage, IdeaText, MobileSlotMachineWrapper } from '../styles/MobileSlotMachineStyles';


interface Props {
  ideas: Idea[];
  onGenerate: () => void;
}

const MobileSlotMachine: React.FC<Props> = ({ ideas, onGenerate }) => {
  const { t, i18n } = useTranslation();

  return (
    <MobileSlotMachineWrapper>
      {ideas.map((idea, index) => (
        <CategoryCard key={index}>
          <h3>{t(`categories.${idea.category}`)}</h3>
          <IdeaImage src={idea.image} alt={idea.text.en} />
          <IdeaText>
            {i18n.language === 'zh' ? idea.text.zh : idea.text.en}
          </IdeaText>
        </CategoryCard>
      ))}
      <GenerateButton onClick={onGenerate} />
    </MobileSlotMachineWrapper>
  );
};

export default MobileSlotMachine;