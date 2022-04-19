import React from 'react';
import { Header } from './Header';
import { Footer } from './Footer';

import './styles.css';

export const Layout: React.FC = ({ children }) => {
  return (
    <div className="layout">
      <Header />
      <main>
        {children}
      </main>
      <Footer />
    </div>
  );
}
