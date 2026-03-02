import React from 'react';
import { createBrowserRouter } from 'react-router-dom';

import App from '../App';
import Home from '../pages/Home';
import Skills from '../pages/Skills';
import Projects from '../pages/Projects';
import BeyondAcademics from '../pages/BeyondAcademics';
import About from '../pages/About';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        index: true,
        element: <Home />
      },
      {
        path: 'skills',
        element: <Skills />
      },
      {
        path: 'projects',
        element: <Projects />
      },
      {
        path: 'beyond-academics',
        element: <BeyondAcademics />
      },
      {
        path: 'about',
        element: <About />
      }
    ]
  }
], {
  basename: import.meta.env.BASE_URL
});

export default router;
