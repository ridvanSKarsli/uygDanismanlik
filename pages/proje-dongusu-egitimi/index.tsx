import React from 'react';
import Image from 'next/image'
import Script from 'next/experimental-script';
import Head from 'next/head';


const ProjectSpring: React.FC = () => {
  
    return (
        <>
         <Head>
            <title>Proje Döngüsü Eğitimi - UYG Yönetim ve Danışmanlık</title>
            <meta charSet="utf-8"/>
            <meta property="keywords" content="Proje Döngüsü eğitimi,Bireysel proje,eğitim ve danışmanlık" key="title" />
            <meta property="og:title" content="Proje Döngüsü Eğitimi" key="title" />
            <meta name="Description" content="Proje hazırlama ve yönetme profesyonel bir iştir. Proje döngüsü ise üzerinde çalışılacak bir fikrin geliştirilmesinden, projelendirilmesine, uygun programların tespitinden, projenin uygulanarak sonuçlandırılmasına kadar geçen süre içindeki tüm aşamaları kapsamaktadır. Bu karmaşık süreçlerde zorlanmadan başarılı bir proje yapmak, başvurmak ve yönetmek için en büyük yardım ise, bu alanda çalışan profesyoneller tarafından düzenlenen eğitimlerden geçmektedir. Bu nedenle, eğer hibe başvurusunda işinizi şansa bırakmak istemiyorsanız atmanız gereken ilk adım iyi bir Proje Döngüsü Yönetimi (PCM) Eğitimi almaktır." />
            <meta name="og:description" content="Proje hazırlama ve yönetme profesyonel bir iştir. Proje döngüsü ise üzerinde çalışılacak bir fikrin geliştirilmesinden, projelendirilmesine, uygun programların tespitinden, projenin uygulanarak sonuçlandırılmasına kadar geçen süre içindeki tüm aşamaları kapsamaktadır. Bu karmaşık süreçlerde zorlanmadan başarılı bir proje yapmak, başvurmak ve yönetmek için en büyük yardım ise, bu alanda çalışan profesyoneller tarafından düzenlenen eğitimlerden geçmektedir. Bu nedenle, eğer hibe başvurusunda işinizi şansa bırakmak istemiyorsanız atmanız gereken ilk adım iyi bir Proje Döngüsü Yönetimi (PCM) Eğitimi almaktır." />
            <meta property="og:url" content="/proje-dongusu-egitimi" />
            <meta property="og:image" content="project.jpeg" />
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
        <div className='hakkmizda-banner'>
            <Image src='/images/project.webp' className='image' width='1920' height='500' />
        </div>
        <div className='hakkimizda-aciklama'>
                <h1>Proje Döngüsü Eğitimi</h1>
                <p>Bireysel veya kurumsal olarak başarılı bir proje teklifi hazırlamak ister misiniz?</p>
                <p>Proje hazırlama ve yönetme profesyonel bir iştir. Proje döngüsü ise üzerinde çalışılacak bir fikrin geliştirilmesinden, projelendirilmesine, uygun programların tespitinden, projenin uygulanarak sonuçlandırılmasına kadar geçen süre içindeki tüm aşamaları kapsamaktadır. Bu karmaşık süreçlerde zorlanmadan başarılı bir proje yapmak, başvurmak ve yönetmek için en büyük yardım ise, bu alanda çalışan profesyoneller tarafından düzenlenen eğitimlerden geçmektedir. Bu nedenle, eğer hibe başvurusunda işinizi şansa bırakmak istemiyorsanız atmanız gereken ilk adım iyi bir Proje Döngüsü Yönetimi (PCM) Eğitimi almaktır.</p>
                <p>Proje Döngüsü Yönetimi Eğitimi, iyi planlanmış ve başarılı bir proje süreci yaşamak üzere yola çıkmanın güvencesidir. Tüm döngü hakkında başlangıçta bilgi sahibi olmak, geleceği öngörerek proje hazırlamayı kolaylaştırır ve başarıyı artırır.</p>
                <p>Çeşitli hibe programlarına yönelik (AB tarafından finanse edilen H2020, COSME, Erasmus+, SMEinst, ERC, MarieCurie, Eureka, EuropeAid, IPA II projeleri, diğer uluslararası ve AB birlik programları, TÜBİTAK destekleri, Kalkınma Ajansı Projeleri, Vakıf Projeleri, STK projeleri) proje hazırlamayı düşünen bireyler ve kurum personellerine yönelik proje eğitimlerimiz üç modülden oluşmaktadır
                Proje Döngüsü Yönetimi Eğitimi, Hibe Programlarına Başvuru Eğitimi, Proje Uygulama Eğitimi olmak üzere 3 modülden oluşan eğitimlerimiz ile hiç tecrübeniz olmasa bile, doktora mezunu akademik danışmanlarımızın rehberliğinde en az master dereceli alanında uzman eğitmenlerimiz eşliğinde uygulamalı eğitimlerimize başvurabilirsiniz. Bu şekilde proje hazırlayabilecek düzeye gelerek Ar-Ge ve inovasyon alanında kurumsal kapasitesinizi artırabileceksiniz.  </p>
                <h2>Eğitim İçeriğimiz</h2>
                <ul>
                    <li>Proje Döngüsü Yönetimi Eğitimi (Project Cycle Management / PCM) Eğitimi</li>
                    <li>Hibe Programlarına Başvuru Eğitim</li>
                    <li>Proje Uygulama Eğitimi </li>
                </ul>
        </div>
    </>
  );
};

export default ProjectSpring;
