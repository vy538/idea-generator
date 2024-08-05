// src/pages/AdminPage.tsx

import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import { fetchIdeas, fetchUsers } from '../services/database';
import { Idea, User } from '../types';
import { AdminPageWrapper } from '../styles/AdminPageStyles';
import ManageIdeasSection from '../components/admin/ManageIdeasSection';
import ManageUsersSection from '../components/admin/ManageUsersSection';
import { Body, H1 } from '../styles/Typography';

const AdminPage: React.FC = () => {
  const { t, i18n } = useTranslation();
  const [ideas, setIdeas] = useState<Record<string, Idea[]>>({});
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

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

  const onAddImage = (ideaEn: string, imageUrl: string) => {
    // Implement this function
    console.log('Add image', ideaEn, imageUrl);
  };

  const onDeleteIdea = (ideaEn: string, category: string) => {
    // Implement this function
    console.log('Delete idea', ideaEn, category);
  };

  if (loading) return <Body lang={i18n.language as 'en' | 'zh'}>{t('admin.loading')}</Body>;
  if (error) return <Body lang={i18n.language as 'en' | 'zh'}>{error}</Body>;

  return (
    <AdminPageWrapper>
      <H1 lang={i18n.language as 'en' | 'zh'}>{t('admin.title')}</H1>
      <Tabs>
        <TabList>
          <Tab>{t('admin.tabs.manageIdeas')}</Tab>
          <Tab>{t('admin.tabs.manageUsers')}</Tab>
        </TabList>

        <TabPanel>
          <ManageIdeasSection ideas={ideas} onAddImage={onAddImage} onDeleteIdea={onDeleteIdea} />
        </TabPanel>
        <TabPanel>
          <ManageUsersSection users={users} />
        </TabPanel>
      </Tabs>
    </AdminPageWrapper>
  );
};

export default AdminPage;