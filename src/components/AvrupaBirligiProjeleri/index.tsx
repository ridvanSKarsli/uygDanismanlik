import type { FC } from "react";
import { Row, Col } from "antd";
import { FeatureBox } from "@components";
import { RocketOutlined, BookOutlined, PartitionOutlined } from "@ant-design/icons";

const ICON_STYLE = { fontSize: 40, color: "var(--color-accent)" };

const PROGRAMS = [
  {
    title: "Horizon Europe",
    description:
      "Bilimsel araştırma ve yenilik projelerine büyük finansman fırsatları sunar. En büyük AB araştırma ve inovasyon programıdır.",
    icon: <RocketOutlined style={ICON_STYLE} />,
  },
  {
    title: "Erasmus+",
    description:
      "Eğitim, gençlik ve spor alanlarında öğrenci değişimi, personel hareketliliği ve işbirliği projelerini destekler.",
    icon: <BookOutlined style={ICON_STYLE} />,
  },
  {
    title: "Avrupa Yapısal ve Yatırım Fonları",
    description: "Bölgesel kalkınma, altyapı, yenilikçilik ve iş yaratma projelerini destekler.",
    icon: <PartitionOutlined style={ICON_STYLE} />,
  },
];

const AvrupaBirligiProjeleri: FC = () => {
  return (
    <section className="hizmetler-section hakkimizda-aciklama" aria-labelledby="abp-title">
      <div className="service-hero">
        <h1 id="abp-title">Avrupa Birliği Projeleri</h1>
        <p className="service-subtitle">Programları ve Danışmanlık Hizmetleri</p>
      </div>

      <div className="service-intro">
        <div className="intro-content">
          <h2>Profesyonel AB Proje Danışmanlığı</h2>
          <p>
            Avrupa Birliği Projeleri Programları; işletmeler, kamu kurumları, STK'lar ve akademik kurumlar için
            finansman ve destek sağlar. İnovasyonu teşvik eder, sürdürülebilir kalkınmayı ve işbirliğini güçlendirir.
          </p>
        </div>
      </div>

      <div className="service-section">
        <h2>AB Destek Programları</h2>
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
        <h2>Destek ve Başvuru</h2>
        <div className="service-intro">
          <div className="intro-content">
            <p>
              AB programlarına başvuru sürecinde uçtan uca rehberlik ve dokümantasyon desteği sağlıyoruz. Detaylar için
              bizimle iletişime geçin.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export { AvrupaBirligiProjeleri };
