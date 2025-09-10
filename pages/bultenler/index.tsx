import React from "react";
import Head from 'next/head';
import Script from 'next/experimental-script';
import { Activities } from '../../src/components/activities';

import Image from 'next/image';

const BultenlerPage: React.FC = () => {
  return (
    <>
      <Head>
        <title>Bültenler - Etkinlikler ve Güncel Haberler - UYG Yönetim ve Danışmanlık</title>
        <meta charSet="utf-8"/>
        <meta property="keywords" content="bültenler,etkinlikler,haberler,danışmanlık" key="title" />
        <meta property="og:title" content="Bültenler - Etkinlikler ve Güncel Haberler" key="title" />
        <meta name="Description" content="Sektördeki son gelişmeler, yeni teşvikler, proje çağrıları ve önemli duyurular hakkında güncel bilgiler içeren düzenli bültenler." />
        <meta name="og:description" content="Sektördeki son gelişmeler, yeni teşvikler, proje çağrıları ve önemli duyurular hakkında güncel bilgiler içeren düzenli bültenler." />
        <meta property="og:url" content="/bultenler" />
        <meta property="og:image" content="bultenler.jpeg" />
        <link rel="manifest" href="/site.webmanifest" />
      </Head>
      <Script
        src="https://www.google-analytics.com/analytics.js"      />
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
      
      <div className='hakkmizda-banner'>
        <Image src='/images/etkinlik.webp' alt='Bültenler' className='image' layout='fill' />
        <div className='hakkimzda-description'>
            <h2>Bültenler ve Etkinlikler</h2>
            <p>Sektördeki son gelişmeler ve önemli duyurular hakkında güncel bilgiler.</p>
        </div>
      </div>
      
      <div className='teknopark-page'>
        <div className="page-container">
          <h1 className="page-title">Bültenler</h1>
          
          <div className="service-intro">
            <div className="intro-content">
              <h2>Güncel Haberler ve Duyurular</h2>
              <p>
                Sektördeki son gelişmeler, yeni teşvikler, proje çağrıları ve önemli duyurular hakkında 
                güncel bilgiler içeren düzenli bültenlerimizle her zaman bilgi sahibi olun.
              </p>
            </div>
          </div>

          <div className="service-section">
            <h2>Etkinlikler ve Haberler</h2>
            <Activities />
          </div>
          
          
        </div>
      </div>
      </>
    );
  };

  export default BultenlerPage; 