import type React from "react"
import Link from "next/link"
import { Card as AntdCard } from "antd"
import { DesktopOutlined, ProjectOutlined, MailOutlined } from '@ant-design/icons';

const threeBoxesData = [
  {
    id: 1,
    title: "Teknopark'a Giriş Yapmak İçin Bilmeniz Gerekenler",
    slug: "/teknopark",
    icon: <DesktopOutlined />,
    description: "Ar-Ge ve inovasyon faaliyetlerinizi teknopark avantajlarıyla geliştirin."
  },
  {
    id: 2,
    title: "İşletmeniz İçin Proje Çağrılarını Takip Edebileceğiniz Sistem",
    slug: "/projeTakipSistemi",
    icon: <ProjectOutlined />,
    description: "Hibe ve ihale fırsatlarını kaçırmayın, projelerinizi kolayca yönetin."
  },
  {
    id: 3,
    title: "Bültenler",
    slug: "/bultenler",
    icon: <MailOutlined />,
    description: "Sektördeki son gelişmeler ve önemli duyurular hakkında güncel bilgiler."
  },
]

const ThreeBoxes: React.FC = () => {
  return (
    <div className="three-boxes-section">
      <div className="three-boxes-grid">
        {threeBoxesData.map((item) => (
          <div key={item.id} className="three-box-card">
            <Link href={item.slug}>
              <AntdCard
                className="three-box-card-inner"
                bordered={false}
                hoverable
              >
                <div className="icon-container">{item.icon}</div>
                <h4 className="card-title">{item.title}</h4>
                <p className="card-description">{item.description}</p>
              </AntdCard>
            </Link>
          </div>
        ))}
      </div>
    </div>
  )
}

export { ThreeBoxes }
