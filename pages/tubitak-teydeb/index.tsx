import React from 'react';
import Head from 'next/head';
import Script from 'next/experimental-script';
import Image from 'next/image';
import { TubitakTeydeb } from '../../src/components/TubitakTeydeb';

const TubitakTeydebPage = () => {
  return (
    <>
      <Head>
        <title>TÜBİTAK-TEYDEB Destek Programları - UYG Yönetim ve Danışmanlık</title>
        <meta charSet="utf-8"/>
        <meta property="keywords" content="tubitak, teydeb, ar-ge, destek" key="title" />
        <meta property="og:title" content="TÜBİTAK-TEYDEB Destek Programları" key="title" />
        <meta name="Description" content="TÜBİTAK-TEYDEB başvuru ve yürütme danışmanlığı." />
        <meta name="og:description" content="TÜBİTAK-TEYDEB başvuru ve yürütme danışmanlığı." />
        <meta property="og:url" content="/tubitak-teydeb" />
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
        <Image src='/images/corparate.webp' alt='TÜBİTAK-TEYDEB' className='image' layout='fill' />
        <div className='hakkimzda-description'>
            <h2>TÜBİTAK-TEYDEB Destek Programları</h2>
            <p>Başvuru ve yürütme danışmanlığı</p>
        </div>
      </div>

      <div className='hakkimizda-page'>
        <div className='page-container'>
          <TubitakTeydeb />
          <div className='contact-section'>
            <h2>Detaylı Bilgi Alın</h2>
            <p>Uzman ekibimizle projenizi birlikte şekillendirelim.</p>
            <a href='/iletisim' className='contact-button'>Bize Ulaşın</a>
          </div>
        </div>
      </div>
    </>
  );
};

export default TubitakTeydebPage;


