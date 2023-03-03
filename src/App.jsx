import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';

import './sass/main.scss';
import HomePage from './pages/Home';
import GalleryPage from './pages/Gallery';
import DeveloperPage from './pages/Developer';




function App() {
    const location = useLocation();

  return (
    <AnimatePresence mode='wait'>    
        <Routes key={location.pathname} location={location}>
            <Route path="/" element={<HomePage />} />
            <Route path="/gallery" element={<GalleryPage />} />
            <Route path="/developer" element={<DeveloperPage />} />
        </Routes>      
    </AnimatePresence>
  );
}

export default App;
