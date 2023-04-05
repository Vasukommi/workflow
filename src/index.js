import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { RouterProvider } from "react-router-dom";
import router from './router/router.js';
import 'primereact/resources/themes/lara-light-indigo/theme.css';   
import 'primereact/resources/primereact.css';                      
import 'primeicons/primeicons.css';
import 'primeflex/primeflex.css';
import './flags.css';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} >
    </RouterProvider>
  </React.StrictMode>
);
