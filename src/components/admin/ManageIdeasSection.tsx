// src/components/admin/ManageIdeasSection.tsx

import React from 'react';
import { useTranslation } from 'react-i18next';
import { Tabs, Tab, Box, Grid } from '@mui/material';
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
      <Tabs value={value} onChange={handleChange} aria-label="idea categories" sx={{ mb: 2 }}>
        {categories.map((category, index) => (
          <Tab key={category} label={t(`categories.${category}`)} id={`tab-${index}`} />
        ))}
      </Tabs>
      {categories.map((category, index) => (
        <Box
          key={category}
          role="tabpanel"
          hidden={value !== index}
          id={`tabpanel-${index}`}
          aria-labelledby={`tab-${index}`}
        >
          {value === index && (
            <Grid container spacing={2}>
              {ideas[category].map(idea => (
                <Grid item xs={12} sm={6} md={4} lg={3} key={idea.text.en}>
                  <AdminIdeaItem 
                    idea={idea} 
                    onAddImage={onAddImage} 
                    onDeleteIdea={onDeleteIdea}
                  />
                </Grid>
              ))}
            </Grid>
          )}
        </Box>
      ))}
    </Box>
  );
};

export default ManageIdeasSection;