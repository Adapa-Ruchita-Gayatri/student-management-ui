import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import "./Header.css"

export interface HeaderProps {}

export const Header: React.FC<HeaderProps> = () => {
  const tabsList = ['Create', 'Search'];
  const location = useLocation();

  React.useEffect(() => {
    if (location.pathname === '/create') {
      setActiveTab('Create');
    } else if (location.pathname === '/search') {
      setActiveTab('Search');
    }
  }, [location.pathname]);

  const [activeTab, setActiveTab] = useState<string>('Create');

  const getTabView = (tab: string): JSX.Element => {
    const productUrl = tab === 'Create' ? '/create' : '/search';
    const activeClass = tab === activeTab ? 'active-tab' : '';

    return (
      <li key={tab} className={`tab-item ${activeClass}`}>
        <Link
          className={`tab-link ${activeClass}`}
          to={productUrl}
          onClick={() => setActiveTab(tab)}
        >
          {tab}
        </Link>
      </li>
    );
  };

  return (
    <ul className="nav nav-tabs d-flex align-items-center justify-content-start" role="tablist">
      {tabsList.map((tab) => getTabView(tab))}
    </ul>
  );
};
