import React from 'react';
import Image from 'next/image'
import { Col,Input, Row,Form, Button } from 'antd';
import Script from 'next/experimental-script';
import Head from 'next/head';

const CorporateProject: React.FC = () => {
  
    const [form] = Form.useForm();

    const contactFormSubmit = (e : any) => {
        window.location.replace(`mailto:info@uygdanismanlik.com?subject=UYG Danışmanlık İletişim &body=${e.description} 
        \n Ad-Soyad : ${e.name}   Telefon: ${e.phone} Email: ${e.email}`)
    }

    return (
        <>
            <Head>
            <title>İletişim - UYG Yönetim ve Danışmanlık</title>
            <meta charSet="utf-8"/>
            <meta property="keywords" content="iletişim,UYG Danışmanlık tel,eğitim ve danışmanlık" key="title" />
            <meta property="og:title" content="UYG Danışmanlık iletişim" key="title" />
            <meta name="Description" content="UYG Yönetim ve Danışmanlık iletişim bilgileri. Adres telefon ve whatsapp danışma hattı" />
            <meta name="og:description" content="UYG Yönetim ve Danışmanlık iletişim bilgileri. Adres telefon ve whatsapp danışma hattı" />
            <meta property="og:url" content="/iletisim" />
            <meta property="og:image" content="location.jpeg" />
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
            <div className='hakkmizda-banner contact-page'>
                    <div style={{ width: '100%', height: '380px', overflow: 'hidden' }}>
                <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3135.1847299846113!2d27.405048215628983!3d38.631392179612926!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14b9b9068d37fcb7%3A0xcef8a99b920c7bfb!2sMuradiye%2C%20Yunusemre%2FManisa!5e0!3m2!1str!2str!4v1722231412345!5m2!1str!2str"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
                    </div>
            </div>



        <div className='hakkimizda-aciklama contact-page'>
                <h1>İletişim</h1>
                <Row>
                    <Col span={12} xs={24} xxl={12} xl={12}>
                            <h2> UYG Yönetim ve Danışmanlık </h2>
                            <ul>
                                <li>
                                    <span>Adres : </span>
                                    <span> Muradiye Mahallesi 2 Sokak No:41 Daire : 504 Yunusemre/MANİSA</span>
                                </li>
                                <li>
                                    <span>Telefon : </span>
                                    <span>
                                        <a href="tel:+905528048454">+90 552 804 84 54</a>
                                    </span>
                                </li>
                                <li>
                                    <span>Mail : </span>
                                    <span>
                                        <a href='mail:info@uygdanismanlik.com'>info@uygdanismanlik.com</a>
                                    </span>
                                </li>
                            </ul>
                    </Col>
                    <Col span={12}  xs={24} xxl={12} xl={12}>
                        <Form
                        form={form}
                        onFinish={contactFormSubmit}
                        layout="vertical">
                             <Row>
                                 <Col span={12}  xs={24} xxl={12} xl={12}>
                                    <Form.Item name='name' label="Adınız - Soyadınız" required>
                                        <Input placeholder="Adınız Soyadınız" />
                                    </Form.Item>
                                </Col>
                                <Col span={12}  xs={24} xxl={12} xl={12}>
                                    <Form.Item name='email' label="E Posta Adresiniz" required>
                                        <Input type='email' placeholder="E Posta Adresiniz" />
                                    </Form.Item>
                                </Col>
                                <Col span={24}>
                                    <Form.Item name='phone' label="Telefon Numaranız" required>
                                        <Input type='number' placeholder="Telefon Numaranız" />
                                    </Form.Item>
                                </Col>
                                <Col span={24}>
                                    <Form.Item name='description' label="Mesajınız" required>
                                        <Input.TextArea placeholder="Mesajınız" />
                                    </Form.Item>
                                </Col>
                            </Row>
                            <Button type='primary' htmlType='submit'>
                                Gönder
                            </Button>
                        </Form>
                    </Col>
                </Row>
                
        </div>
    </>
  );
};

export default CorporateProject;
