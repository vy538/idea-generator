import React, { Suspense } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { I18nextProvider } from 'react-i18next';
import i18n from './i18n';
import Header from './components/Header';
import MainPage from './pages/MainPage';
import GalleryPage from './pages/GalleryPage';

function App() {
  return (
    <I18nextProvider i18n={i18n}>
      <Router>
        <Header />
        <Suspense fallback="Loading...">
          <Routes>
            <Route path="/" element={<MainPage />} />
            <Route path="/gallery" element={<GalleryPage />} />
          </Routes>
        </Suspense>
      </Router>
    </I18nextProvider>
  );
}

export default App;