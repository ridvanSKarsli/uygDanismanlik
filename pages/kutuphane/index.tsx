import React from 'react';
import Head from 'next/head';
import Script from 'next/experimental-script';
import { 
  BookOutlined, 
  FileTextOutlined, 
  FileSearchOutlined, 
  VideoCameraOutlined, 
  DollarOutlined, 
  FolderOutlined,
  ReadOutlined,
  RocketOutlined,
  ExperimentOutlined,
  SettingOutlined,
  GlobalOutlined
} from '@ant-design/icons';

import Image from 'next/image';

const KutuphanePage: React.FC = () => {
  return (
    <>
      <Head>
        <title>Kütüphane - UYG Yönetim ve Danışmanlık</title>
        <meta charSet="utf-8"/>
        <meta property="keywords" content="kütüphane,raporlar,makaleler,blog,bültenler,dökümanlar" key="title" />
        <meta property="og:title" content="Kütüphane" key="title" />
        <meta name="Description" content="Eğitim ve etkinlikler, raporlar, makaleler, v-blog, bültenler ve tanım dökümanları." />
        <meta name="og:description" content="Eğitim ve etkinlikler, raporlar, makaleler, v-blog, bültenler ve tanım dökümanları." />
        <meta property="og:url" content="/kutuphane" />
        <meta property="og:image" content="kutuphane.jpeg" />
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
        <Image src='/images/image2.webp' alt='Kütüphane' className='image' layout='fill' />
        <div className='hakkimzda-description'>
            <h2>Bilgi Kütüphanemiz</h2>
            <p>Eğitim materyalleri, raporlar, makaleler ve daha fazlası için kaynak merkezi.</p>
        </div>
      </div>
      
      <div className='kutuphane-page'>
        <div className="page-container">
          <h1 className="page-title">Kütüphane</h1>
        
        <div className="kutuphane-grid">
          <div className="kutuphane-card">
            <div className="card-icon">
              <BookOutlined />
            </div>
            <div className="card-content">
              <h3>Eğitim ve Etkinlikler</h3>
              <p>Kişisel gelişim ve mesleki eğitim materyalleri</p>
            </div>
          </div>

          <div className="kutuphane-card">
            <div className="card-icon">
              <FileTextOutlined />
            </div>
            <div className="card-content">
              <h3>Raporlar</h3>
              <p>Detaylı analiz ve araştırma raporları</p>
            </div>
          </div>

          <div className="kutuphane-card">
            <div className="card-icon">
              <FileSearchOutlined />
            </div>
            <div className="card-content">
              <h3>Makaleler</h3>
              <p>Uzman görüşleri ve teknik makaleler</p>
            </div>
          </div>

          <div className="kutuphane-card">
            <div className="card-icon">
              <VideoCameraOutlined />
            </div>
            <div className="card-content">
              <h3>V-Blog</h3>
              <p>Video blog içerikleri ve eğitimler</p>
            </div>
          </div>

          <div className="kutuphane-card">
            <div className="card-icon">
              <DollarOutlined />
            </div>
            <div className="card-content">
              <h3>Bültenler</h3>
              <p>Güncel haberler ve sektörel bültenler</p>
            </div>
          </div>

          <div className="kutuphane-card">
            <div className="card-icon">
              <FolderOutlined />
            </div>
            <div className="card-content">
              <h3>Tanım Dökümanları</h3>
              <p>Proje tanımları ve teknik dökümanlar</p>
            </div>
          </div>
        </div>
      </div>

      {/* Eğitimlerimiz Bölümü */}
      <div className='egitimlerimiz-section'>
        <h2>Eğitimlerimiz</h2>
        
        <div className="egitimler-grid">
          <div className="egitim-card">
            <div className="egitim-icon">
              <ReadOutlined />
            </div>
            <div className="egitim-content">
              <h3>Proje Döngüsü Eğitimi</h3>
              <p>Proje yönetimi ve döngü süreçleri hakkında kapsamlı eğitim programı</p>
              <a href="/proje-dongusu-egitimi" className="egitim-link">Detayları Gör</a>
            </div>
          </div>

          <div className="egitim-card">
            <div className="egitim-icon">
              <GlobalOutlined />
            </div>
            <div className="egitim-content">
              <h3>Digital Öğretim Uygulamaları</h3>
              <p>Modern dijital eğitim araçları ve uygulamaları eğitimi</p>
              <a href="/digital-ogrenim-egitimi" className="egitim-link">Detayları Gör</a>
            </div>
          </div>

          <div className="egitim-card">
            <div className="egitim-icon">
              <ExperimentOutlined />
            </div>
            <div className="egitim-content">
              <h3>Elektrik Elektronik Eğitimi</h3>
              <p>Temel elektrik ve elektronik konularında pratik eğitim</p>
              <a href="/eklektirik-elektronik-eigitimi" className="egitim-link">Detayları Gör</a>
            </div>
          </div>

          <div className="egitim-card">
            <div className="egitim-icon">
              <SettingOutlined />
            </div>
            <div className="egitim-content">
              <h3>PLC Teknolojisi Eğitimi</h3>
              <p>Programlanabilir Lojik Kontrol sistemleri eğitimi</p>
              <a href="/plc-teknolojisi-egitimi" className="egitim-link">Detayları Gör</a>
            </div>
          </div>

          <div className="egitim-card">
            <div className="egitim-icon">
              <RocketOutlined />
            </div>
            <div className="egitim-content">
              <h3>Endüstri 4.0 ve Haberleşme Protokolleri</h3>
              <p>Endüstri 4.0 teknolojileri ve iletişim protokolleri eğitimi</p>
              <a href="/endustri4-0" className="egitim-link">Detayları Gör</a>
            </div>
          </div>
        </div>
        </div>
      </div>


    </>
  );
};

export default KutuphanePage; 