/* eslint-disable @next/next/no-css-tags */
import React from 'react'
import Head from 'next/head'
// 

const DarkTheme = ({ children }) => {
  return (
    <>
      <Head>
        <>
    <link rel="stylesheet" href="/css/dark.css" />
    <!-- Google tag (gtag.js) -->
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-EK5TN8H9G2"></script>
        <script>
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'G-EK5TN8H9G2');
        </script>
  </>
      </Head>
      {children}
      
    </>
  );
};

export default DarkTheme
