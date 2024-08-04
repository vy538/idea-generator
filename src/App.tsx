// src/App.tsx

import React, { Suspense } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { I18nextProvider } from 'react-i18next';
import i18n from './i18n';
import Header from './components/Header';
import MainPage from './pages/MainPage';
import GalleryPage from './pages/GalleryPage';
import { PageWrapper } from './styles/LayoutStyles';
import { GlobalStyles } from './styles/GlobalStyles';
import { theme } from './styles/theme';
import { ThemeProvider } from 'styled-components';
import AddIdeaPage from './pages/AddIdeaPage';
import AdminPage from './pages/AdminPage';
import PrivateRoute from './components/PrivateRoute';

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <>
    <Header />
    <PageWrapper>{children}</PageWrapper>
  </>
);

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles/>
      <I18nextProvider i18n={i18n}>
        <Router>
          <Suspense fallback="Loading...">
            <Routes>
              <Route path="/" element={<Layout><MainPage /></Layout>} />
              <Route path="/gallery" element={<Layout><GalleryPage /></Layout>} />
              <Route path="/add-idea" element={
                <Layout>
                  <PrivateRoute>
                    <AddIdeaPage />
                  </PrivateRoute>
                </Layout>
              } />
              <Route path="/admin" element={
                <Layout>
                  <PrivateRoute>
                    <AdminPage />
                  </PrivateRoute>
                </Layout>
              } />
            </Routes>
          </Suspense>
        </Router>
      </I18nextProvider>
    </ThemeProvider> 
  );
}

export default App;