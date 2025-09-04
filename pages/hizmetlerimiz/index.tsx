import React from 'react';
import Head from 'next/head';
import Script from 'next/experimental-script';
import { TubitakTeydeb } from '../../src/components/TubitakTeydeb';
import { KosgebDestekleri } from '../../src/components/KosgebDestekleri';
import { TeknolojiGelistirmeBolgesi } from '../../src/components/TeknolojiGelistirmeBolgesi';
import { AvrupaBirligiProjeleri } from '../../src/components/AvrupaBirligiProjeleri';
import { YatirimTesvikBelgesi } from '../../src/components/YatirimTesvikBelgesi';
import { IhracatKalkinmaAjansi } from '../../src/components/IhracatKalkinmaAjansi';

import Image from 'next/image';

const Hizmetlerimiz = () => {
  return (
    <>
      <Head>
          <title>Hizmetlerimiz - UYG Yönetim ve Danışmanlık</title>
          <meta charSet="utf-8"/>
          <meta property="keywords" content="hizmetlerimiz, danışmanlık, projeler, destekler" key="title" />
          <meta property="og:title" content="Hizmetlerimiz - UYG Yönetim ve Danışmanlık" key="title" />
          <meta name="Description" content="UYG Yönetim ve Danışmanlık olarak sunduğumuz tüm hizmetleri bu sayfada bulabilirsiniz." />
          <meta name="og:description" content="UYG Yönetim ve Danışmanlık olarak sunduğumuz tüm hizmetleri bu sayfada bulabilirsiniz." />
          <meta property="og:url" content="/hizmetlerimiz" />
          <meta property="og:image" content="endustri.jpeg" />
          <link rel="manifest" href="/site.webmanifest" />
      </Head>
      <Script
          src="https://www.google-analytics.com/analytics.js"
      />
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
        <Image src='/images/kurumsal_proje_danismanligi.webp' alt='Hizmetlerimiz' className='image' layout='fill' />
        <div className='hakkimzda-description'>
            <h2>Profesyonel Danışmanlık Hizmetlerimiz</h2>
            <p>İşletmenizin büyümesi ve gelişimi için kapsamlı destek ve danışmanlık hizmetleri.</p>
        </div>
      </div>
      
      <div className='hizmetlerimiz-page'>
        <div className="page-container">
          <h1 className="page-title">Hizmetlerimiz</h1>
          
          <div className="service-intro">
            <div className="intro-content">
              <h2>Kapsamlı Danışmanlık Hizmetleri</h2>
              <p>
                UYG Yönetim ve Danışmanlık olarak, işletmenizin her aşamasında yanınızdayız. 
                Proje geliştirmeden finansman kaynaklarına, teknoloji transferinden yatırım teşviklerine 
                kadar geniş bir yelpazede profesyonel hizmet sunuyoruz.
              </p>
            </div>
          </div>
          
          <div className="hizmetler-grid">
            <div className="hizmet-card">
              <div className="hizmet-header">
                <h3>TÜBİTAK-TEYDEB Destek Programları</h3>
                <p>Başvuru ve Yürütme Danışmanlığı</p>
              </div>
              <div className="hizmet-content">
                <div className="hizmet-description">
                  TÜBİTAK TEYDEB Destek Programları çerçevesinde, proje koordinatörlerimiz, firmaların veya bireylerin proje fikirlerini dinleyerek, başvurulacak programın değerlendirme ölçütlerine dayanarak analiz eder ve planlama yapar.
                </div>
                <div className="hizmet-subtitle">Danışmanlığını Yaptığımız Sektörler:</div>
                <div className="sektorler-grid">
                  <div className="sektor-item">Tarım</div>
                  <div className="sektor-item">Madencilik</div>
                  <div className="sektor-item">Makine</div>
                  <div className="sektor-item">Otomotiv</div>
                  <div className="sektor-item">Savunma</div>
                  <div className="sektor-item">Elektronik</div>
                  <div className="sektor-item">Turizm</div>
                  <div className="sektor-item">Mobilya</div>
                  <div className="sektor-item">Finans</div>
                  <div className="sektor-item">İnşaat</div>
                  <div className="sektor-item">Lojistik</div>
                  <div className="sektor-item">Medya</div>
                  <div className="sektor-item">Gıda</div>
                  <div className="sektor-item">Tekstil</div>
                  <div className="sektor-item">Enerji</div>
                  <div className="sektor-item">Metal</div>
                  <div className="sektor-item">Eğitim</div>
                  <div className="sektor-item">Plastik</div>
                  <div className="sektor-item">Sağlık</div>
                  <div className="sektor-item">Kimya</div>
                </div>
                <div className="hizmet-subtitle">Başlıca TEYDEB Programları:</div>
                <div className="hizmet-item">1503 Proje Pazarları Destekleme Programı</div>
                <div className="hizmet-item">1505 Üniversite-Sanayi İşbirliği Destek Programı</div>
                <div className="hizmet-item">1509 Uluslararası Sanayi Ar-Ge Projeleri</div>
                <div className="hizmet-item">1511 Öncelikli Alanlar Araştırma Teknoloji Geliştirme</div>
                <div className="hizmet-item">1002 Hızlı Destek Programı</div>
                <div className="hizmet-item">1515 Öncül Ar-Ge Laboratuvarları Destekleme</div>
                <div className="hizmet-item">1602 Patent Destek Programı</div>
              </div>
            </div>
            
            <div className="hizmet-card">
              <div className="hizmet-header">
                <h3>KOSGEB Destek Programları</h3>
                <p>Başvuru ve Yürütme Danışmanlığı</p>
              </div>
              <div className="hizmet-content">
                <div className="hizmet-description">
                  KOSGEB programının amacı; Mikro ve Küçük İşletmelerin salgın şartlarında faaliyetlerini sürdürmelerinin ve geçmiş dönem ortalama istihdam seviyelerini koruyarak yeni personel istihdam etmelerinin sağlanmasıdır.
                </div>
                <div className="hizmet-subtitle">Danışmanlığını Yaptığımız KOSGEB Programları:</div>
                <div className="hizmet-item">KOBİ Enerji Verimliliği Destek Programı</div>
                <div className="hizmet-item">Girişimci Destek Programı</div>
                <div className="hizmet-item">İş Birliği Destek Programı</div>
                <div className="hizmet-item">KOBİ Dijital Dönüşüm Destek Programı</div>
                <div className="hizmet-item">KOBİ TEKNOYATIRIM Destek Programı</div>
                <div className="hizmet-item">Stratejik Ürün Destek Programı</div>
              </div>
            </div>
            
            <div className="hizmet-card">
              <div className="hizmet-header">
                <h3>Teknoloji Geliştirme Bölgesi</h3>
                <p>Teknopark/Teknokent Başvuru ve Sürdürülebilirliği</p>
              </div>
              <div className="hizmet-content">
                <div className="hizmet-description">
                  4691 sayılı Teknoloji Geliştirme Bölgeleri Kanunu'nun amacı, üniversiteler, araştırma kurumları ve üretim sektörleri arasındaki işbirliğini teşvik ederek ülke sanayisini uluslararası rekabetçi ve ihracata yönelik bir yapıya dönüştürmektir.
                </div>
                <div className="hizmet-subtitle">Danışmanlık Hizmetlerimiz:</div>
                <div className="hizmet-item">Teknoloji Geliştirme Bölgesi Değerlendirme Hizmeti</div>
                <div className="hizmet-item">TGB Başvuru Danışmanlığı</div>
                <div className="hizmet-item">TGB Uygulama ve Yönetim Hizmeti</div>
              </div>
            </div>
            
            <div className="hizmet-card">
              <div className="hizmet-header">
                <h3>Avrupa Birliği Projeleri</h3>
                <p>AB Programları Başvuru ve Yönetim</p>
              </div>
              <div className="hizmet-content">
                <div className="hizmet-description">
                  Avrupa Birliği Projeleri Programları, işletmeler, kamu kurumları, STK'lar ve akademik kurumlar için finansman ve destek sağlar. Bu programlar, inovasyonu teşvik etmek, sürdürülebilir kalkınmayı desteklemek ve işbirliğini güçlendirmek amacıyla oluşturulmuştur.
                </div>
                <div className="hizmet-subtitle">Başlıca AB Programları:</div>
                <div className="hizmet-item">Horizon Europe - Bilimsel araştırma ve yenilik</div>
                <div className="hizmet-item">Erasmus+ - Eğitim, gençlik ve spor</div>
                <div className="hizmet-item">Avrupa Yapısal ve Yatırım Fonları</div>
              </div>
            </div>
            
            <div className="hizmet-card">
              <div className="hizmet-header">
                <h3>Yatırım Teşvik Belgesi</h3>
                <p>Başvuru ve Sürdürülebilirliği</p>
              </div>
              <div className="hizmet-content">
                <div className="hizmet-description">
                  İthalat bağımlılığını azaltmak ve yerli üretimi teşvik etmek için, yüksek ve orta-yüksek teknoloji içeren yatırımlar desteklenmekte, aynı zamanda en az gelişmiş bölgelere yönelik yatırım teşvikleri artırılmaktadır.
                </div>
                <div className="hizmet-subtitle">Destek Unsurları:</div>
                <div className="hizmet-item">KDV İstisnası</div>
                <div className="hizmet-item">Gümrük Vergisi Muafiyeti</div>
                <div className="hizmet-item">Vergi İndirimi</div>
                <div className="hizmet-item">Sigorta Primi İşveren Hissesi Desteği</div>
                <div className="hizmet-item">Faiz veya Kâr Payı Desteği</div>
                <div className="hizmet-item">Yatırım Yeri Tahsisi</div>
              </div>
            </div>
            
            <div className="hizmet-card">
              <div className="hizmet-header">
                <h3>İhracat & Kalkınma Ajansı Destekleri</h3>
                <p>Başvuru Hazırlama ve Yönetim</p>
              </div>
              <div className="hizmet-content">
                <div className="hizmet-description">
                  İhracat yapmayı planlayan işletmeler için çeşitli devlet teşvikleri ve destekleri mevcuttur. Bölgesel kalkınma projeleri için Kalkınma Ajansları tarafından sunulan desteklerden yararlanma konusunda danışmanlık sağlıyoruz.
                </div>
                <div className="hizmet-subtitle">Hizmet Sürecimiz:</div>
                <div className="hizmet-item">İhtiyaç Analizi</div>
                <div className="hizmet-item">Başvuru Dosyasının Hazırlanması</div>
                <div className="hizmet-item">Müracaatın Yapılması</div>
                <div className="hizmet-item">Süreç Takibi</div>
                <div className="hizmet-item">Desteklerin Kullanımı</div>
                <div className="hizmet-item">Proje Takibi ve Raporlama</div>
              </div>
            </div>
          </div>
          
          <div className="contact-section">
            <h2>Hizmetlerimiz Hakkında Bilgi Alın</h2>
            <p>
              Uzman ekibimizle işletmenizin ihtiyaçlarına en uygun destek programlarını belirleyin. 
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

export default Hizmetlerimiz;