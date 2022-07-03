import React from "react";
import Head from "next/head";
import Script from "next/script";
import Cursor from "../components/Cursor";
import ScrollToTop from "../components/Scroll-to-top";
import LoadingScreen from "../components/Loading-Screen";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>The DigiBase</title>
        <link rel="icon" href="/img/favicon.ico" />
      </Head>
      <Cursor />
      <LoadingScreen />
      <ScrollToTop />
      <Component {...pageProps} />

      <Script id="wow" src="/js/wow.min.js"></Script>
      <Script
        strategy="beforeInteractive"
        id="splitting"
        src="/js/splitting.min.js"
      ></Script>
      <Script id="simpleParallax" src="/js/simpleParallax.min.js"></Script>
      <Script
        id="isotope"
        strategy="beforeInteractive"
        src="/js/isotope.pkgd.min.js"
      ></Script>
      <Script id="initWow" strategy="lazyOnload">{`new WOW().init();`}</Script>
    </>
  );
}

export default MyApp;
