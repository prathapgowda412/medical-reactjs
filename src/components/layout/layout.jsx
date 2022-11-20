import React from 'react';
import Footer from './footer/footer';
import Header from './header/header';

const Layout = ({ children }) => {
  return (
    <div>
      <Header />
      <main className='mt-16 max-w-[1440px] mx-auto'>{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
