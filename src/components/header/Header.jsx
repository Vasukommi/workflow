import React from 'react';
import { Menubar } from 'primereact/menubar';
import "./Header.css";

function Header() {
  const items = [
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