import React from 'react';
import Header from './Header';
import Footer from './Footer';
import CursorDot from './CurserDot';

const Layout = ({ children }) => {
  return (
    <>
    <CursorDot/>
      <Header />
      <main style={{ minHeight: "100vh" }}>
        {children} 
      </main>
      <Footer />
    </>
  );
};

export default Layout;
