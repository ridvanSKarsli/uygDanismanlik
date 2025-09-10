import React from 'react';
import Head from 'next/head';
import Script from 'next/experimental-script';
import Image from 'next/image';
import { TeknolojiGelistirmeBolgesi } from '../../src/components/TeknolojiGelistirmeBolgesi';

const TgbPage = () => {
  return (
    <>
      <Head>
        <title>Teknoloji Geliştirme Bölgesi - UYG Yönetim ve Danışmanlık</title>
        <meta charSet="utf-8"/>
        <meta property="keywords" content="teknopark, teknokent, tgb" key="title" />
        <meta property="og:title" content="Teknoloji Geliştirme Bölgesi" key="title" />
        <meta name="Description" content="Teknopark/Teknokent başvuru ve sürdürülebilirlik danışmanlığı." />
        <meta name="og:description" content="Teknopark/Teknokent başvuru ve sürdürülebilirlik danışmanlığı." />
        <meta property="og:url" content="/teknoloji-gelistirme-bolgesi" />
        <meta property="og:image" content="/images/kurumsal_proje_danismanligi.webp" />
        <link rel="manifest" href="/site.webmanifest" />
      </Head>
      <Script src="https://www.google-analytics.com/analytics.js" />
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
        <Image src='/images/etkinlik.webp' alt='TGB' className='image' layout='fill' />
        <div className='hakkimzda-description'>
            <h2>Teknoloji Geliştirme Bölgesi</h2>
            <p>Teknopark/Teknokent başvuru ve sürdürülebilirlik</p>
        </div>
      </div>

      <div className='hakkimizda-page'>
        <div className='page-container'>
          <TeknolojiGelistirmeBolgesi />
          <div className='contact-section'>
            <h2>Detaylı Bilgi Alın</h2>
            <p>TGB süreçlerini birlikte planlayalım.</p>
            <a href='/iletisim' className='contact-button'>Bize Ulaşın</a>
          </div>
        </div>
      </div>
    </>
  );
};

export default TgbPage;


