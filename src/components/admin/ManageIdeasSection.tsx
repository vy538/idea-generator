// src/components/admin/ManageIdeasSection.tsx

import React from 'react';
import { useTranslation } from 'react-i18next';
import { Tabs, Tab, Box } from '@mui/material';
import { Idea } from '../../types';
import AdminIdeaItem from './AdminIdeaItem';

interface Props {
  ideas: Record<string, Idea[]>;
  onAddImage: (ideaEn: string, imageUrl: string) => void;
  onDeleteIdea: (ideaEn: string, category: string) => void;
}

const ManageIdeasSection: React.FC<Props> = ({ ideas, onAddImage, onDeleteIdea }) => {
  const { t } = useTranslation();
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  const categories = Object.keys(ideas);

  return (
    <Box sx={{ width: '100%' }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={value} onChange={handleChange} aria-label="idea categories">
          {categories.map((category, index) => (
            <Tab key={category} label={t(`categories.${category}`)} id={`tab-${index}`} />
          ))}
        </Tabs>
      </Box>
      {categories.map((category, index) => (
        <Box
          key={category}
          role="tabpanel"
          hidden={value !== index}
          id={`tabpanel-${index}`}
          aria-labelledby={`tab-${index}`}
        >
          {value === index && (
            <Box sx={{ p: 3 }}>
              {ideas[category].map(idea => (
                <AdminIdeaItem 
                  key={idea.text.en} 
                  idea={idea} 
                  onAddImage={onAddImage} 
                  onDeleteIdea={onDeleteIdea}
                />
              ))}
            </Box>
          )}
        </Box>
      ))}
    </Box>
  );
};

export default ManageIdeasSection;