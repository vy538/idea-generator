import React from 'react';
import { useTranslation } from 'react-i18next';

interface IdeaTag {
  en: string;
  zh: string;
}

interface Idea {
  category: string;
  text: IdeaTag;
}

interface Props {
  ideas: Idea[];
}

const SlotMachine: React.FC<Props> = ({ ideas }) => {
  const { t, i18n } = useTranslation();

  const getCurrentLanguageText = (text: IdeaTag) => {
    return i18n.language.startsWith('zh') ? text.zh : text.en;
  };

  return (
    <div>
      {ideas.map((idea, index) => (
        <div key={index}>
          <h3>{t(`categories.${idea.category}`)}</h3>
          <p>{getCurrentLanguageText(idea.text)}</p>
        </div>
      ))}
    </div>
  );
};
export default SlotMachine;