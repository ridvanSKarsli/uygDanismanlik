import React, { CSSProperties } from "react";
import Image from "next/image";
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
        <Image
          src="/images/logo3.png"
          alt="Logo"
          width="190"
          height="60"
        />
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
              <li key="offices:2">
                <Link href='/ekibimiz'>
                  Ekibimiz
                </Link>
              </li>
            </ul>
            <ul className="fa-ul">
              <li key="kurumsal:1">
                <Link href='/kurumsal-yonetim-danismanligi'> Kurumsal Yönetim Danışmanlığı </Link>
              </li>
              <li key="kurumsal:2">
                <Link href='/kurumsal-proje-danismanligi'>Kurumsal Proje Danışmanlığı </Link>
              </li>
              <li key="kurumsal:3">
                <Link href='/tesvikler'>Teşvikler</Link>
              </li>
              <li key="kurumsal:4">
                <Link href='/dijital-cozumler'>Dijital Çözümler</Link>
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
                <span>Subaşı Mah. Bahadır Sok. No:27 D: 2 Turgutlu/MANİSA</span></li><li><i className="fa fa-phone"></i><a href="tel:+905528048454">+90 552 804 84 54</a></li><li><i className="fa fa-envelope-o" aria-hidden="true"></i>
                <a href="mailto:info@uygdanismanlik.com">info@uygdanismanlik.com</a></li><li><i className="fa fa-clock-o"></i>08:30 - 19:00</li>
            </ul>
          </div>

        </Space>
        <Space align="center" size="middle">
          <a
            href="https://twitter.com/uygdanismanlik"
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
