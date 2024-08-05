// src/components/admin/ManageIdeasSection.tsx

import React from 'react';
import { useTranslation } from 'react-i18next';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import { Idea } from '../../types';
import AdminIdeaItem from './AdminIdeaItem';

interface Props {
  ideas: Record<string, Idea[]>;
  onAddImage: (ideaEn: string, imageUrl: string) => void;
  onDeleteIdea: (ideaEn: string, category: string) => void;
}

const ManageIdeasSection: React.FC<Props> = ({ ideas,onAddImage,onDeleteIdea }) => {
  const { t } = useTranslation();

  return (
    <Tabs>
      <TabList>
        {Object.keys(ideas).map(category => (
          <Tab key={category}>{t(`categories.${category}`)}</Tab>
        ))}
      </TabList>

      {Object.entries(ideas).map(([category, categoryIdeas]) => (
        <TabPanel key={category}>
          {categoryIdeas.map(idea => (
           <AdminIdeaItem 
            key={idea.text.en} 
            idea={idea} 
            onAddImage={onAddImage} 
            onDeleteIdea={onDeleteIdea}
          />
          ))}
        </TabPanel>
      ))}
    </Tabs>
  );
};

export default ManageIdeasSection;