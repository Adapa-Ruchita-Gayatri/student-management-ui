import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import "./Header.css"

export interface HeaderProps {}

export const Header: React.FC<HeaderProps> = () => {
  const tabsList = ['Create', 'Search'];
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
    <ul className="nav nav-tabs d-flex align-items-center" role="tablist">
      {tabsList.map((tab) => getTabView(tab))}
    </ul>
  );
};
