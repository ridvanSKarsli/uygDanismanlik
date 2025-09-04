import React from 'react';
import { TrophyOutlined, RocketOutlined, GlobalOutlined, ExperimentOutlined, ShopOutlined, TeamOutlined } from '@ant-design/icons';

const Basarilarimiz: React.FC = () => {
  const basarilar = [
    {
      icon: <TrophyOutlined />,
      title: "TEKNOPARK DESTEKLERİ",
      description: "6 adet Ar-Ge projesi ile teknoparka şirket kurulumu sağlandı.",
    },
    {
      icon: <RocketOutlined />,
      title: "ULUSAL VE ULUSLARARASI PROJELER",
      description: "2 adet KOSGEB Ar-Ge Ürge İnovasyon projesi başarıyla tamamlandı.",
    },
    {
      icon: <GlobalOutlined />,
      title: "YURT DIŞI PAZAR DESTEKLERİ",
      description: "2 adet yurt dışı pazar destekleri başarıyla alındı.",
    },
    {
      icon: <ExperimentOutlined />,
      title: "TÜBİTAK TEYDEB",
      description: "1 adet TÜBİTAK TEYDEB 1507 projesi başarıyla gerçekleştirildi.",
    },
    {
      icon: <ShopOutlined />,
      title: "KOSGEB İŞLETME GELİŞTİRME",
      description: "6 adet KOSGEB İşletme Geliştirme desteği sağlandı.",
    },
    {
      icon: <TeamOutlined />,
      title: "MÜŞTERİ REFERANSI",
      description: "30+ müşteri referansı ile güvenilir hizmet anlayışımız.",
    }
  ];

  return (
    <div className="basarilarimiz-section">
      <div className="section-title">
        <h2>Başarılarımız</h2>
      </div>
      
      <div className="basarilar-grid">
        {basarilar.map((basari, index) => (
          <div key={index} className="basari-card">
            <div className="basari-icon">
              {basari.icon}
            </div>
            <div className="basari-content">
              <h3>{basari.title}</h3>
              <p>{basari.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export { Basarilarimiz }; 