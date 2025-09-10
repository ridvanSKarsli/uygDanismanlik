import React from 'react';
import Image from 'next/image'
import Script from 'next/experimental-script';
import Head from 'next/head';

const PLCTecnology: React.FC = () => {
  
    return (
        <>
        <Head>
            <title>PLC Teknolojisi Eğitimi - UYG Yönetim ve Danışmanlık</title>
            <meta charSet="utf-8"/>
            <meta property="keywords" content="plc eğitimi,plc,tia,eğitim ve danışmanlık" key="title" />
            <meta property="og:title" content="PLC Teknolojisi Eğitimi" key="title" />
            <meta name="Description" content="Genel kullanımlı bilgisayarların aksine PLC birçok girişi ve çıkışı olacak şekilde düzenlenir ve elektriksel gürültülere, sıcaklık farklarına, mekanik darbe ve titreşimlere karşı daha dayanıklı tasarlanırlar. PLC'ler denetleyeceği sistemin işleyişine uygun seçilir. " />
            <meta name="og:description" content="Genel kullanımlı bilgisayarların aksine PLC birçok girişi ve çıkışı olacak şekilde düzenlenir ve elektriksel gürültülere, sıcaklık farklarına, mekanik darbe ve titreşimlere karşı daha dayanıklı tasarlanırlar. PLC'ler denetleyeceği sistemin işleyişine uygun seçilir. " />
            <meta property="og:url" content="/plc-teknolojisi-egitimi" />
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
            <Image src='/images/egitimler/plc_teknolojisi_egitimi.png' className='image' width='1920' height='500' />
        </div>
        <div className='hakkimizda-aciklama'>
                <h1>PLC Teknolojisi Eğitimi</h1>
                <p>Genel kullanımlı bilgisayarların aksine PLC birçok girişi ve çıkışı olacak şekilde düzenlenir ve elektriksel gürültülere, sıcaklık farklarına, mekanik darbe ve titreşimlere karşı daha dayanıklı tasarlanırlar. PLC'ler denetleyeceği sistemin işleyişine uygun seçilir. </p>

                <p>Bu alanda bünyemizde verilen eğitimler aşağıdaki gibidir,</p>
                <ul>
                    <li>
                        PLC S7-200 Eğitimi
                    </li>
                    <li>
                        PLC S7-300/400 Temel Seviye Eğitimi (Simatic Manager)
                    </li>
                    <li> PLC S7-300/400 Orta Seviye Eğitimi (Simatic Manager)</li>
                    <li>PLC S7-300/400 İleri Seviye Eğitimi (Simatic Manager)</li>
                    <li>WinCC SCADA Eğitimi</li>
                    <li>WinCC Flexible Operatör Paneli Programlama Eğitimi</li>
                    <li>PLC S7-1200 TIA Portal Temel Seviye Eğitimi</li>
                    <li>PLC S7-1200 TIA Portal Orta Seviye Eğitimi</li>
                    <li> PLC S7 1200 TIA Portal İleri Seviye Eğitimi</li>
                    <li>PLC S7 300/400 TIA Portal Temel Seviye Eğitimi</li>
                    <li>PLC S7-300/400 TIA Portal Orta Seviye Eğitimi</li>
                    <li> PLC S7-300/400 TIA Portal İleri Seviye Eğitimi</li>
                    <li> TIA Portal WinCC SCADA Eğitimi</li>
                    <li>TIA Portal WinCC Flexible Eğitimi</li>
                    <li> PLC S7-1500 TIA Portal Temel Seviye Eğitimi</li>
                    <li> PLC S7-1500 TIA Portal Orta Seviye Eğitimi</li>
                    <li>PLC S7-1500 TIA Portal İleri Seviye Eğitimi</li>
                    <li>Mitsubishi Melsec-Q PLC Temel Seviye</li>
                    <li>Mitsubishi Melsec-Q İleri Seviye Eğitimi</li>
                    <li> Schneider M340 PLC UnityPro Temel Seviye Eğitimi Schneider M340 PLC UnityPro İleri Seviye Eğitimi</li>
                    <li> Vijeo Citect SCADA Eğitimi</li>
                </ul>
        </div>
    </>
  );
};

export default PLCTecnology;
