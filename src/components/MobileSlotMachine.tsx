import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Idea } from '../types';
import GenerateButton from './GenerateButton';
import { CategoryCard, IdeaImage, IdeaText, MobileSlotMachineWrapper } from '../styles/MobileSlotMachineStyles';

interface Props {
  ideas: Idea[];
  onGenerate: () => void;
  spinning: boolean;
}

const MobileSlotMachine: React.FC<Props> = ({ ideas, onGenerate, spinning }) => {
  const { t, i18n } = useTranslation();
  const [isRefreshing, setIsRefreshing] = useState(false);
  const [refreshKey, setRefreshKey] = useState(0);

  useEffect(() => {
    if (spinning) {
      setIsRefreshing(true);
      const timer = setTimeout(() => {
        setIsRefreshing(false);
      }, 600); // This duration should be longer than the total animation time (0.3s + 0.05s * 4 = 0.5s)

      return () => clearTimeout(timer);
    }
  }, [spinning]);

  const handleGenerate = () => {
    setIsRefreshing(true);
    setRefreshKey(prevKey => prevKey + 1);
    onGenerate();
  };

  return (
    <MobileSlotMachineWrapper>
      {ideas.map((idea, index) => (
        <CategoryCard 
          key={`${index}-${refreshKey}`} 
          className={isRefreshing ? 'refreshing' : ''}
          index={index}
        >
          <h3>{t(`categories.${idea.category}`)}</h3>
          <IdeaImage src={idea.image} alt={idea.text.en} />
          <IdeaText>
            {i18n.language === 'zh' ? idea.text.zh : idea.text.en}
          </IdeaText>
        </CategoryCard>
      ))}
      <GenerateButton onClick={handleGenerate} />
    </MobileSlotMachineWrapper>
  );
};

export default MobileSlotMachine;