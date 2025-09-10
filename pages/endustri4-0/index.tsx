import React from 'react';
import Image from 'next/image'
import Script from 'next/experimental-script';
import Head from 'next/head';

const Endustri40: React.FC = () => {
  
    return (
        <>
        <Head>
            <title>Endüstri 4.0 Ve Haberleşme Protokelleri Eğitimleri - UYG Yönetim ve Danışmanlık</title>
            <meta charSet="utf-8"/>
            <meta property="keywords" content="AS-I,ModBUS,IO,Endüstri 4.0,AS-I Haberleşme Eğitimi,ProfiBUS Eğitimi,ProfiBUS,eğitim ve danışmanlık" key="title" />
            <meta property="og:title" content="Dijital dünyada işletmelerinizde bilişim teknolojileri ile endüstriyi verimli bir şekilde bir araya getirmeyi amaçlıyoruz." key="title" />
            <meta name="Description" content="Dijital dünyada işletmelerinizde bilişim teknolojileri ile endüstriyi verimli bir şekilde bir araya getirmeyi amaçlıyoruz." />
            <meta name="og:description" content="Dijital dünyada işletmelerinizde bilişim teknolojileri ile endüstriyi verimli bir şekilde bir araya getirmeyi amaçlıyoruz." />
            <meta property="og:url" content="/endustri4-0" />
            <meta property="og:image" content="endustri.jpeg" />
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
            <Image src='/images/endustri.jpeg' className='image' width='1920' height='500' />
        </div>
        <div className='hakkimizda-aciklama'>
                <h1>Endüstri 4.0 Ve Haberleşme Protokelleri Eğitimleri</h1>
                <p>Dijital dünyada işletmelerinizde bilişim teknolojileri ile endüstriyi verimli bir şekilde bir araya getirmeyi amaçlıyoruz.</p>

                <p>Bu alanda bünyemizde verilen eğitimler aşağıdaki gibidir,</p>
                <ul>
                    <li>
                        AS-I Haberleşme Eğitimi
                    </li>
                    <li>
                        Ethernet Haberleşme Eğitimi
                    </li>
                    <li>ProfiBUS Eğitimi</li>
                    <li>ModBUS Haberleşme Eğitimi</li>  
                    <li>IO Link Sensörler ile Akıllı Fabrikalar </li>
                    <li>DALI ile Aydınlatma Otomasyonu Eğitimi</li>
                    <li>Otomasyonda Enerji Verimliliği Eğitimi</li>
                    <li>Endüstri 4.0 ve Bulut Sistemleri Uygulamaları</li>
                </ul>
        </div>
    </>
  );
};

export default Endustri40;
