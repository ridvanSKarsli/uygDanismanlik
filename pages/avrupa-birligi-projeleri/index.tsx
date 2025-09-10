import React from 'react';
import Head from 'next/head';
import Script from 'next/experimental-script';
import Image from 'next/image';
import { AvrupaBirligiProjeleri } from '../../src/components/AvrupaBirligiProjeleri';

const AbpPage = () => {
  return (
    <>
      <Head>
        <title>Avrupa Birliği Projeleri - UYG Yönetim ve Danışmanlık</title>
        <meta charSet="utf-8"/>
        <meta property="keywords" content="avrupa birliği projeleri, horizon, erasmus" key="title" />
        <meta property="og:title" content="Avrupa Birliği Projeleri" key="title" />
        <meta name="Description" content="AB programları başvuru ve yönetim danışmanlığı." />
        <meta name="og:description" content="AB programları başvuru ve yönetim danışmanlığı." />
        <meta property="og:url" content="/avrupa-birligi-projeleri" />
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
        <Image src='/images/kurumsal_proje_danismanligi.webp' alt='AB Projeleri' className='image' layout='fill' />
        <div className='hakkimzda-description'>
            <h2>Avrupa Birliği Projeleri</h2>
            <p>Programlar ve danışmanlık</p>
        </div>
      </div>

      <div className='hakkimizda-page'>
        <div className='page-container'>
          <AvrupaBirligiProjeleri />
          <div className='contact-section'>
            <h2>Detaylı Bilgi Alın</h2>
            <p>AB fonlarına erişim için rehberlik sağlıyoruz.</p>
            <a href='/iletisim' className='contact-button'>Bize Ulaşın</a>
          </div>
        </div>
      </div>
    </>
  );
};

export default AbpPage;


