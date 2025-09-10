import React from "react";
import { Carousel } from 'antd';
import Image from "next/image";
import { ArrowLeftOutlined,ArrowRightOutlined } from '@ant-design/icons';

export const Main: React.FC = () => {

  function SamplePrevArrow(props :any) {
    const { className, style, onClick } = props
    return (
        <div
        className={className}
        style={{ ...style, display: "block", background: "green" }}
        onClick={onClick}
        ><ArrowLeftOutlined /></div>
        )
    }

    function SampleNextArrow(props : any) {
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
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
    }

  return (
    <div className='home-slider'>
       <Carousel {...settings} autoplay  arrows={true} draggable={true} >
        <div>
          <Image src='/images/image2.webp' alt="nextjs" width="1920" height="1080" />
        </div>
        <div>
        <Image src="/images/image3.webp" alt="nextjs" width="1920" height="1080" />
        </div>
        <div>
        <Image src="/images/slide3.webp" alt="nextjs" width="1920" height="1080" />
        </div>
  
      </Carousel>
    </div>
  );
};
