import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import MainPage from './pages/MainPage';
import GalleryPage from './pages/GalleryPage';
import Header from './components/Header';
import './i18n';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/gallery" element={<GalleryPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;