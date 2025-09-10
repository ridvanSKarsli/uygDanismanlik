import Image from 'next/image'
import { Collapse } from 'antd';
import Link from 'next/link';
import Script from 'next/experimental-script';
import Head from 'next/head';

const { Panel } = Collapse;
const Corparate : React.FC = () => {


    return(
        <>
        <Head>
            <title>Sıkça Sorulan Sorular - UYG Yönetim ve Danışmanlık</title>
            <meta charSet="utf-8"/>
            <meta property="keywords" content="eğitime nasıl başlarım,proje,eğitim,danışmanlık,eğitim ve danışmanlık" key="title" />
            <meta property="og:title" content="Sıkça Sorulan Sorular" key="title" />
            <meta name="Description" content="İşletmenizin küresel rekabet ortamında ayakta kalabilmesi ve gelişimleri yakından takip edebilmesi aşağıdaki danışmanlıklardan faydalanıp kurumsal vizyonunuzu geliştirebilirsiniz. STRATEJİK PLANLAMA, VERİMLİLİK SÜREÇ ANALİZİ, TOPLAM KALİTE YÖNETİMİ" />
            <meta name="og:description" content="İşletmenizin küresel rekabet ortamında ayakta kalabilmesi ve gelişimleri yakından takip edebilmesi aşağıdaki danışmanlıklardan faydalanıp kurumsal vizyonunuzu geliştirebilirsiniz. STRATEJİK PLANLAMA, VERİMLİLİK SÜREÇ ANALİZİ, TOPLAM KALİTE YÖNETİMİ" />
            <meta property="og:url" content="/sss" />
            <meta property="og:image" content="question.jpeg" />
            <link rel="manifest" href="/site.webmanifest" />
            </Head>
            <Script
            src="https://www.google-analytics.com/analytics.js"      />
            <Script id="google-analytics">
            {`
            (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
            (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
            m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
            })(window,document,'script','https://www.google-analytics.com/analytics.js','ga');

            ga('create', 'G-H7KR0LT2B4', 'auto');
            ga('send', 'pageview');
            `}
            </Script>
         <div className='sss-banner'>
            <Image src='/images/question.jpg' className='image' width='1920' height='500' />
            <div className='hakkimzda-description'>
            </div>
           </div>
        
           <div className='hakkimizda-aciklama acordion-box'>
                <h1>Sıkça Sorulan Sorular</h1>
                <Collapse accordion  defaultActiveKey={['1']}>
                    <Panel header={<div className='acordion-custom-header'> ŞİRKETİM İÇİN YÖNETİM DANIŞMANI ARIYORUM <Link href='/iletisim' >İletişime Geç</Link> </div>} key="1">
                    <p>İşletmenizin küresel rekabet ortamında ayakta kalabilmesi ve gelişimleri yakından takip edebilmesi aşağıdaki danışmanlıklardan faydalanıp kurumsal vizyonunuzu geliştirebilirsiniz. STRATEJİK PLANLAMA, VERİMLİLİK SÜREÇ ANALİZİ, TOPLAM KALİTE YÖNETİMİ</p>
                    </Panel>
                    <Panel header= {<div className='acordion-custom-header'>PROJEMİ HAYATA GEÇİRMEK İÇİN TEŞVİK ARAŞTIRIYORUM.<Link href='/iletisim' >İletişime Geç</Link> </div>} key="2">
                    <p>İşletme sahibisiniz ve büyük projeleri hayata geçirmek için destek arıyorsunuz.. Veya çok iyi bir proje teklifiniz var fakat bütçeniz mi yetmiyor.. Teşvikleri aşağıdaki linkten inceleyebilir, proje yazım süreci ile ilgili bizlerden destek alabilirsiniz. Bizimle iletişime geçtiğiniz takdirde akademik kadromuzun özgeçmişlerini sizlerle paylaşıyoruz. Danışmanlarımızın daha önce hazırladıkları projeler ile tecrübelerine inanıyoruz. <Link href='/tesvikler'> Proje teşvikleri </Link></p>
                    </Panel>
                    <Panel header={<div className='acordion-custom-header'> ÇALIŞANLARIMA VE/VEYA ÖĞRENCİLERİME EĞİTİM ALDIRMAK İSTİYORUM.<Link href='/iletisim' >İletişime Geç</Link> </div>} key="3">
                    <p>"Gelecek Toplum" bilgi toplumu olacaktır. Hem bireysel hem de kurumsal düzeyde eğitim bir organizasyon için vazgeçilmezdir. Geleceğin yöneticileri, dijitalleşen çağda yeni nesil üretim ve hizmet verebilmek adına bugünden iyi eğitilmeli ve sürece dahil edilmelidir. Bu doğrultuda öğrencilerin bilime, teknolojiye, yeniliklere uygun eğitimler alması ve sektörü yakından takip etmesi gerekmektedir. Sizler de sektöre yeni adım atmış veya atacak olan gençleri desteklemek istiyorsanız veya bu gençlerdenseniz aşağıdaki eğitimleri<Link href='/tesvikler'>  inceyebilirsiniz. </Link></p>
                    </Panel>
                </Collapse>
           </div>
        </>
    )
}

export default Corparate;