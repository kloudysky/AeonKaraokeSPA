import React, { ReactNode } from 'react';
import '../styles/layout.module.css';

type LayoutProps = {
  children: ReactNode;
};

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return <div className="layout">{children}</div>;
};

export default Layout;
