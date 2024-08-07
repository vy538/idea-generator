// src/pages/AdminPage.tsx

import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Tabs, Tab, Box } from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';
import { fetchIdeas, fetchUsers } from '../services/database';
import { Idea, User } from '../types';
import ManageIdeasSection from '../components/admin/ManageIdeasSection';
import ManageUsersSection from '../components/admin/ManageUsersSection';
import { Body, H1 } from '../styles/Typography';
import { AdminPageWrapper } from '../styles/LayoutStyles';
import { muiTheme } from '../styles/muiTheme';

const AdminPage: React.FC = () => {
  const { t, i18n } = useTranslation();
  const [ideas, setIdeas] = useState<Record<string, Idea[]>>({});
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [activeTab, setActiveTab] = useState(0);

  useEffect(() => {
    const loadData = async () => {
      try {
        const [ideasData, usersData] = await Promise.all([fetchIdeas(), fetchUsers()]);
        const categorizedIdeas = Object.entries(ideasData).reduce((acc, [category, categoryIdeas]) => {
          acc[category] = Object.values(categoryIdeas).map(idea => ({
            ...idea,
            category: category as Idea['category']
          }));
          return acc;
        }, {} as Record<string, Idea[]>);
        setIdeas(categorizedIdeas);
        setUsers(usersData);
      } catch (err) {
        console.error("Error loading data:", err);
        setError(t('admin.error.loading'));
      } finally {
        setLoading(false);
      }
    };

    loadData();
  }, [t]);

  const handleTabChange = (event: React.SyntheticEvent, newValue: number) => {
    setActiveTab(newValue);
  };

  const onAddImage = (ideaEn: string, imageUrl: string) => {
    // Implement this function
    console.log('Add image', ideaEn, imageUrl);
  };

  const onDeleteIdea = (ideaEn: string, category: string) => {
    // Implement this function
    console.log('Delete idea', ideaEn, category);
  };

  const onUpdateUser = (updatedUser: User) => {
    setUsers(prevUsers => prevUsers.map(user => 
      user.uid === updatedUser.uid ? updatedUser : user
    ));
  };

  if (loading) return <Body lang={i18n.language as 'en' | 'zh'}>{t('admin.loading')}</Body>;
  if (error) return <Body lang={i18n.language as 'en' | 'zh'}>{error}</Body>;

  return (
    <ThemeProvider theme={muiTheme}>
      <AdminPageWrapper>
        <H1 lang={i18n.language as 'en' | 'zh'}>{t('admin.title')}</H1>
        <Box sx={{ borderBottom: 1, borderColor: 'divider', mb: 2 }}>
          <Tabs value={activeTab} onChange={handleTabChange} aria-label="admin tabs">
            <Tab label={t('admin.tabs.manageIdeas')} />
            <Tab label={t('admin.tabs.manageUsers')} />
          </Tabs>
        </Box>
        {activeTab === 0 && (
          <ManageIdeasSection 
            ideas={ideas} 
            onAddImage={onAddImage} 
            onDeleteIdea={onDeleteIdea} 
          />
        )}
        {activeTab === 1 && (
          <ManageUsersSection 
            users={users} 
            onUpdateUser={onUpdateUser} 
          />
        )}
      </AdminPageWrapper>
    </ThemeProvider>
  );
};

export default AdminPage;