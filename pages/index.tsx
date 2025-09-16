import React from "react";
import {  Main, OurReferences, Basarilarimiz, Hizmetler, SloganArea, ThreeBoxes} from "@components";
import { Button } from 'antd';
import { FilePptOutlined } from '@ant-design/icons';
import Head from 'next/head'

const Home: React.FC = () => {
  return (
    <>
      <Head>
        <title>UYG Yönetim ve Danışmanlık</title>
        <meta charSet="utf-8"/>
        <meta property="og:title" content="UYG Danışmanlık Danışmanlık" key="title" />
        <link rel="icon" href="/icons/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#000000" />
        <link rel="apple-touch-icon" sizes="180x180" href="/icons/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/icons/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/icons/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
      </Head>
    <div
      style={{ display: "flex",overflow:'hidden', flexDirection: "column", minHeight: "100vh" }}
    >
      <Main />
      <div style={{ display:'flex', justifyContent:'center', margin:'24px 0', width:'90%', maxWidth: '800px', alignSelf:'center' }}>
        <a href="/UYG.pdf" target="_blank" rel="noopener noreferrer" style={{ width: '100%' }}>
          <Button
            block
            size="large"
            icon={<FilePptOutlined />}
            style={{
              backgroundColor: 'var(--color-primary)',
              borderColor: 'var(--color-primary)',
              color: 'white',
              borderRadius: 'var(--radius-lg)',
              padding: '12px 24px',
              height: 56,
              boxShadow: 'var(--shadow-primary)'
            }}
          >
            Tanıtım Sunumu
          </Button>
        </a>
      </div>
      <ThreeBoxes />
      <Hizmetler />
      <Basarilarimiz />
      <OurReferences />            
      <SloganArea />      
    </div>
    </>
  );
};

export default Home;

