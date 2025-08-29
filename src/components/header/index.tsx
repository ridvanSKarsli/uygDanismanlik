import React, { useEffect, useState } from "react";
import { Menu,Row,Col,Alert, Button, Drawer } from 'antd';
import { MailOutlined, AppstoreOutlined,WhatsAppOutlined,UnorderedListOutlined,
   AimOutlined ,PieChartOutlined, RadarChartOutlined} from '@ant-design/icons';
import { Logo } from "@components";
import Marquee from 'react-fast-marquee';
import Link from "next/link";
import { useRouter } from 'next/router'

const { SubMenu } = Menu;

const newsContent : any = {
  "en": {
    title: "Your News"
  },
  "tr": {
    title: "Deneme Deneme"
  },
};

export const Header: React.FC = ()=> {
  const router = useRouter()
  // const { locale, locales, defaultLocale } : any = router;

  const [current , setCurrent] = useState('');
  const [windowSize, setWindowSize] = useState(0);
  const [visible, setVisible] = useState(false);
  const showDrawer = () => {
    setVisible(true);
  };
  const onClose = () => {
    setVisible(false);
  };

  const handleClick = (e : any)=> {
    setVisible(false)
    setCurrent(e.key);
  };


  useEffect(() => {
    if (typeof window !== 'undefined') {
      setWindowSize(window.screen.width);
    }
    
    // Set current menu item based on current path
    const pathname = router.pathname;
    if (pathname === '/') {
      setCurrent('mail');
    } else if (pathname === '/hakkimizda') {
      setCurrent('hakkimizda');
    } else if (pathname === '/kutuphane') {
      setCurrent('kutuphane');
    } else if (pathname === '/tubitak-teydeb') {
      setCurrent('tubitak-teydeb:1');
    } else if (pathname === '/kosgeb-destekleri') {
      setCurrent('kosgeb-destekleri:2');
    } else if (pathname === '/teknoloji-gelistirme-bolgesi') {
      setCurrent('teknoloji-gelistirme-bolgesi:3');
    } else if (pathname === '/avrupa-birligi-projeleri') {
      setCurrent('avrupa-birligi-projeleri:4');
    } else if (pathname === '/yatirim-tesvik-belgesi') {
      setCurrent('yatirim-tesvik-belgesi:5');
    } else if (pathname === '/ihracat-kalkinma-ajansi') {
      setCurrent('ihracat-kalkinma-ajansi:6');
    } else if (pathname === '/teknopark') {
      setCurrent('teknopark:1');
    } else if (pathname === '/projeTakipSistemi') {
      setCurrent('projeTakip:2');
    } else if (pathname === '/bultenler') {
      setCurrent('bultenler:3');
    } else if (pathname.startsWith('/proje-dongusu-egitimi')) {
      setCurrent('egitim:1');
    } else if (pathname.startsWith('/digital-ogrenim-egitimi')) {
      setCurrent('egitim:2');
    } else if (pathname.startsWith('/eklektirik-elektronik-eigitimi')) {
      setCurrent('egitim:4');
    } else if (pathname.startsWith('/plc-teknolojisi-egitimi')) {
      setCurrent('egitim:5');
    } else if (pathname.startsWith('/endustri4-0')) {
      setCurrent('egitim:6');
    } else if (pathname === '/iletisim') {
      setCurrent('contact');
    }
  }, [router.pathname])

  if(windowSize < 500){
    return(
      <>
        <div className='contact-area'>
          <Col span={4} className='email-contact'>
            <MailOutlined />
              <div>
                <span>Email</span>
                <span>  
                  <a href='mailto:onder.sahin.com' >
                      info@uygdanismanlik.com
                    </a>
                  </span>
              </div>
          </Col>
          <Col span={4} className='phone-contact'>
            <WhatsAppOutlined />
                <div>
                  <span>Telefon</span>
                  <span>
                    <a href='tel:+905528048454' >
                      +90 552 804 84 54
                    </a>
                  </span>
                </div>
            </Col>
        </div>
        <div className="mobile-logo">
          <Button type="default" onClick={showDrawer}>
            <UnorderedListOutlined />
          </Button>
          <Logo/>
        </div>
        
        <Drawer title="Menü" className="mobile-menu"  placement="left" onClose={onClose} visible={visible}>
        <Menu  onClick={handleClick} selectedKeys={[current]} mode="inline">
              <Menu.Item key="mail" icon={<MailOutlined />}>
                  <Link href='/'>
                     Anasayfa
                    </Link>
                
              </Menu.Item>
              <Menu.Item key="hakkimizda" icon={<AppstoreOutlined />}>
                  <Link href='/hakkimizda'>
                      Hakkımızda
                  </Link>
              </Menu.Item>
              <Menu.Item key="kutuphane" icon={<AppstoreOutlined />}>
                  <Link href='/kutuphane'>
                      Kütüphane
                  </Link>
              </Menu.Item>
              <SubMenu key="hizmetler" icon={<PieChartOutlined />} title="Hizmetlerimiz">
                  <Menu.Item key="tubitak-teydeb:1">
                    <Link href='/tubitak-teydeb'>TÜBİTAK-TEYDEB Destek Programları</Link>
                  </Menu.Item>
                  <Menu.Item key="kosgeb-destekleri:2"> 
                    <Link href='/kosgeb-destekleri'>KOSGEB Destek Programları</Link>
                  </Menu.Item>
                  <Menu.Item key="teknoloji-gelistirme-bolgesi:3">
                    <Link href='/teknoloji-gelistirme-bolgesi'>Teknoloji Geliştirme Bölgesi</Link>
                  </Menu.Item>
                  <Menu.Item key="avrupa-birligi-projeleri:4">
                    <Link href='/avrupa-birligi-projeleri'>Avrupa Birliği Projeleri</Link>
                  </Menu.Item>
                  <Menu.Item key="yatirim-tesvik-belgesi:5">
                    <Link href='/yatirim-tesvik-belgesi'>Yatırım Teşvik Belgesi</Link>
                  </Menu.Item>
                  <Menu.Item key="ihracat-kalkinma-ajansi:6">
                    <Link href='/ihracat-kalkinma-ajansi'>İhracat & Kalkınma Ajansı</Link>
                  </Menu.Item>
              </SubMenu>

              <SubMenu key="organizsyon" icon={<AimOutlined />} title="Organizasyon">
                  <Menu.Item key="organizsyon:1">
                    <Link href='/yurtdisi-egitim-turlari'>Yurt Dışı Eğitim Turları </Link> 
                  </Menu.Item>
                  <Menu.Item key="organizsyon:2">
                  <Link href='/yurtici-egitim-turlari'>Yurt İçi Eğitim Turları </Link>  </Menu.Item>
              </SubMenu>
              <Menu.Item key="contact">
                <Link href='/iletisim'>
                  İletişim
                </Link>
              </Menu.Item>
            </Menu>
        </Drawer>
      </>
    )
  }
  else {
    return (
      <>
      {/* <h1>Index page</h1>
      <p>Current locale: {locale}</p>
      <p>Default locale: {defaultLocale}</p>
      <p>{newsContent[locale].title}</p> */}
      {/* <Link
            href={`/tr`}
            locale="tr"
          >
           Tr
          </Link>

          <Link
            href={`/en`}
            locale="en"
          >
            en-US
          </Link>
      <p>Configured locales: {JSON.stringify(locales)}</p> */}
      <div className='contact-area'>
          <Col span={4} className='email-contact'>
            <MailOutlined />
              <div>
                <span>Email</span>
                <span>  
                  <a href='mailto:onder.sahin.com' >
                      info@uygdanismanlik.com
                    </a>
                  </span>
              </div>
          </Col>
            <Col span={4} className='phone-contact'>
            <WhatsAppOutlined />
                <div>
                  <span>Telefon</span>
                  <span>
                    <a href='tel:+905528048454' >
                      +90 552 804 84 54
                    </a>
                  </span>
                </div>
            </Col>
        </div>
        <Row justify="space-around"  className='row-contact'>
            <Col span={5} className='logo-area'>
                <Logo/>
            </Col>
            <Col span={14} className='marque'>
              <Alert message={
                <Marquee pauseOnHover gradient={false}>
                Katılacağınız bu gezilerde bilim, kültür, sanat, felsefe, folklor, sportif etkinlikler içeren atölyelere katılarak ülkemizin kültürel zenginliğini yakından tanıma fırsatına sahip olacaksınız.  
              </Marquee>
              } type="info"  />
            </Col>
            <Col span={4} className='logo-area'>
            {/* <div>
              <button onClick={changeLanguage}>{t(`common:language.en`)}</button>
              <button onClick={changeLanguage}>{t(`common:language.tr`)}</button>
            </div> */}
            🇹🇷 Türkçe
            </Col>
            {/* <Col span={4} className='email-contact'>
              <SendOutlined />
              <div>
                <span>Email</span>
                <span>  
                  <a href='mailto:onder.sahin.com' >
                    info@uygdanismanlik.com
                    </a>
                  </span>
              </div>
            </Col>
            <Col span={4} className='phone-contact'>
              <PhoneOutlined />
                <div>
                  <span>Telefon</span>
                  <span>
                    <a href='tel:05548384350' >
                      05548384350
                    </a>
                    
                    </span>
                </div>
            </Col> */}
          </Row>
          <div style={{ backgroundColor: "#20232a", textAlign: "center" }}>
    
            <Menu  onClick={handleClick} selectedKeys={[current]} mode="horizontal">
              <Menu.Item key="mail" icon={<MailOutlined />}>
                  <Link href='/'>
                      Anasayfa
                    </Link>
                
              </Menu.Item>
              <Menu.Item key="hakkimizda" icon={<AppstoreOutlined />}>
                  <Link href='/hakkimizda'>
                      Hakkımızda
                  </Link>
              </Menu.Item>
              <SubMenu key="hizmetler" icon={<PieChartOutlined />} title="Hizmetlerimiz">
                  <Menu.Item key="tubitak-teydeb:1">
                    <Link href='/tubitak-teydeb'>TÜBİTAK-TEYDEB Destek Programları</Link>
                  </Menu.Item>
                  <Menu.Item key="kosgeb-destekleri:2"> 
                    <Link href='/kosgeb-destekleri'>KOSGEB Destek Programları</Link>
                  </Menu.Item>
                  <Menu.Item key="teknoloji-gelistirme-bolgesi:3">
                    <Link href='/teknoloji-gelistirme-bolgesi'>Teknoloji Geliştirme Bölgesi</Link>
                  </Menu.Item>
                  <Menu.Item key="avrupa-birligi-projeleri:4">
                    <Link href='/avrupa-birligi-projeleri'>Avrupa Birliği Projeleri</Link>
                  </Menu.Item>
                  <Menu.Item key="yatirim-tesvik-belgesi:5">
                    <Link href='/yatirim-tesvik-belgesi'>Yatırım Teşvik Belgesi</Link>
                  </Menu.Item>
                  <Menu.Item key="ihracat-kalkinma-ajansi:6">
                    <Link href='/ihracat-kalkinma-ajansi'>İhracat & Kalkınma Ajansı</Link>
                  </Menu.Item>
              </SubMenu>
              <Menu.Item key="kutuphane" icon={<AppstoreOutlined />}>
                  <Link href='/kutuphane'>
                      Kütüphane
                  </Link>
              </Menu.Item>
              <Menu.Item key="contact">
                <Link href='/iletisim'>
                  İletişim
                </Link>
              </Menu.Item>
            </Menu>
        </div>
      </>
    );
  }

};