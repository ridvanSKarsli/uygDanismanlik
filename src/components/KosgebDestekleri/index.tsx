import type { FC } from "react";
import { Row, Col } from "antd";
import { ListBox, FeatureBox } from "@components";
import {
  ThunderboltOutlined,
  RocketOutlined,
  GlobalOutlined,
  ApiOutlined,
  DeploymentUnitOutlined,
  BulbOutlined,
} from "@ant-design/icons";

const ICON_STYLE = { fontSize: 40, color: "var(--color-accent)" };

const PROGRAMS = [
  {
    title: "KOBİ Enerji Verimliliği Destek Programı",
    description: "KOBİ’lerin enerji verimliliğini artırmaya yönelik destek.",
    icon: <ThunderboltOutlined style={ICON_STYLE} />,
  },
  {
    title: "Girişimci Destek Programı",
    description: "Yeni işletme kuracak girişimcilere finansal/teknik destek.",
    icon: <RocketOutlined style={ICON_STYLE} />,
  },
  {
    title: "İş Birliği Destek Programı",
    description: "Kurumlar arası ortak projelere destek mekanizması.",
    icon: <GlobalOutlined style={ICON_STYLE} />,
  },
  {
    title: "KOBİ Dijital Dönüşüm Destek Programı",
    description: "Dijital teknolojilerle süreçlerini iyileştirmek isteyen KOBİ’lere destek.",
    icon: <ApiOutlined style={ICON_STYLE} />,
  },
  {
    title: "KOBİ TEKNOYATIRIM",
    description: "Teknolojik ürün geliştirme ve Ar-Ge projelerine teşvikler.",
    icon: <DeploymentUnitOutlined style={ICON_STYLE} />,
  },
  {
    title: "Stratejik Ürün Destek Programı",
    description: "Stratejik önemdeki ürünlerin geliştirilmesi/üretimi için destek.",
    icon: <BulbOutlined style={ICON_STYLE} />,
  },
];

const PREP = [
  "Proje uygunluk testinin değerlendirilmesi",
  "Proje planı ve ekibinin oluşturulması",
  "Faaliyet, zaman ve kaynak planlaması",
  "Başvuru dosyaları ve sistem girişleri desteği",
  "Sunum ve hakem görüşmeleri desteği",
  "Değerlendirme ve sözleşme takibi",
];

const MGMT = [
  "Kriterlere uygunluğun değerlendirilmesi",
  "İş paketlerinin hazırlanması ve raporlar",
  "Teknik ve mali raporların oluşturulması",
  "Denetim süreçlerinde danışmanlık",
  "Sonuç raporunun hazırlanması",
];

const KosgebDestekleri: FC = () => {
  return (
    <section className="hizmetler-section hakkimizda-aciklama" aria-labelledby="kosgeb-title">
      <div className="service-hero">
        <h1 id="kosgeb-title">KOSGEB Destek Programları</h1>
        <p className="service-subtitle">Başvuru ve Yürütme Danışmanlığı</p>
      </div>

      <div className="service-intro">
        <div className="intro-content">
          <h2>Profesyonel KOSGEB Danışmanlığı</h2>
          <p>
            KOSGEB programlarıyla MİKRO ve KOBİ’lerin faaliyetlerini sürdürmesi ve istihdamı artırması hedeflenir.
            Uygunluk analizinden başvuru ve yürütmeye kadar tüm aşamaları koordine ediyoruz.
          </p>
        </div>
      </div>

      <div className="service-section">
        <h2>Danışmanlığını Yaptığımız Programlar</h2>
        <Row gutter={[24, 24]} className="programs-grid">
          {PROGRAMS.map((p) => (
            <Col key={p.title} xs={24} sm={12} lg={8}>
              <div className="program-card">
                <FeatureBox title={p.title} description={p.description} icon={p.icon} />
              </div>
            </Col>
          ))}
        </Row>
      </div>

      <div className="service-section">
        <h2>Danışmanlık Süreci</h2>

        <div className="process-timeline">
          <div className="process-step">
            <div className="step-number">01</div>
            <div className="step-content">
              <h3>Proje Analiz Süreci</h3>
              <p>KOSGEB kriterlerine göre uygunluk analizi ve yol haritası oluşturulması.</p>
            </div>
          </div>

          <div className="process-step">
            <div className="step-number">02</div>
            <div className="step-content">
              <h3>Proje Hazırlama Süreci</h3>
              {PREP.map((t) => (
                <ListBox key={t} text={t} />
              ))}
            </div>
          </div>

          <div className="process-step">
            <div className="step-number">03</div>
            <div className="step-content">
              <h3>Proje Yönetme Süreci</h3>
              {MGMT.map((t) => (
                <ListBox key={t} text={t} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export { KosgebDestekleri };
