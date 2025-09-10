import type { FC } from "react";
import { Row, Col } from "antd";
import { ListBox, FeatureBox } from "@components";
import {
  ShoppingCartOutlined,
  ExperimentOutlined,
  BarChartOutlined,
  GlobalOutlined,
  BankOutlined,
  RocketOutlined,
  ThunderboltOutlined,
  DollarOutlined,
  TeamOutlined,
  BulbOutlined,
  SolutionOutlined,
  CloudOutlined,
  ProjectOutlined,
  DeploymentUnitOutlined,
  HomeOutlined,
} from "@ant-design/icons";

const ICON_STYLE = { fontSize: 40, color: "#1b9ce3" };

const SECTORS = [
  { title: "Tarım", icon: <ShoppingCartOutlined style={ICON_STYLE} /> },
  { title: "Madencilik", icon: <ExperimentOutlined style={ICON_STYLE} /> },
  { title: "Makine", icon: <DeploymentUnitOutlined style={ICON_STYLE} /> },
  { title: "Otomotiv", icon: <RocketOutlined style={ICON_STYLE} /> },
  { title: "Savunma", icon: <HomeOutlined style={ICON_STYLE} /> },
  { title: "Elektronik", icon: <ThunderboltOutlined style={ICON_STYLE} /> },
  { title: "Turizm", icon: <GlobalOutlined style={ICON_STYLE} /> },
  { title: "Mobilya", icon: <HomeOutlined style={ICON_STYLE} /> },
  { title: "Finans", icon: <DollarOutlined style={ICON_STYLE} /> },
  { title: "İnşaat", icon: <ProjectOutlined style={ICON_STYLE} /> },
  { title: "Lojistik", icon: <DeploymentUnitOutlined style={ICON_STYLE} /> },
  { title: "Medya", icon: <CloudOutlined style={ICON_STYLE} /> },
  { title: "Gıda", icon: <ShoppingCartOutlined style={ICON_STYLE} /> },
  { title: "Tekstil", icon: <DeploymentUnitOutlined style={ICON_STYLE} /> },
  { title: "Enerji", icon: <ThunderboltOutlined style={ICON_STYLE} /> },
  { title: "Metal", icon: <ExperimentOutlined style={ICON_STYLE} /> },
  { title: "Eğitim", icon: <TeamOutlined style={ICON_STYLE} /> },
  { title: "Plastik", icon: <SolutionOutlined style={ICON_STYLE} /> },
  { title: "Sağlık", icon: <BarChartOutlined style={ICON_STYLE} /> },
  { title: "Kimya", icon: <ExperimentOutlined style={ICON_STYLE} /> },
];

const PROGRAMS = [
  { title: "1503 Proje Pazarları", icon: <BarChartOutlined style={ICON_STYLE} /> },
  { title: "1505 ÜSİB", icon: <TeamOutlined style={ICON_STYLE} /> },
  { title: "1509 Uluslararası Sanayi Ar-Ge", icon: <GlobalOutlined style={ICON_STYLE} /> },
  { title: "1511 Öncelikli Alanlar", icon: <BulbOutlined style={ICON_STYLE} /> },
  { title: "1002 Hızlı Destek", icon: <ThunderboltOutlined style={ICON_STYLE} /> },
  { title: "1005 Yeni Fikirler ve Ürünler", icon: <BulbOutlined style={ICON_STYLE} /> },
  { title: "1007 Kamu Ar-Ge", icon: <BankOutlined style={ICON_STYLE} /> },
  { title: "1071 Uluslararası Fonlara Erişim", icon: <GlobalOutlined style={ICON_STYLE} /> },
  { title: "1515 Öncül Ar-Ge Lab.", icon: <ExperimentOutlined style={ICON_STYLE} /> },
  { title: "1601 Kapasite Artırımı", icon: <SolutionOutlined style={ICON_STYLE} /> },
  { title: "1602 Patent Destek", icon: <BulbOutlined style={ICON_STYLE} /> },
  { title: "1702 Patent Tabanlı TT", icon: <ProjectOutlined style={ICON_STYLE} /> },
  { title: "1704 SAYEM Yeşil", icon: <CloudOutlined style={ICON_STYLE} /> },
  { title: "1707 KOBİ Odaklı Ar-Ge", icon: <BarChartOutlined style={ICON_STYLE} /> },
  { title: "1833 SAYEM Yeşil", icon: <SolutionOutlined style={ICON_STYLE} /> },
];

const PREP = [
  "Uygunluk testinin değerlendirilmesi",
  "Proje planı ve ekibinin oluşturulması",
  "Faaliyet, zaman ve kaynak planlaması",
  "Başvuru dosyaları ve sistem girişleri",
  "Sunum ve hakem görüşmeleri desteği",
  "Değerlendirme ve sözleşme takibi",
];

const MGMT = [
  "Kriterlere uygunluğun değerlendirilmesi",
  "İş paketleri ve dönemsel raporlar",
  "Teknik ve mali raporların oluşturulması",
  "Denetim süreçlerinde danışmanlık",
  "Sonuç raporunun hazırlanması",
];

const TubitakTeydeb: FC = () => {
  return (
    <section className="hizmetler-section hakkimizda-aciklama" aria-labelledby="teydeb-title">
      <div className="service-hero">
        <h1 id="teydeb-title">TÜBİTAK-TEYDEB Destek Programları</h1>
        <p className="service-subtitle">Başvuru ve Yürütme Danışmanlığı</p>
      </div>

      <div className="service-intro">
        <div className="intro-content">
          <h2>Profesyonel TÜBİTAK-TEYDEB Danışmanlığı</h2>
          <p>
            Proje fikrinizin doğru programa yönlendirilmesi, başvuru paketinin hazırlanması ve kabul sonrası yürütme &
            raporlama süreçlerinin tamamı için yanınızdayız.
          </p>
        </div>
      </div>

      <div className="service-section">
        <h2>Danışmanlığını Yaptığımız Sektörler</h2>
        <Row gutter={[24, 24]} className="programs-grid">
          {SECTORS.map((s) => (
            <Col key={s.title} xs={12} md={8} lg={6}>
              <div className="program-card">
                <FeatureBox title={s.title} description="" icon={s.icon} />
              </div>
            </Col>
          ))}
        </Row>
      </div>

      <div className="service-section">
        <h2>Danışmanlığını Yaptığımız TEYDEB Programları</h2>
        <Row gutter={[24, 24]} className="programs-grid">
          {PROGRAMS.map((p) => (
            <Col key={p.title} xs={12} md={8} lg={6}>
              <div className="program-card">
                <FeatureBox title={p.title} description="" icon={p.icon} />
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
              <p>TEYDEB değerlendirme kriterlerine göre uygunluk analizi ve yol haritası.</p>
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

export { TubitakTeydeb };
