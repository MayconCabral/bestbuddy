import React, { Suspense } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';

import './sass/main.scss';
import Loader from './pages/Loading';
import GalleryPage from './pages/Gallery';
import DeveloperPage from './pages/Developer';
const HomePage = React.lazy(() => import('./pages/Home'));




function App() {
    const location = useLocation();

  return (
    <AnimatePresence mode='wait'>
      <Suspense fallback={<Loader />}>
        <Routes key={location.pathname} location={location}>
            <Route path="/" element={<HomePage />} />
            <Route path="/gallery" element={<GalleryPage />} />
            <Route path="/developer" element={<DeveloperPage />} />
        </Routes>
      </Suspense>   
    </AnimatePresence>
  );
}

export default App;
