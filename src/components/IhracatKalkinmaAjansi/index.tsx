import type { FC } from "react";
import { Row, Col } from "antd";
import { FeatureBox } from "@components";
import {
  BarChartOutlined,
  FileTextOutlined,
  RocketOutlined,
  DollarOutlined,
  DeploymentUnitOutlined,
  SearchOutlined,
  BulbOutlined,
} from "@ant-design/icons";

const ICON_STYLE = { fontSize: 40, color: "#1b9ce3" };

const IHRACAT = [
  {
    title: "İhtiyaç Analizi",
    description:
      "İhracat hedefleri ve ihtiyaçlar belirlenir, uygun destek programları tespit edilir.",
    icon: <SearchOutlined style={ICON_STYLE} />,
  },
  {
    title: "Başvuru Dosyasının Hazırlanması",
    description:
      "Belgeler toplanır, formlar doldurulur; eksiksiz başvuru paketi oluşturulur.",
    icon: <FileTextOutlined style={ICON_STYLE} />,
  },
  {
    title: "Müracaatın Yapılması",
    description: "Dosya ilgili kurumlara zamanında ve doğru biçimde teslim edilir.",
    icon: <RocketOutlined style={ICON_STYLE} />,
  },
  {
    title: "Süreç Takibi",
    description:
      "Aşamalar izlenir; ek belge/bilgi gerektiğinde hızlıca tamamlanır.",
    icon: <BarChartOutlined style={ICON_STYLE} />,
  },
  {
    title: "Desteklerin Kullanımı",
    description:
      "Onaylanan desteklerin doğru kullanımı için operasyonel danışmanlık.",
    icon: <DollarOutlined style={ICON_STYLE} />,
  },
];

const KALKINMA = [
  {
    title: "Proje Fikri Geliştirme",
    description: "İhtiyaç ve hedeflere uygun proje fikirleri geliştirilir.",
    icon: <BulbOutlined style={ICON_STYLE} />,
  },
  {
    title: "Başvuru Dosyasının Oluşturulması",
    description: "Proje planı, bütçe ve belgeler hazırlanır; eksiksiz dosya oluşturulur.",
    icon: <FileTextOutlined style={ICON_STYLE} />,
  },
  {
    title: "Müracaatın Gerçekleştirilmesi",
    description: "Dosya ajansa teslim edilir; kabul süreci yönetilir.",
    icon: <DeploymentUnitOutlined style={ICON_STYLE} />,
  },
  {
    title: "Proje Takibi ve Raporlama",
    description:
      "İlerleyiş takip edilir; gerektiğinde raporlamalar yapılır ve bildirilir.",
    icon: <BarChartOutlined style={ICON_STYLE} />,
  },
  {
    title: "Desteklerin Yönetimi",
    description: "Alınan desteklerin etkin kullanımına rehberlik edilir.",
    icon: <BarChartOutlined style={ICON_STYLE} />,
  },
];

const IhracatKalkinmaAjansi: FC = () => {
  return (
    <section className="hizmetler-section hakkimizda-aciklama" aria-labelledby="ika-title">
      <div className="service-hero">
        <h1 id="ika-title">İhracat &amp; Kalkınma Ajansı</h1>
        <p className="service-subtitle">Destekleri Başvuru Hazırlama</p>
      </div>

      <div className="service-intro">
        <div className="intro-content">
          <h2>Profesyonel İhracat ve Kalkınma Ajansı Danışmanlığı</h2>
          <p>
            İhracat yapmak isteyen işletmeler için sağlanan devlet desteklerinin başvuru süreçlerini uzman ekibimizle
            yönetiyoruz.
          </p>
        </div>
      </div>

      <div className="service-section">
        <h2>İhracat Destekleri Başvuru Hazırlama</h2>
        <Row gutter={[24, 24]} className="programs-grid">
          {IHRACAT.map((i) => (
            <Col key={i.title} xs={24} sm={12} lg={8}>
              <div className="program-card">
                <FeatureBox title={i.title} description={i.description} icon={i.icon} />
              </div>
            </Col>
          ))}
        </Row>
      </div>

      <div className="service-section">
        <h2>Kalkınma Ajansı Destekleri Başvuru Hazırlama</h2>
        <Row gutter={[24, 24]} className="programs-grid">
          {KALKINMA.map((i) => (
            <Col key={i.title} xs={24} sm={12} lg={8}>
              <div className="program-card">
                <FeatureBox title={i.title} description={i.description} icon={i.icon} />
              </div>
            </Col>
          ))}
        </Row>
      </div>

      <div className="service-section">
        <div className="service-intro">
          <div className="intro-content">
            <p>
              Süreçlerinizde profesyonel destek alarak teşvik ve hibelerden maksimum fayda sağlayabilirsiniz. Detaylar
              için bizimle iletişime geçin.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export { IhracatKalkinmaAjansi };
