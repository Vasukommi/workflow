import React from 'react';
import axios from 'axios';
import { Menubar } from 'primereact/menubar';
import { Button } from 'primereact/button';
import useStore from '../../app/store.js';
import "./Header.css";

function Header() {
  const edges = useStore((state) => state.edges)
  const handleRunWorkflowClick = async () => {
    if (edges.length > 0) {
      let isInputConnected = false
      let isOutPutConnected = false
      edges.forEach((eachEdge) => {
        if (eachEdge.source.includes('InputOrders') && eachEdge.target.includes('Printavo')) {
          isInputConnected = true
        }
        if (eachEdge.target.includes('OutputOrders') && eachEdge.source.includes('Printavo')) {
          isOutPutConnected = true
        }
      })
      const updateWorkflowURL = 'http://localhost:4001/workflow/save'
      const response = await axios.post(updateWorkflowURL, { isInputConnected, isOutPutConnected })
    }
  };

  const items = [
    {
      label: 'Run Workflow',
      icon: 'pi pi-play',
      command: handleRunWorkflowClick
    },
    {
      label: 'Home',
      icon: 'pi pi-home',
      url: '/'
    },
    {
      label: 'Workflow',
      icon: 'pi pi-sitemap',
      url: '/workflow'
    }
  ];

  return (
    <Menubar
      className='wf-header-section'
      model={items}
      start={<img className='header-logo' alt="Logo" src="https://ccmweb.blob.core.windows.net/ccm/workflow-high-resolution-logo-color-on-transparent-background.png" height="14" />}
    />
  );
}

export default Header;
