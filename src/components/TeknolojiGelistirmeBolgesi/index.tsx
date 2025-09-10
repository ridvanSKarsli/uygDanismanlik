import type { FC } from "react";
import { Row, Col } from "antd";
import { FeatureBox } from "@components";
import { SearchOutlined, FileTextOutlined, ToolOutlined } from "@ant-design/icons";

const ICON_STYLE = { fontSize: 40, color: "#1b9ce3" };

const ITEMS = [
  {
    title: "TGB Değerlendirme",
    description: "Performans ve potansiyel analizi; stratejik yol haritası sunumu.",
    icon: <SearchOutlined style={ICON_STYLE} />,
  },
  {
    title: "TGB Başvuru Danışmanlığı",
    description: "Belgelerin hazırlanması ve prosedürlerin tamamlanması için destek.",
    icon: <FileTextOutlined style={ICON_STYLE} />,
  },
  {
    title: "TGB Uygulama & Yönetim",
    description: "Projelerin etkin yürütümü ve yönetimi için kapsamlı hizmetler.",
    icon: <ToolOutlined style={ICON_STYLE} />,
  },
];

const TeknolojiGelistirmeBolgesi: FC = () => {
  return (
    <section className="hizmetler-section hakkimizda-aciklama" aria-labelledby="tgb-title">
      <div className="service-hero">
        <h1 id="tgb-title">Teknoloji Geliştirme Bölgesi</h1>
        <p className="service-subtitle">Teknopark/Teknokent Başvuru ve Sürdürülebilirliği</p>
      </div>

      <div className="service-intro">
        <div className="intro-content">
          <h2>Profesyonel TGB Danışmanlığı</h2>
          <p>
            4691 sayılı Kanun kapsamında üniversite-sanayi işbirliğini artırmak, inovasyonu hızlandırmak ve
            ticarileşmeyi desteklemek için yanınızdayız.
          </p>
        </div>
      </div>

      <div className="service-section">
        <h2>Danışmanlık Hizmetlerimiz</h2>
        <Row gutter={[24, 24]} className="programs-grid">
          {ITEMS.map((i) => (
            <Col key={i.title} xs={24} sm={12} lg={8}>
              <div className="program-card">
                <FeatureBox title={i.title} description={i.description} icon={i.icon} />
              </div>
            </Col>
          ))}
        </Row>
      </div>
    </section>
  );
};

export { TeknolojiGelistirmeBolgesi };
