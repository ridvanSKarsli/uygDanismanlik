import React from "react";
import { AppProps } from "next/app";
import "antd/dist/antd.css";
import "@styles/global.scss";
import "@styles/header.scss";
import { Provider } from "react-redux";
import store from "@redux/store";
import { Footer, Breadcrumb, ScrollToTop } from "@components";
import {Header} from '@components';
import Head from "next/head";
import Script from 'next/experimental-script'

function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <>
      <Head>
        <title>UYG Yönetim ve Danışmanlık</title>
        <meta charSet="utf-8"/>
        <meta name="google-site-verification" content="9AM3jPU7dQvqIvzomWWvxZ7B9qE3WDFBW4UNdTlOpXU" />
        <meta property="og:title" content="UYG Danışmanlık Danışmanlık" key="title" />
        <link rel="icon" href="/icons/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#000000" />
        <meta name="author" content="UYG Danışmanlık"/>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="apple-touch-icon" sizes="180x180" href="/icons/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/icons/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/icons/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-H7KR0LT2B4"></script>
      <script async src="https://www.googletagmanager.com/gtag/js?id=G-H7KR0LT2B4"></script>
      <Script>{`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-TCRG84B')`}</Script>
            <noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-TCRG84B"
            height="0" width="0"></iframe></noscript>
      </Head>
      <Script id='ga-analytics'>
        {
          `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', '${process.env.NEXT_PUBLIC_GA_ID}');
          `
        }
      </Script>
    <Provider store={store}>
      <Header />
      <Breadcrumb />
          <Component {...pageProps} />
      <Footer />
      <ScrollToTop />
    </Provider>
    </>
  );
}

export default MyApp;
