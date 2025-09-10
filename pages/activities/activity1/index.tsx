import Image from "next/image"
import Script from 'next/experimental-script';
import Head from 'next/head';

const Hakkimizda = () => {
    return (
        <>
            <Head>
                <title>COVID-19 Pandemisi Sürecinde Bireysel Eğitim Danışmanlığı - UYG Yönetim ve Danışmanlık</title>
                <meta charSet="utf-8" />
                <meta property="keywords" content="COVID-19, bireysel eğitim danışmanlığı, eğitim, danışmanlık" key="keywords" />
                <meta property="og:title" content="COVID-19 Pandemisi Sürecinde Bireysel Eğitim Danışmanlığı" key="og:title" />
                <meta name="Description" content="COVID-19 pandemisi sürecinde bireysel eğitim danışmanlığı hizmetlerimizle, eğitimin değerinin farkındayız. Öğrenme sürecinizi kesintisiz devam ettirmeniz için buradayız." />
                <meta name="og:description" content="COVID-19 pandemisi sürecinde bireysel eğitim danışmanlığı hizmetlerimizle, eğitimin değerinin farkındayız. Öğrenme sürecinizi kesintisiz devam ettirmeniz için buradayız." />
                <meta property="og:url" content="/covid19-bireysel-egitim-danismanligi" />
                <meta property="og:image" content="covid19_education.jpg" />
                <link rel="manifest" href="/site.webmanifest" />
            </Head>
            <Script
                src="https://www.google-analytics.com/analytics.js" />
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
            <div className='hakkmizda-banner'>
                <Image className='hakkimizda-image' src="/images/image1.webp" alt='Hakkımızda ' width='1920' height='500' />
                <div className='hakkimzda-description'>
                    <h2>UYG Yönetim ve Danışmanlık</h2>
                    <p>Güvenilir, etik değerlere bağlı, yenilikçi, ihtiyaca yönelik, çözüm odaklı eğitim ve danışmanlık hizmetleri veren “bilgi sermayesi” katkı sağlamaktır. </p>
                </div>
            </div>
            <div className='hakkimizda-aciklama'>
                <h1>UYG Danışmanlık Hakkında</h1>
                <p>Dünya üzerinde artan küreselleşme ile birlikte her alanda hızla yaşanan gelişmelere şahit olmaktayız. Mal, hizmet ve bilgi üretimi yapan işletmeler, bu gelişmelere ayak uyduramadıkları takdirde birçok problemle karşı karşıya kalmaktadır.  İşletmelerin yaşamlarını devam ettirebilmek ve rekabet üstünlüğü sağlayabilmek için yapması gerekenler vardır.
                    Bu küresel rekabet ortamında, teknolojiyi kullanan ve geliştiren, dünya standartlarında üretim yapmayı hedefleyen, doğru zamanda doğru kararlar alabilen, ülke ekonomisine katkı sağlayan, bünyelerindeki çalışanlara değer veren, örgüt eğitimini amaç edinen işletmeler ayakta kalabilecektir.</p>
                <p>Biz, ülkemizin geleceği adına işletmelerimizin bu gelişmelere uyum sağlamasını istiyoruz.  Verdiğimiz eğitimler ve desteklediğimiz projeler ile işletmelerin, çalışanların ve ülkemizin ekonomik gelişimine katkı sağlamayı hedef ediniyoruz.
                    Her şirketin bir misyon ve vizyonu vardır. Aynı zamanda her bireyin de kişisel misyon ve vizyonu olmalıdır.
                    Bizim misyonumuz; güvenilir, etik değerlere bağlı, yenilikçi, ihtiyaca yönelik, çözüm odaklı eğitim ve danışmanlık hizmetleri vererek “bilgi sermayesi” ne katkı sağlamaktır.
                </p>
                <p>Vizyonumuz ise; kalite ve başarı ile en iyisini elde etmektir.
                    Kurumsal veya bireysel misyonunu oluşturmuş tüm danışanlarımız için de bu vizyonu yapmaya  gayret ediyoruz.
                    Birlikte her şeyi başarabileceğimize inanıyoruz.
                </p>
                <p>Unutmayın,
                    Küçük adımlar büyük sonuçlar meydana getirir…
                    (Small Steps Big Results)
                </p>
            </div>
        </>
    )
}

export default Hakkimizda