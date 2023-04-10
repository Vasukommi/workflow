import React from 'react';
import './index.css';
import { RouterProvider } from "react-router-dom";
import router from './router/router.js';
import 'primereact/resources/themes/lara-light-indigo/theme.css';
import 'primereact/resources/primereact.css';
import 'primeicons/primeicons.css';
import 'primeflex/primeflex.css';
import './flags.css';
import './App.css';

function App() {
  return (
    <React.StrictMode>
      <RouterProvider router={router} >
      </RouterProvider>
    </React.StrictMode>
  );
}

export default App;
