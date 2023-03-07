import React, { Suspense } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';

import './sass/main.scss';
import Loader from './pages/Loading';
import LoadingSecondary from './pages/LoadingSecondary';
import Error from './pages/Error';

const HomePage = React.lazy(() => import('./pages/Home'));
const GalleryPage = React.lazy(() => import('./pages/Gallery'));
const DeveloperPage = React.lazy(() => import('./pages/Developer'));



function App() {
    const location = useLocation();

  return (
    <AnimatePresence mode='wait'>      
        <Routes key={location.pathname} location={location}>
            <Route path="/" element={
              <Suspense fallback={<Loader />}>
                <HomePage />
              </Suspense>
            } />
            <Route path="gallery" element={
              <Suspense fallback={<LoadingSecondary />}>
                <GalleryPage />
              </Suspense>
            } />
            <Route path="developer" element={
              <Suspense fallback={<LoadingSecondary />}>
                <DeveloperPage />
              </Suspense>
            } />
            <Route path="*" element={
              <AnimatePresence>
                <Error key={location.pathname}/>
              </AnimatePresence>
          }
        />
        </Routes>        
    </AnimatePresence>
  );
}

export default App;
