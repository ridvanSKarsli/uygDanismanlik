import React from 'react';
import Head from 'next/head';
import Script from 'next/experimental-script';
import { Button } from 'antd'; // Added Button import

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
        <meta property="og:image" content="proje-takip.jpeg" />
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
      
      <div className='hakkimizda-aciklama'>
        <h1>İşletmeniz İçin Proje Çağrılarını Takip Edebileceğiniz Sistem</h1>
          <div style={{ textAlign: 'center', marginBottom: '40px' }}>
            <p style={{ marginBottom: '20px', fontSize: '1.1em' }}>
              Proje Sihirbazı platformuna erişmek için aşağıdaki butona tıklayabilirsiniz.
            </p>
            <Button 
              type="primary" 
              size="large" 
              href="https://projesihirbazi.enmdigital.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="proje-sihirbazi-button"
            >
              Proje Sihirbazı Portalına Git
            </Button>
          </div>

          <div className="content-section">
            <p style={{ fontSize: '1.2em', textAlign: 'center', marginBottom: '30px' }}>
              Her gün taranan ihale ve hibe çağrıları ile fırsatları kaçırmadan, başvuru sürecini hızlandırın.
            </p>
          </div>

          <div className="content-section">
            <h2>Sunduğumuz Hizmetler</h2>
            <div className="advantages-grid">
              <div className="advantage-item">
                <h3>Her Gün Güncellenen İhale Takibi</h3>
                <p>Sektörünüz için uygun ihale ve hibe çağrılarını her gün otomatik olarak tarar ve size özel bildirimler gönderir.</p>
              </div>
              <div className="advantage-item">
                <h3>Akıllı Rehberlik</h3>
                <p>Başvuru koşullarını hızlıca öğrenmenizi ve başvuru sırasında adım adım yönlendirilmenizi sağlar.</p>
              </div>
              <div className="advantage-item">
                <h3>Kapsamlı Sektörel Analiz</h3>
                <p>Sektörünüzü derinlemesine analiz ederek en uygun fırsatları değerlendirmenizi sağlar.</p>
              </div>
              <div className="advantage-item">
                <h3>Tek Tıkla Başvuru</h3>
                <p>Uygun ihale ve hibelere tek tıkla başvurmanızı kolaylaştırır.</p>
              </div>
              <div className="advantage-item">
                <h3>Dinamik Raporlama Araçları</h3>
                <p>Faaliyetlerinizle ilgili kapsamlı raporlar oluşturarak stratejik kararlar almanıza yardımcı olur.</p>
              </div>
              <div className="advantage-item">
                <h3>Anlık Bildirimler</h3>
                <p>Değişiklikler ve yeni fırsatlar hakkında anında bilgilendirme sağlayarak hızlı aksiyon almanıza olanak tanır.</p>
              </div>
            </div>
          </div>

          <div className="content-section">
            <h2>Sık Sorulan Sorular</h2>
            <div className="faq-section">
              <div className="faq-item">
                <h3>Proje Sihirbazı nedir?</h3>
                <p>Proje Sihirbazı, sektörünüz için en uygun ihale ve hibe çağrılarını takip eden gelişmiş bir platformdur.</p>
              </div>
              <div className="faq-item">
                <h3>Hangi sektörler için uygundur?</h3>
                <p>Tüm sektörler için uygundur. Sektör bazlı veya tüm sektörler paketlerinden size uygun olanı seçebilirsiniz.</p>
              </div>
              <div className="faq-item">
                <h3>Yapay zeka asistanı nasıl çalışır?</h3>
                <p>Yapay zeka asistanı, başvuru koşullarını analiz eder ve size özel rehberlik sağlar.</p>
              </div>
              <div className="faq-item">
                <h3>Proje Sihirbazı ile nasıl bildirim alırım?</h3>
                <p>Anlık bildirimler ile yeni fırsatlar hakkında anında bilgilendirilirsiniz.</p>
              </div>
              <div className="faq-item">
                <h3>Proje Sihirbazı'nın maliyeti nedir?</h3>
                <p>Sektör bazlı paket 2000$ + KDV/yıllık, tüm sektörler paketi 20000$ + KDV/yıllıktır.</p>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  };

  export default ProjeTakipSistemiPage; 