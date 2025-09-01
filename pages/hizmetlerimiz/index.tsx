import React from 'react';
import Head from 'next/head';
import Script from 'next/experimental-script';
import { TubitakTeydeb } from '../../src/components/TubitakTeydeb';
import { KosgebDestekleri } from '../../src/components/KosgebDestekleri';
import { TeknolojiGelistirmeBolgesi } from '../../src/components/TeknolojiGelistirmeBolgesi';
import { AvrupaBirligiProjeleri } from '../../src/components/AvrupaBirligiProjeleri';
import { YatirimTesvikBelgesi } from '../../src/components/YatirimTesvikBelgesi';
import { IhracatKalkinmaAjansi } from '../../src/components/IhracatKalkinmaAjansi';

const Hizmetlerimiz = () => {
  return (
    <>
      <Head>
          <title>Hizmetlerimiz - UYG Yönetim ve Danışmanlık</title>
          <meta charSet="utf-8"/>
          <meta property="keywords" content="hizmetlerimiz, danışmanlık, projeler, destekler" key="title" />
          <meta property="og:title" content="Hizmetlerimiz - UYG Yönetim ve Danışmanlık" key="title" />
          <meta name="Description" content="UYG Yönetim ve Danışmanlık olarak sunduğumuz tüm hizmetleri bu sayfada bulabilirsiniz." />
          <meta name="og:description" content="UYG Yönetim ve Danışmanlık olarak sunduğumuz tüm hizmetleri bu sayfada bulabilirsiniz." />
          <meta property="og:url" content="/hizmetlerimiz" />
          <meta property="og:image" content="endustri.jpeg" />
          <link rel="manifest" href="/site.webmanifest" />
      </Head>
      <Script
          src="https://www.google-analytics.com/analytics.js"
      />
      <Script id="google-analytics">
          {`
          (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
          (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
          m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
          })(window,document,'script','https://www.google-analytics.com/analytics.js','ga');

          ga('create', 'G-H7KR0LT2B4', 'auto');
          ga('send', 'pageview');
          `}
      </Script>
      <div className='hakkimizda-aciklama'>
        <TubitakTeydeb />
        <KosgebDestekleri />
        <TeknolojiGelistirmeBolgesi />
        <AvrupaBirligiProjeleri />
        <YatirimTesvikBelgesi />
        <IhracatKalkinmaAjansi />
      </div>
    </>
  );
};

export default Hizmetlerimiz;