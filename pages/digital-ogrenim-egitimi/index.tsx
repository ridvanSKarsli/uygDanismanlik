import React from 'react';
import Image from 'next/image'
import Head from 'next/head';
import Script from 'next/experimental-script'

const DigitalPlatform: React.FC = () => {
  
    return (
        <>
        <Head>
            <title>Dijital Öğrenim Eğitimi - UYG Yönetim ve Danışmanlık</title>
            <meta charSet="utf-8"/>
            <meta property="keywords" content="Dijital,eğitim,digital uygulama eğitimi,kurumsal danışmanlık, eğitim ve danışmanlık" key="title" />
            <meta property="og:title" content="Dijital Öğrenim Eğitimi - UYG Danışmanlık Danışmanlık" key="title" />
            <meta name="Description" content="Dijital öğrenme dünyası, arta teknolojik gelişmelerle zenginleşmeye devam etmekte. Aynı zamanda teknolojinin gelişmesine bağlı olarak günümüz çocukları doğar doğmaz
                    teknoloji ile tanışmakta, yeni nesil olarak nitelendirebileceğimiz öğrencilerin hayatlarının
                    merkezine yerleşmiş durumdadır." />
            <meta name="og:description" content="Dijital öğrenme dünyası, arta teknolojik gelişmelerle zenginleşmeye devam etmekte. Aynı zamanda teknolojinin gelişmesine bağlı olarak günümüz çocukları doğar doğmaz
                teknoloji ile tanışmakta, yeni nesil olarak nitelendirebileceğimiz öğrencilerin hayatlarının
                merkezine yerleşmiş durumdadır." />
            <meta property="og:url" content="/digital-ogrenim-egitimi" />
            <meta property="og:image" content="digitalplatform.jpeg" />
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
            <Image src='/images/digitalplatform.jpeg' className='image' width='1920' height='500' />
        </div>
        <div className='hakkimizda-aciklama'>
                <h1>Digital Öğretim Uygulama</h1>
                <p>Dijital öğrenme dünyası, arta teknolojik gelişmelerle zenginleşmeye devam etmekte.
                    Aynı zamanda teknolojinin gelişmesine bağlı olarak günümüz çocukları doğar doğmaz
                    teknoloji ile tanışmakta, yeni nesil olarak nitelendirebileceğimiz öğrencilerin hayatlarının
                    merkezine yerleşmiş durumdadır. Bu durum öğrencilerin öğrenme stillerini ve öğretim
                    ortamlarından beklentilerini değiştirmektedir. Bu sürece uyum sağlayabilmek öğretmenler,
                    ebeveynler ve eğitim-öğretim kurumları için bir zorunluluk olmuştur. Son 10 yıldır hızla
                    gelişim gösteren dijital öğrenme uygulamaları Covid-19 pandemisi nedeniyle daha da tanınır
                    hale gelmiştir. Halihazırda uygulanan eğitim-öğretim faaliyetleri uzaktan eğitim olarak
                    nitelendirilmekte, öğretmenler ve eğitim kurumları hazır içerik ve web araçları kullanarak
                    süreci yürütmeye çabalamaktadır. Halbuki eğitim belirlenen kazanımlar ışığında hedef kitleye
                    özelleştirilerek gerçekleştirilmeli, bu durum öğrenci merkezli öğretim uygulamalarının temelini
                    oluşturmaktadır.
                </p>
                <p>Yürüttüğümüz eğitim programımızda her bir eğitim-öğretim kurumunun kendine ait
                    içerikler geliştirebilmesi için öğretmen eğitimleri düzenlenmektedir. Eğitim içeriğimizde;
                </p>
                <ul>
                    <li>
                        Öğretim Tasarımı
                    </li>
                    <li>
                        Senaryo Oluşturma Eğitimi
                    </li>
                    <li>Dijital Ders Tasarımı Eğitimi</li>
                    <li>İçerik Düzenleme</li>
                    <li>Greenscreen Uygulamaları </li>
                    <li>Ölçme Değerlendirme</li>
                </ul>
                <p>olmak üzere 6 modül bulunmakta ve online tabanlı
                    yürütülmektedir. Eğitmenlerimiz alanında yüksek lisans ve doktora derecesine sahip
                    akademik danışmanlarımızdan oluşmaktadır. </p>
        </div>
    </>
  );
};

export default DigitalPlatform;
