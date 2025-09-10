import React from 'react';
import Image from 'next/image'
import Script from 'next/experimental-script';
import Head from 'next/head';

const ElectiricElectronic: React.FC = () => {
  
    return (
        <>
        <Head>
            <title>Elektrik Elektronik Eğitimi - UYG Yönetim ve Danışmanlık</title>
            <meta charSet="utf-8"/>
            <meta property="keywords" content="Endüstriyel elektrik eğitimi,Endüstriyel Elektronik Eğitimi,AC/DC Motorlar ve Yol Verme Eğitimi,Sensörler Eğitimi,
            Elektrik Sistemlerinde Bakım ve Arıza Arama Eğitimi, kurumsal danışmanlık, Elektrik Ölçme Aletlerinin Kullanımı Eğitimi,eğitim ve danışmanlık" key="title" />
            <meta property="og:title" content="Elektrik Elektronik Eğitimi - UYG Danışmanlık Danışmanlık" key="title" />
            <meta name="Description" content="Transistör ve mikroçiplerin icadıyla birlikte günümüzde gelişen teknolojiye öncülük eden en önemli alanlardan ve inovasyona en açık mühendislik dallarıdır." />
            <meta name="og:description" content="Transistör ve mikroçiplerin icadıyla birlikte günümüzde gelişen teknolojiye öncülük eden en önemli alanlardan ve inovasyona en açık mühendislik dallarıdır." />
            <meta property="og:url" content="/eklektirik-elektronik-eigitimi" />
            <meta property="og:image" content="electronic.jpeg" />
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
            <Image src='/images/electronic.webp' className='image' width='1920' height='500' />
        </div>
        <div className='hakkimizda-aciklama'>
                <h1>Elektrik Elektronik Eğitimi</h1>
                <p>Transistör ve mikroçiplerin icadıyla birlikte günümüzde gelişen teknolojiye öncülük eden en önemli alanlardan ve inovasyona en açık mühendislik dallarıdır.</p>
                <p>Bu alanda bünyemizde verilen eğitimler aşağıdaki gibidir,</p>
                <ul>
                    <li>
                        Endüstriyel Elektrik Eğitimi
                    </li>
                    <li>
                        Endüstriyel Elektronik Eğitimi
                    </li>
                    <li>Elektrik Sistemlerinde Bakım ve Arıza Arama Eğitimi</li>
                    <li>Endüstriyel Elektrik Panoları Eğitimi</li>
                    <li>Elektrik Ölçme Aletlerinin Kullanımı Eğitimi </li>
                    <li>AC/DC Motorlar ve Yol Verme Eğitimi</li>
                    <li> Servo Motor ve Sürücüler Eğitimi</li>
                    <li>Endüstride Reaktif Güç Kompanzasyonu Eğitimi</li>
                    <li>Sensörler Eğitimi</li>
                </ul>
        </div>
    </>
  );
};

export default ElectiricElectronic;
