import React, { useEffect, useState } from "react"
import Link from "next/link"
import { Card as AntdCard, Menu, Carousel } from "antd"
import { ArrowLeftOutlined, ArrowRightOutlined } from '@ant-design/icons';

const hizmetler = [
  {
    id: 1,
    title: "TÜBİTAK-TEYDEB Destek Programları Başvuru Ve Yürütme",
    slug: "tubitak-teydeb-destek-programlari",
    content: "TÜBİTAK-TEYDEB destek programları hakkında detaylı bilgi, başvuru süreçleri ve projelerinizin yürütülmesi için profesyonel destek hizmetleri.",
  },
  {
    id: 2,
    title: "KOSGEB Destek Programları Başvuru ve Yürütme",
    slug: "kosgeb-destek-programlari",
    content: "KOSGEB destek programlarına başvuru süreçleri, desteklerden faydalanma koşulları ve projelerinizin başarılı bir şekilde yürütülmesi için danışmanlık hizmetleri.",
  },
  {
    id: 3,
    title: "Teknoloji Geliştirme Bölgesi (Teknopark/Teknokent) Başvuru ve Sürdürülebilirliği",
    slug: "teknoloji-gelistirme-bolgesi",
    content: "Teknopark ve Teknokentlere başvuru süreçleri, kabul kriterleri ve projelerinizin sürdürülebilirliği için kapsamlı danışmanlık hizmetleri.",
  },
  {
    id: 4,
    title: "Avrupa Birliği Projeleri Programları",
    slug: "avrupa-birligi-projeleri",
    content: "Avrupa Birliği projeleri programları hakkında detaylı bilgi, başvuru süreçleri ve uluslararası fonlardan faydalanma imkanları.",
  },
  {
    id: 5,
    title: "Yatırım Teşvik Belgesi Başvuru ve Sürdürülebilirliği",
    slug: "yatirim-tesvik-belgesi",
    content: "Yatırım Teşvik Belgesi başvuru süreçleri, teşviklerden faydalanma koşulları ve yatırımlarınızın sürdürülebilirliği için danışmanlık hizmetleri.",
  },
  {
    id: 6,
    title: "İhracat & Kalkınma Ajansı Destekleri Başvuru Hazırlama",
    slug: "ihracat-kalkinma-ajansi-destekleri",
    content: "İhracat ve Kalkınma Ajansı desteklerine başvuru hazırlama süreçleri, desteklerden faydalanma koşulları ve ihracat potansiyelinizi artırma fırsatları.",
  },
]

const slugToPath: Record<string, string> = {
  "tubitak-teydeb-destek-programlari": "/tubitak-teydeb",
  "kosgeb-destek-programlari": "/kosgeb-destekleri",
  "teknoloji-gelistirme-bolgesi": "/teknoloji-gelistirme-bolgesi",
  "avrupa-birligi-projeleri": "/avrupa-birligi-projeleri",
  "yatirim-tesvik-belgesi": "/yatirim-tesvik-belgesi",
  "ihracat-kalkinma-ajansi-destekleri": "/ihracat-kalkinma-ajansi",
}

const Hizmetler: React.FC = () => {
  const [windowSize, setWindowSize] = useState(0)

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setWindowSize(window.screen.width)
    }
  })

  function SamplePrevArrow(props: any) {
    const { className, style, onClick } = props
    return (
      <div
        className={className}
        style={{ ...style }}
        onClick={onClick}
      ><ArrowLeftOutlined /></div>
    )
  }

  function SampleNextArrow(props: any) {
    const { className, style, onClick } = props
    return (
      <div
        className={className}
        style={{ ...style }}
        onClick={onClick}
      ><ArrowRightOutlined /></div>
    )
  }

  const slidesToShow = windowSize < 768 ? 1 : windowSize < 1024 ? 2 : 3

  return (
    <div className="hizmetler-section">
      <h3 className="section-title">HİZMETLERİMİZ</h3>
      <div className="hizmetler-grid">
        <Carousel
          dots
          infinite
          speed={500}
          slidesToShow={slidesToShow}
          arrows
          nextArrow={<SampleNextArrow />}
          prevArrow={<SamplePrevArrow />}
          draggable
          autoplay
        >
          {hizmetler.map((item) => (
            <div key={item.id}>
              <div className="hizmet-card">
                <AntdCard 
                  className="hizmet-card-inner"
                  bordered={false}
                  hoverable
                >
                  <div className="card-content">
                    <h4 className="card-title">{item.title}</h4>
                    <p className="card-description">
                      {item.content.length > 160 ? `${item.content.slice(0, 160)}...` : item.content}
                    </p>
                    <div className="card-action">
                      <Link href={slugToPath[item.slug] || '/'}>
                        <div className="header-style-button">
                          Devamı Oku
                        </div>
                      </Link>
                    </div>
                  </div>
                </AntdCard>
              </div>
            </div>
          ))}
        </Carousel>
      </div>
    </div>
  )
}

export { Hizmetler }





