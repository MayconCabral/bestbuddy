import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import './sass/main.scss';
import Home from './pages/Home';
import Gallery from './pages/Gallery';
import Developer from './pages/Developer';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />
  },
  {
    path: "/gallery",
    element: <Gallery />
  },
  {
    path: "/developer",
    element: <Developer />
  },
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
);
