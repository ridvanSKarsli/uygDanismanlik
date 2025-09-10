import React, { useEffect, useState } from "react";
import { Carousel } from 'antd';
import Image from "next/image";
import { ArrowLeftOutlined, ArrowRightOutlined } from '@ant-design/icons';

export const OurReferences: React.FC = () => {
  const [windowSize, setWindowSize] = useState(0);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setWindowSize(window.screen.width);
    }
  })

  function SamplePrevArrow(props: any) {
    const { className, style, onClick } = props
    return (
      <div
        className={className}
        style={{ ...style, display: "block", background: "green" }}
        onClick={onClick}
      ><ArrowLeftOutlined /></div>
    )
  }

  function SampleNextArrow(props: any) {
    const { className, style, onClick } = props
    return (
      <div
        className={className}
        style={{ ...style, display: "block", background: "red" }}
        onClick={onClick}
      ><ArrowRightOutlined /></div>
    )
  }

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: windowSize < 500 ? 2 : 4,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  }

  return (
    <div className='our-references-full-part'>
      <h3>Referanslarımız </h3>
      <Carousel {...settings} autoplay arrows={true} draggable={true} >
        <div>
          <a href="https://www.facebook.com/ehilder35/" target="_blank" rel="noopener noreferrer"><Image src='/images/references/references1.webp' alt="nextjs" width="1920" height="1080" /></a>
        </div>
        <div>
          <a href="https://www.instagram.com/karis_otomotiv/" target="_blank" rel="noopener noreferrer"><Image src='/images/references/references2.webp' alt="nextjs" width="1920" height="1080" /></a>
        </div>
        <div>
          <a href="https://cimax.com.tr/" target="_blank" rel="noopener noreferrer"><Image src='/images/references/references3.webp' alt="nextjs" width="1920" height="1080" /></a>
        </div>
        <div>
          <a href="https://stemegitimciler.org/" target="_blank" rel="noopener noreferrer"><Image src='/images/references/references4.webp' alt="nextjs" width="1920" height="1080" /></a>
        </div>
        <div>
          <a href="https://www.mcbu.edu.tr/" target="_blank" rel="noopener noreferrer"><Image src='/images/references/references5.webp' alt="nextjs" width="1920" height="1080" /></a>
        </div>
        <div>
          <a href="https://www.agroas.com.tr/" target="_blank" rel="noopener noreferrer"><Image src='/images/references/references6.webp' alt="nextjs" width="1920" height="1080" /></a>
        </div>
        <div>
          <a href="https://www.facebook.com/p/G%C3%B6rg%C3%BCl%C3%BC-Oto-Bak%C4%B1m-100063532985448/" target="_blank" rel="noopener noreferrer"><Image src='/images/references/references7.webp' alt="nextjs" width="1920" height="1080" /></a>
        </div>
        <div>
          <a href="https://kocaturk.k12.tr/" target="_blank" rel="noopener noreferrer"><Image src='/images/references/references8.webp' alt="nextjs" width="1920" height="1080" /></a>
        </div>
        <div>
          <a href="http://www.sanayi.gov.tr/" target="_blank" rel="noopener noreferrer"><Image src='/images/references/references9.webp' alt="nextjs" width="1920" height="1080" /></a>
        </div>
        <div>
          <a href="https://manisateknokent.com.tr/" target="_blank" rel="noopener noreferrer"><Image src='/images/references/references10.webp' alt="nextjs" width="1920" height="1080" /></a>
        </div>
        <div>
          <a href="https://zafer.gov.tr/" target="_blank" rel="noopener noreferrer"><Image src='/images/references/references11.webp' alt="nextjs" width="1920" height="1080" /></a>
        </div>
        <div>
          <a href="https://infology.com.tr/" target="_blank" rel="noopener noreferrer"><Image src='/images/references/references12.webp' alt="nextjs" width="1920" height="1080" /></a>
        </div>
        <div>
          <a href="https://metatips.com.tr/" target="_blank" rel="noopener noreferrer"><Image src='/images/references/references13.webp' alt="nextjs" width="1920" height="1080" /></a>
        </div>
        <div>
          <a href="https://birtatseker.com/" target="_blank" rel="noopener noreferrer"><Image src='/images/references/references14.webp' alt="nextjs" width="1920" height="1080" /></a>
        </div>
        <div>
          <a href="https://www.caploonba.com/" target="_blank" rel="noopener noreferrer"><Image src='/images/references/references15.webp' alt="nextjs" width="1920" height="1080" /></a>
        </div>
        <div>
          <a href="https://e-tech.com.tr/" target="_blank" rel="noopener noreferrer"><Image src='/images/references/references16.webp' alt="nextjs" width="1920" height="1080" /></a>
        </div>
        <div>
          <a href="https://tfamuhendislik.com/" target="_blank" rel="noopener noreferrer"><Image src='/images/references/references17.webp' alt="nextjs" width="1920" height="1080" /></a>
        </div>
        <div>
          <a href="https://www.sumaticturkiye.com/" target="_blank" rel="noopener noreferrer"><Image src='/images/references/references18.webp' alt="nextjs" width="1920" height="1080" /></a>
        </div>
        <div>
          <a href="https://www.vevona.com/" target="_blank" rel="noopener noreferrer"><Image src='/images/references/references19.webp' alt="nextjs" width="1920" height="1080" /></a>
        </div>
        <div>
          <a href="https://sypr.co/" target="_blank" rel="noopener noreferrer"><Image src='/images/references/references20.webp' alt="nextjs" width="1920" height="1080" /></a>
        </div>
        <div>
          <a href="https://www.arestech.com.tr/" target="_blank" rel="noopener noreferrer"><Image src='/images/references/references21.webp' alt="nextjs" width="1920" height="1080" /></a>
        </div>
      </Carousel>
    </div>
  );
};
