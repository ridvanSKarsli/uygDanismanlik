import React from 'react';
import { Breadcrumb as AntdBreadcrumb } from 'antd';
import { useRouter } from 'next/router';
import Link from 'next/link';

const Breadcrumb: React.FC = () => {
  const router = useRouter();
  const { pathname } = router;

  // Ana sayfa için breadcrumb gösterme
  if (pathname === '/') {
    return null;
  }

  const pathSnippets = pathname.split('/').filter((i) => i);

  // Türkçe sayfa isimleri mapping
  const pageNameMap: { [key: string]: string } = {
    'hakkimizda': 'Hakkımızda',
    'tubitak-teydeb': 'TÜBİTAK-TEYDEB',
    'kosgeb-destekleri': 'KOSGEB Destekleri',
    'teknoloji-gelistirme-bolgesi': 'Teknoloji Geliştirme Bölgesi',
    'avrupa-birligi-projeleri': 'Avrupa Birliği Projeleri',
    'yatirim-tesvik-belgesi': 'Yatırım Teşvik Belgesi',
    'ihracat-kalkinma-ajansi': 'İhracat & Kalkınma Ajansı',
    'kutuphane': 'Kütüphane',
    'teknopark': 'Teknopark',
    'projeTakipSistemi': 'Proje Takip Sistemi',
    'bultenler': 'Bültenler',
    'iletisim': 'İletişim',
    'proje-dongusu-egitimi': 'Proje Döngüsü Eğitimi',
    'digital-ogrenim-egitimi': 'Digital Öğrenim Eğitimi',
    'eklektirik-elektronik-eigitimi': 'Elektrik Elektronik Eğitimi',
    'plc-teknolojisi-egitimi': 'PLC Teknolojisi Eğitimi',
    'endustri4-0': 'Endüstri 4.0',
    'sss': 'Sıkça Sorulan Sorular'
  };

  const breadcrumbItems = pathSnippets.map((_, index) => {
    const url = `/${pathSnippets.slice(0, index + 1).join('/')}`;
    const pathSegment = pathSnippets[index];
    const name = pageNameMap[pathSegment] || pathSegment.charAt(0).toUpperCase() + pathSegment.slice(1).replace(/([A-Z])/g, ' $1').trim();
    
    return (
      <AntdBreadcrumb.Item key={url}>
        <Link href={url}>{name}</Link>
      </AntdBreadcrumb.Item>
    );
  });

  const homeBreadcrumb = (
    <AntdBreadcrumb.Item key="home">
      <Link href="/">Ana Sayfa</Link>
    </AntdBreadcrumb.Item>
  );

  return (
    <div className="custom-breadcrumb">
      <AntdBreadcrumb>
        {homeBreadcrumb}
        {breadcrumbItems}
      </AntdBreadcrumb>
    </div>
  );
};

export { Breadcrumb };
