import React from 'react';
import Head from 'next/head';
import Script from 'next/experimental-script';
import Image from 'next/image';
import { IhracatKalkinmaAjansi } from '../../src/components/IhracatKalkinmaAjansi';

const IkdPage = () => {
  return (
    <>
      <Head>
        <title>İhracat ve Kalkınma Ajansı Destekleri - UYG Yönetim ve Danışmanlık</title>
        <meta charSet="utf-8"/>
        <meta property="keywords" content="ihracat, kalkınma ajansı, destek" key="title" />
        <meta property="og:title" content="İhracat & Kalkınma Ajansı Destekleri" key="title" />
        <meta name="Description" content="İhracat ve kalkınma ajansı destekleri başvuru hazırlama." />
        <meta name="og:description" content="İhracat ve kalkınma ajansı destekleri başvuru hazırlama." />
        <meta property="og:url" content="/ihracat-kalkinma-ajansi" />
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
        <Image src='/images/kurumsal_yonetim_danismanligi.webp' alt='İhracat & Kalkınma' className='image' layout='fill' />
        <div className='hakkimzda-description'>
            <h2>İhracat & Kalkınma Ajansı Destekleri</h2>
            <p>Başvuru hazırlama ve yönetim</p>
        </div>
      </div>

      <div className='hakkimizda-page'>
        <div className='page-container'>
          <IhracatKalkinmaAjansi />
          <div className='contact-section'>
            <h2>Detaylı Bilgi Alın</h2>
            <p>Hedef pazarlara yönelik desteklerden yararlanmanız için yanınızdayız.</p>
            <a href='/iletisim' className='contact-button'>Bize Ulaşın</a>
          </div>
        </div>
      </div>
    </>
  );
};

export default IkdPage;


