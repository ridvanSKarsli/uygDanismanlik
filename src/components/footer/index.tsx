import React, { CSSProperties } from "react";
import { Space } from "antd";
import Link from 'next/link';
import {
  InstagramOutlined,
  TwitterOutlined,
  FacebookOutlined,
} from "@ant-design/icons";

export const Footer: React.FC = () => {
  const iconStyle: CSSProperties = {
    fontSize: 22,
    color: "#fff",
  };
  return (
    <div
      style={{
        backgroundColor: "#282c34",
        color: "#fff",
        textAlign: "center",
        paddingTop: 32,
        paddingBottom: 32,
      }}
      className='footer'
    >
      <Space direction="vertical" size="large">
        <Space align="center" size="middle">
          <div className="footer-link-part">

            <ul className="fa-ul">
              <li key="mail">
                <Link href='/'>
                  Anasayfa
                </Link>
              </li>
              <li key="offices:1">
                <Link href='/hakkimizda'>
                  Hakkımızda
                </Link>
              </li>
            </ul>
            <ul className="fa-ul">
              <li key="hizmet:teydeb">
                <Link href='/tubitak-teydeb'>TÜBİTAK-TEYDEB</Link>
              </li>
              <li key="hizmet:kosgeb">
                <Link href='/kosgeb-destekleri'>KOSGEB Destekleri</Link>
              </li>
              <li key="hizmet:tgb">
                <Link href='/teknoloji-gelistirme-bolgesi'>Teknoloji Geliştirme Bölgesi</Link>
              </li>
              <li key="hizmet:ab">
                <Link href='/avrupa-birligi-projeleri'>Avrupa Birliği Projeleri</Link>
              </li>
              <li key="hizmet:ytb">
                <Link href='/yatirim-tesvik-belgesi'>Yatırım Teşvik Belgesi</Link>
              </li>
              <li key="hizmet:ihracat">
                <Link href='/ihracat-kalkinma-ajansi'>İhracat & Kalkınma Ajansı</Link>
              </li>
            </ul>
            <ul className="fa-ul">
              <li key="egitim:1">
                <Link href='/proje-dongusu-egitimi'> Proje Döngüsü Eğitimi</Link>
              </li>
              <li key="egitim:2">
                <Link href='/digital-ogrenim-egitimi'>Digital Öğretim Uygulamarı </Link>
              </li>
              <li key="egitim:3">
                <Link href='/eklektirik-elektronik-eigitimi'>Elektrik Elektronik Eğitimi</Link>
              </li>
              <li key="egitim:4">
                <Link href='/plc-teknolojisi-egitimi'>PLC Teknolojisi Eğitimi</Link>
              </li>
              <li key="egitim:5">
                <Link href='/endustri4-0'>
                  Endüstri 4.0 ve Haberleşme Protokolleri Eğitimleri
                </Link>
              </li>
            </ul>
            <ul className="fa-ul">
              <li key="contact">
                <Link href='/iletisim'>
                  İletişim
                </Link>
              </li>
              <li className="address1"><i className="fa fa-map-o" aria-hidden="true"></i>
                <span>Muradiye Mahallesi 2 Sokak No:41 Daire : 504 Yunusemre/MANİSA</span></li><li><i className="fa fa-phone"></i><a href="tel:+905528048454">+90 552 804 84 54</a></li><li><i className="fa fa-envelope-o" aria-hidden="true"></i>
                <a href="mailto:info@uygdanismanlik.com">info@uygdanismanlik.com</a></li><li><i className="fa fa-clock-o"></i>08:30 - 19:00</li>
            </ul>
          </div>

        </Space>
        <Space align="center" size="middle">
        <a
          href="https://x.com/uygdanismanlik"
          target="_blank"
          style={iconStyle}
        >
          <TwitterOutlined />
        </a>

          <a
            href="https://www.instagram.com/uygdanismanlik/"
            target="_blank"
            style={iconStyle}
          >
            <InstagramOutlined />
          </a>
          <a
            href="https://twitter.com/uygdanismanlik"
            target="_blank"
            style={iconStyle}
          >
            <FacebookOutlined />
          </a>
        </Space>
      </Space>
    </div>
  );
};
