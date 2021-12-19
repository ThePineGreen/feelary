import React from "react";
import Head from 'next/head';
import { Header } from '../components/Header';

const Layout = ({ children }) => {
  return (
    <div className='bg-white dark:bg-zinc-900'>
      <div className="container mx-auto">
        <div className="flex flex-col h-screen overflow-hidden">
          <Head>
            <title>feelary</title>
            <link rel="icon" href="/favicon.ico" />
          </Head>
          <Header />
          {children}
        </div>
      </div>
    </div>
  );
}

export default Layout;