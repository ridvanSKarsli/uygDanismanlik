import type { FC } from "react";
import { Row, Col } from "antd";
import { ListBox, FeatureBox } from "@components";
import {
  AreaChartOutlined,
  DollarOutlined,
  BankOutlined,
  CreditCardOutlined,
  SafetyOutlined,
  HomeOutlined,
  PercentageOutlined,
  BuildOutlined,
} from "@ant-design/icons";

const ICON_STYLE = { fontSize: 40, color: "var(--color-accent)" };

const BOLGESEL = [
  { title: "KDV İstisnası", icon: <PercentageOutlined style={ICON_STYLE} /> },
  { title: "Gümrük Vergisi Muafiyeti", icon: <BankOutlined style={ICON_STYLE} /> },
  { title: "Vergi İndirimi", icon: <DollarOutlined style={ICON_STYLE} /> },
  { title: "Sigorta Primi İşveren Hissesi", icon: <SafetyOutlined style={ICON_STYLE} /> },
  { title: "Faiz / Kâr Payı Desteği", icon: <CreditCardOutlined style={ICON_STYLE} /> },
  { title: "Yatırım Yeri Tahsisi", icon: <HomeOutlined style={ICON_STYLE} /> },
  { title: "Sigorta Primi Desteği", icon: <SafetyOutlined style={ICON_STYLE} /> },
];

const GENEL = [
  { title: "KDV İstisnası", icon: <PercentageOutlined style={ICON_STYLE} /> },
  { title: "Gümrük Vergisi Muafiyeti", icon: <BankOutlined style={ICON_STYLE} /> },
];

const BASVURU = [
  "TÜYSDGM’ye başvuru ve sürecin takibi",
  "Onay sonrası vergi dairesi işlemleri (KDV, Gelir/Kurumlar Vergisi istisna/indirimi)",
];

const UYGULAMA = [
  "Hesap planı ve dönemsel yatırım takip formları",
  "Yatırımların etiketlenmesi ve vergi indirimi hesapları",
  "Belge revizyon/kapama başvuruları",
  "Uzman denetimlerinin yönetimi",
];

const YatirimTesvikBelgesi: FC = () => {
  return (
    <section className="hizmetler-section hakkimizda-aciklama" aria-labelledby="ytb-title">
      <div className="service-hero">
        <h1 id="ytb-title">Yatırım Teşvik Belgesi</h1>
        <p className="service-subtitle">Başvuru ve Sürdürülebilirliği</p>
      </div>

      <div className="service-intro">
        <div className="intro-content">
          <h2>Profesyonel Yatırım Teşvik Danışmanlığı</h2>
          <p>
            Yerli üretimi artırmaya ve ithalat bağımlılığını azaltmaya yönelik yatırımlar; bölgesel gelişmişlik
            farklarını azaltacak biçimde desteklenir. Sürecin her aşamasında yanınızdayız.
          </p>
        </div>
      </div>

      <div className="service-section">
        <h2>Bölgesel Teşvik</h2>
        <Row gutter={[24, 24]} className="programs-grid">
          <Col xs={24} lg={12}>
            <div className="program-card">
              <FeatureBox
                title="Bölgesel Teşvik Programı"
                description="İller arası gelişmişlik farkını azaltarak üretim ve ihracat potansiyelini artırmayı hedefler."
                icon={<AreaChartOutlined style={ICON_STYLE} />}
              />
            </div>
          </Col>
        </Row>
      </div>

      <div className="service-section">
        <h3>Destek Unsurları</h3>
        <Row gutter={[24, 24]} className="programs-grid">
          {BOLGESEL.map((d) => (
            <Col key={d.title} xs={12} md={8} lg={6}>
              <div className="program-card">
                <FeatureBox title={d.title} description="" icon={d.icon} />
              </div>
            </Col>
          ))}
        </Row>
      </div>

      <div className="service-section">
        <h2>Genel Teşvik</h2>
        <Row gutter={[24, 24]} className="programs-grid">
          <Col xs={24} lg={12}>
            <div className="program-card">
              <FeatureBox
                title="Genel Teşvik Programı"
                description="Teşvik edilmeyecek konular dışında kalan ve asgari yatırım tutarını sağlayan yatırımlar için."
                icon={<BuildOutlined style={ICON_STYLE} />}
              />
            </div>
          </Col>
        </Row>
      </div>

      <div className="service-section">
        <h3>Destekler</h3>
        <Row gutter={[24, 24]} className="programs-grid">
          {GENEL.map((d) => (
            <Col key={d.title} xs={12} md={8} lg={6}>
              <div className="program-card">
                <FeatureBox title={d.title} description="" icon={d.icon} />
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
              <h3>Fizibilite ve Başvuru Hazırlığı</h3>
              <p>Yatırımın mali/teknik fizibilitesi ve başvuru dosyasının hazırlanması.</p>
            </div>
          </div>

          <div className="process-step">
            <div className="step-number">02</div>
            <div className="step-content">
              <h3>Başvuru ve Takip Süreci</h3>
              {BASVURU.map((t) => (
                <ListBox key={t} text={t} />
              ))}
            </div>
          </div>

          <div className="process-step">
            <div className="step-number">03</div>
            <div className="step-content">
              <h3>Uygulama ve Denetim</h3>
              {UYGULAMA.map((t) => (
                <ListBox key={t} text={t} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export { YatirimTesvikBelgesi };
