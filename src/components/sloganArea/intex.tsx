import React from "react";
import Image from "next/image";
import { Button } from "antd";

const SloganArea: React.FC = () => {

    return (
    <div className='slogan-full-part'>
        <div className='description-part'>
        <span>
            <h2>
                Eğitim; iyi niyetleri, iyi sonuçlara çevirir.
            </h2>
            <p>
                Kendiniz için en iyi eğitimleri ve öğretim ortamlarını burada bulacaksınız. Lütfen eğitimlerimizi inceleyin. 
            </p>
        </span>
        {/* <Button>İncele</Button> */}
        </div>
      <Image className='image' src="/images/image1.webp" alt="nextjs" width="1920" height="200" />
    </div>
  );
};

export { SloganArea };
