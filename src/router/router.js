import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home.jsx";
import Workflow from "../pages/Workflow.jsx";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Home />
    },
    {
        path: '/workflow',
        element: <Workflow />
    }
]);

export default router