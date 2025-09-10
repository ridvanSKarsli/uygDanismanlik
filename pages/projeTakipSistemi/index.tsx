import React from 'react';
import Head from 'next/head';
import Script from 'next/experimental-script';
import { Button } from 'antd';
import Image from 'next/image';
import Link from 'next/link';


const ProjeTakipSistemiPage: React.FC = () => {
  return (
    <>
      <Head>
        <title>İşletmeniz İçin Proje Çağrılarını Takip Edebileceğiniz Sistem - UYG Yönetim ve Danışmanlık</title>
        <meta charSet="utf-8"/>
        <meta property="keywords" content="proje takip,hibe çağrıları,destek programları,danışmanlık" key="title" />
        <meta property="og:title" content="İşletmeniz İçin Proje Çağrılarını Takip Edebileceğiniz Sistem" key="title" />
        <meta name="Description" content="İşletmenizin gelişimi için kritik öneme sahip proje çağrılarını takip edebileceğiniz gelişmiş sistem." />
        <meta name="og:description" content="İşletmenizin gelişimi için kritik öneme sahip proje çağrılarını takip edebileceğiniz gelişmiş sistem." />
        <meta property="og:url" content="/projeTakipSistemi" />
        <meta property="og:image" content="image3.webp" />
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
        <Image src='/images/project.webp' alt='Proje Takip Sistemi' className='image' layout='fill' />
        <div className='hakkimzda-description'>
            <h2>İşletmeniz İçin Proje Takip Sistemi</h2>
            <p>Çağrıları kaçırmayın, projelerinizi kolayca yönetin.</p>
        </div>
      </div>

      <div className='teknopark-page'>
        <div className="page-container">
          <h1 className="page-title">İş Fırsatlarını Yakalayın: Kapsamlı Proje Takip Sistemi</h1>
          
          <div className="service-intro">
            <div className="intro-content">
              <h2>Proje Sihirbazı ile Fırsatları Keşfedin</h2>
              <p>
                İşletmenizin büyümesini hızlandıracak güncel proje ve hibe çağrılarına tek platformdan erişin.
                Yapay zeka destekli sistemimizle hiçbir fırsatı kaçırmayın.
              </p>
              <div style={{ textAlign: 'center', marginTop: '30px' }}>
                <a
                  href="https://projesihirbazi.enmdigital.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="portal-link"
                >
                  Proje Sihirbazı Portalına Git
                </a>
              </div>
            </div>
          </div>

          <div className="service-section">
            <h2>Sunduğumuz Hizmetler</h2>
            <div className="advantages-grid">
              <div className="advantage-item">
                <h3>Kapsamlı Hibe ve İhale Takibi</h3>
                <p>Sektörünüze özel, her gün güncellenen ihale, hibe ve destek programlarını anında takip edin, hiçbir fırsatı kaçırmayın.</p>
              </div>
              <div className="advantage-item">
                <h3>Yapay Zeka Destekli Rehberlik</h3>
                <p>Başvuru koşullarını kolayca anlayın ve başvuru sürecinde yapay zeka destekli akıllı rehberliğimizle adım adım ilerleyin.</p>
              </div>
              <div className="advantage-item">
                <h3>Detaylı Sektörel Analiz</h3>
                <p>Sektörünüzün dinamiklerini derinlemesine analiz ederek en uygun hibe ve ihale fırsatlarını stratejik olarak belirleyin.</p>
              </div>
              <div className="advantage-item">
                <h3>Kolay ve Hızlı Başvuru Süreci</h3>
                <p>Uygun hibe ve ihale programlarına hızlı ve sorunsuz bir şekilde başvurun, bürokratik engelleri ortadan kaldırın.</p>
              </div>
              <div className="advantage-item">
                <h3>Gelişmiş Raporlama ve Analiz</h3>
                <p>Projelerinizin durumunu, başvuru süreçlerinizi ve performansınızı detaylı raporlama araçlarımızla anlık olarak takip edin.</p>
              </div>
              <div className="advantage-item">
                <h3>Özelleştirilmiş Anlık Bildirimler</h3>
                <p>Yeni çağrılar, son başvuru tarihleri ve önemli güncellemeler hakkında size özel anlık bildirimlerle her zaman bilgi sahibi olun.</p>
              </div>
            </div>
          </div>

          <div className="service-section">
            <h2>Sık Sorulan Sorular</h2>
            <div className="faq-section">
              <div className="faq-item">
                <h3>Proje Sihirbazı tam olarak nedir ve nasıl çalışır?</h3>
                <p>Proje Sihirbazı, işletmenizin sektörüne özel ihale, hibe ve destek çağrılarını yapay zeka algoritmalarıyla tarayan, analiz eden ve size sunan kapsamlı bir platformdur. Amacımız, iş fırsatlarını en verimli şekilde değerlendirmenizi sağlamaktır.</p>
              </div>
              <div className="faq-item">
                <h3>Proje Sihirbazı hangi sektörler ve işletme büyüklükleri için uygundur?</h3>
                <p>Platformumuz, KOBİ'lerden büyük ölçekli firmalara kadar geniş bir yelpazedeki işletmeler için tasarlanmıştır. Sanayi, teknoloji, tarım, enerji ve daha birçok farklı sektördeki işletmelere özel çözümler sunmaktayız.</p>
              </div>
              <div className="faq-item">
                <h3>Yapay zeka asistanı, başvuru süreçlerimde bana nasıl destek olur?</h3>
                <p>Yapay zeka asistanımız, karmaşık başvuru koşullarını analiz eder, gerekli belgeler hakkında rehberlik eder ve başvuru formlarını doldururken size adım adım yol gösterir. Böylece başvuru süreçlerinizi daha hızlı ve hatasız tamamlarsınız.</p>
              </div>
              <div className="faq-item">
                <h3>Proje Sihirbazı üzerinden bildirimler nasıl iletilir?</h3>
                <p>Yeni ihale ve hibe çağrıları, son başvuru tarihleri ve projenizin durumu hakkında e-posta, SMS ve platform içi anlık bildirimler ile düzenli olarak bilgilendirilirsiniz. Böylece hiçbir önemli gelişmeyi kaçırmazsınız.</p>
              </div>
              <div className="faq-item">
                <h3>Proje Sihirbazı'nın abonelik modelleri ve maliyetleri nelerdir?</h3>
                <p>İşletmenizin ihtiyaçlarına göre farklı abonelik paketleri sunmaktayız. Detaylı fiyat bilgileri ve size özel teklifler için lütfen bizimle iletişime geçin veya platformumuzu ziyaret edin.</p>
              </div>
            </div>
          </div>
          
          <div className="contact-section">
            <h2>Proje Takip Sistemi İçin Destek Alın</h2>
            <p>
              Uzman ekibimizle proje ve hibe fırsatlarını en iyi şekilde değerlendirin. 
              Size özel danışmanlık hizmetimizden yararlanmak için bizimle iletişime geçin.
            </p>
            <a href="/iletisim" className="contact-button">
              İletişime Geçin
            </a>
          </div>
        </div>
        </div>
      </>
    );
  };

  export default ProjeTakipSistemiPage; 