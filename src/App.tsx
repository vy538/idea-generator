import React, { Suspense } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { I18nextProvider } from 'react-i18next';
import i18n from './i18n';
import Header from './components/Header';
import MainPage from './pages/MainPage';
import GalleryPage from './pages/GalleryPage';
import { PageWrapper } from './styles/LayoutStyles';
import { GlobalStyles } from './styles/GlobalStyles';

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <>
    <Header />
    <PageWrapper>{children}</PageWrapper>
  </>
);

function App() {
  return (
    <>
      <GlobalStyles/>
    <I18nextProvider i18n={i18n}>
      <Router>
        <Suspense fallback="Loading...">
          <Routes>
            <Route path="/" element={<Layout><MainPage /></Layout>} />
            <Route path="/gallery" element={<Layout><GalleryPage /></Layout>} />
          </Routes>
        </Suspense>
      </Router>
      </I18nextProvider>
    </>
  );
}

export default App;