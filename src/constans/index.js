
export const  slugify = (text) => {
    var trMap = {
        'çÇ':'c',
        'ğĞ':'g',
        'şŞ':'s',
        'üÜ':'u',
        'ıİ':'i',
        'öÖ':'o'
    };
    for(var key in trMap) {
        text = text.replace(new RegExp('['+key+']','g'), trMap[key]);
    }
    return  text.replace(/[^-a-zA-Z0-9\s]+/ig, '') // remove non-alphanumeric chars
                .replace(/\s/gi, "-") // convert spaces to dashes
                .replace(/[-]+/gi, "-") // trim repeated dashes
                .toLowerCase();

}


export const blogJson = [
    {
        type:'blog',
        id:1,
        title : 'STEM Eğitimi',
        createDateTime: new Date(Date.now),
        description:[
            'Bilim ve teknolojiyi derinden özümseyen ve daha iyi teknik problem çözme becerilerine sahip olan bir kişinin, mesleki tutkusu ve ilintili olarak başarısı üst düzeyde olacaktır. Modern bir ekonominin gereksinimi, üst düzey teknik anlayış ve becerilere sahip bir işgücüdür. Özellikle Z kuşağı diye adlandırdığımız yeni neslin, teknoloji ile yakın arkadaşlığı düşünüldüğünde öğrencilerin öğrenme ve öğretim etkinliklerini bu platformlara taşıması da giderek önem kazanmaktadır.',
            'STEM diye adlandırdığımız 21 .yüzyıl yenilikçi eğitim yaklaşımı, Fen, Teknoloji, Mühendislik ve Matematik (Science, Technology, Engineering and Math) disiplinlerinin bir arada entegrasyonu ile gerçekleşen bir yaklaşımdır. Özellikle dijitalleşen dünyada üreten, yenilikleri takip eden, yaratıcı bireyler yetiştirmenin anahtarı olan eğitimlerin başında STEM eğitimi gelmektedir. Dünyada 2011 yılında bu isimle sistemleşmiştir. Bu sistemde öğrencilerin fen bilimleri, matematik gibi dersleri ezberleme tekniğinden uzak, uygulamalı, problem çözme ve akıl yürütme odaklı öğrenmesi hedeflenmektedir. Ülkemizde bu eğitim, öğrencilere ilkokul çağından itibaren uygulanmaktadır. Mevcut durum analiz edildiğinde, ülkemizde sadece robotik çalışmalar STEM olarak nitelendirilmektedir. Ancak STEM eğitimi sadece materyal üretmeye değil onun arkasında yatan inovatif düşünmeyi, problem çözmeyi, sorgulamayı, matematiksel modelleme yapabilmeyi, hesaplı düşünme becerisine sahip, proje tabanlı çalışmaları kapsamaktadır. Özellikle son yıllarda bu disiplinlere sanat, tıp, çevre eğitimi gibi diğer disiplinler eklenerek tüm eğitim kademelerinde farklı disiplinlerin bir arada olduğu eğitim sistemlerinin oluşmasını sağlamıştır.',
            'Tıpkı STEM ve Maker hareketi gibi “4. Sanayi Devrimi” olarak adlandırılan Endüstri 4.0, dijital fabrikalar ve akıllı teknolojiler ile “insansız üretim” mottosuyla geleceğimize yön veriyor. Endüstri 4.0’ın bizden beklediği teknolojiyi her alanda tasarlayacak, geliştirecek, üretecek ve üretilen teknolojiyi kullanabilecek insan gücünün eğitimi kaçınılmaz bir gerçektir. Endüstri 4.0’ın gerçekleri; üst düzey düşünme becerilerine sahip bireyler yetiştirmek ve bilmenin yetmeyeceği, düşünmenin zorunlu hale geleceği yöntemlerdir. Dünya problemlerini doğru hissedecek ve tanımlayacak (eleştirel düşünme), çözümü için yenilikçi fikirler üretecek (yaratıcı düşünme), çözüm için doğru yöntem ve teknikleri kullanacak (bilimsel ve analitik düşünme) bireylerin her alanda yetiştirilmesi büyük önem taşımaktadır. Bu durum okulöncesi, ilköğretim, ortaöğretim, yükseköğretim ve yaşam boyu öğretimde olmak üzere çok geniş bir perspektifte birbirleriyle entegre ve etkileşimli olarak düşünülmesi, planlanması, tasarlanması ve uygulanması gereken bir konudur.',
            'Bizler de UYG Danışmanlık ailesi olarak, bu alanda Türkiye’de öncü çalışmalar yapmış akademik danışmanlarımızla, dijital dünyada problem çözme becerisine sahip, yaratıcı, araştırmacı, buluş yapabilen, teknolojiyi kullanabilen ve geliştirebilen, üreten bireyler yetiştirmek amacıyla STEM eğitimleri vermekteyiz. İlkokul seviyesinden yetişkin düzeyine kadar her yaş grubundan öğrencilerimize uygun eğitim planları hazırladık. Sizler de bu eğitimlere bireysel ve grup olarak katılmak, STEM içerisinde bulunan kavramlara farklı bir bakış açısı kazanmak istiyorsanız bizimle iletişime geçebilirsiniz.'
        ],
        image: 'http://www.uygdanismanlik.com/wp-content/uploads/2021/02/egitim3.1-e1613508431704-1-e1613588345935.jpg',
        tags:['STEM eğitim,eiğitim,danışmanlık','STEM danışmanlığı'],
    },
    {
        createDateTime: new Date(Date.now),
        type:'blog',
        id:2,
        title:'Dijital Öğretim Uygulamaları Eğitimi',
        description:[
            'Dijital öğrenme dünyası, arta teknolojik gelişmelerle zenginleşmeye devam etmekte. Aynı zamanda teknolojinin gelişmesine bağlı olarak günümüz çocukları doğar doğmaz teknoloji ile tanışmakta, yeni nesil olarak nitelendirebileceğimiz öğrencilerin hayatlarının merkezine yerleşmiş durumdadır. Bu durum öğrencilerin öğrenme stillerini ve öğretim ortamlarından beklentilerini değiştirmektedir. Bu sürece uyum sağlayabilmek öğretmenler, ebeveynler ve eğitim-öğretim kurumları için bir zorunluluk olmuştur. Son 10 yıldır hızla gelişim gösteren dijital öğrenme uygulamaları Covid-19 pandemisi nedeniyle daha da tanınır hale gelmiştir. Halihazırda uygulanan eğitim-öğretim faaliyetleri uzaktan eğitim olarak nitelendirilmekte, öğretmenler ve eğitim kurumları hazır içerik ve web araçları kullanarak süreci yürütmeye çabalamaktadır. Halbuki eğitim belirlenen kazanımlar ışığında hedef kitleye özelleştirilerek gerçekleştirilmeli, bu durum öğrenci merkezli öğretim uygulamalarının temelini oluşturmaktadır.',
            'Yürüttüğümüz eğitim programımızda her bir eğitim-öğretim kurumunun kendine ait',
            'içerikler geliştirebilmesi için öğretmen eğitimleri düzenlenmektedir. Eğitim içeriğimizde;',
            '- Öğretim Tasarımı (6 Saat)',
            '- Senaryo Oluşturma Eğitimi (6 Saat)',
            '- Dijital Ders Tasarımı Eğitimi (4 Saat)',
            '- İçerik Düzenleme (14 Saat)',
            '- Greenscreen Uygulamaları (12 Saat)',
            '- Ölçme Değerlendirme (2 Saat)',
            'olmak üzere 6 modül bulunmakta ve toplam 44 saat olacak şekilde online tabanlı yürütülmektedir. Eğitmenlerimiz alanında yüksek lisans ve doktora derecesine sahip akademik danışmanlarımızdan oluşmaktadır.'
        ],
        image:'http://www.uygdanismanlik.com/wp-content/uploads/2021/02/egitim2.1.png',
        tags:['digital eğitim,eiğitim,danışmanlık','proje danışmanlığı','öğretim uygulamarı'],
    },
    {
        type:'blog',
        id:3,
        createDateTime: new Date(Date.now),
        title: 'Proje Döngüsü Eğitimi',
        description:[
            'Bireysel veya kurumsal olarak başarılı bir proje teklifi hazırlamak ister misiniz? Proje hazırlama ve yönetme profesyonel bir iştir. Proje döngüsü ise üzerinde çalışılacak bir fikrin geliştirilmesinden, projelendirilmesine, uygun programların tespitinden, projenin uygulanarak sonuçlandırılmasına kadar geçen süre içindeki tüm aşamaları kapsamaktadır. Bu karmaşık süreçlerde zorlanmadan başarılı bir proje yapmak, başvurmak ve yönetmek için en büyük yardım ise, bu alanda çalışan profesyoneller tarafından düzenlenen eğitimlerden geçmektedir. Bu nedenle, eğer hibe başvurusunda işinizi şansa bırakmak istemiyorsanız atmanız gereken ilk adım iyi bir Proje Döngüsü Yönetimi (PCM) Eğitimi almaktır.',
            'Proje Döngüsü Yönetimi Eğitimi, iyi planlanmış ve başarılı bir proje süreci yaşamak üzere yola çıkmanın güvencesidir. Tüm döngü hakkında başlangıçta bilgi sahibi olmak, geleceği öngörerek proje hazırlamayı kolaylaştırır ve başarıyı artırır.',
            'Çeşitli hibe programlarına yönelik (AB tarafından finanse edilen H2020, COSME, Erasmus+, SMEinst, ERC, MarieCurie, Eureka, EuropeAid, IPA II projeleri, diğer uluslararası ve AB birlik programları, TÜBİTAK destekleri, Kalkınma Ajansı Projeleri, Vakıf Projeleri, STK projeleri) proje hazırlamayı düşünen bireyler ve kurum personellerine yönelik proje eğitimlerimiz üç modülden oluşmaktadır',
            'Proje Döngüsü Yönetimi Eğitimi, Hibe Programlarına Başvuru Eğitimi, Proje Uygulama Eğitimi olmak üzere 3 modülden oluşan eğitimlerimiz ile hiç tecrübeniz olmasa bile, doktora mezunu akademik danışmanlarımızın rehberliğinde en az master dereceli alanında uzman eğitmenlerimiz eşliğinde uygulamalı eğitimlerimize başvurabilirsiniz. Bu şekilde proje hazırlayabilecek düzeye gelerek Ar-Ge ve inovasyon alanında kurumsal kapasitesinizi artırabileceksiniz. Toplam 2 gün 12 saat süren eğitimlerimiz;',
            'EĞİTİM İÇERİĞİMİZ',
            'Proje Döngüsü Yönetimi Eğitimi (Project Cycle Management / PCM) Eğitimi- 6 Saat (3 Saat Teorik, 3 Saat Uygulama)',
            'Hibe Programlarına Başvuru Eğitimi- 3 Saat (1 Saat Teorik, 2 Saat Uygulama)',
            'Proje Uygulama Eğitimi 3 Saat (2 Saat Teorik, 1 Saat Uygulama) oluşmaktadır. Ayrıntılı bilgi için iletişime geçebilirsiniz.',
        ],
        image:'http://www.uygdanismanlik.com/wp-content/uploads/2021/02/egitim1.1-e1613588374293.png',
        tags:['kurumsal eğitim,eiğitim,danışmanlık','proje danışmanlığı','proje döngüsü'],
    },
    {
        type:'blog',
        id:4,
        createDateTime: new Date(Date.now),
        title: 'Kurumsal Eğitim Danışmanlığı',
        description: [
            'Kurumsal Eğitim Danışmanlığı Programımız “EĞİTİMDE SÜREKLİ İYİLEŞTİRME VE TOPLAM KALİTE YÖNETİMİ” prensibine dayanarak özel okullarımızda sistematik bir iyileştirme sürecini hedefler. Bu süreçler bir kurumun sürdürülebilir bir başarı elde edebilmesi için gerekli unsurları oluşturur.',
            'TOPLAM KALİTE YÖNETİMİ ile,',
            '- Organizasyonda yeterlilik',
            '- Uygun tasarım ',
            '- Yöntemlere uygunluk',
            '- Ekipman yeterliliği',
            '- Nitelikli personel seçimi',
            'gibi konularda hizmet kalitesini arttırmak için düzenlemeler yapılır. Bu düzenlemeler ile alanında uzman Endüstri Mühendislerimizin analizleri, alanında doktora derecesine sahip akademik danışmanlarımızın dünyada uygulanan yenilikçi eğitim yaklaşımlarını içeren tavsiyeleri ve başvuran kurumlarımızın istek ve hedefleri entegre edilecek şekilde danışmanlık hizmeti verilmektedir.'
        ],
        image:'http://www.uygdanismanlik.com/wp-content/uploads/2021/02/kurumsal1-e1613588511764.jpg',
        tags:['kurumsal eğitim,eiğitim,danışmanlık','proje danışmanlığı'],
    },
    {
        type:'blog',
        id:5,
        createDateTime: new Date(Date.now),
        title: 'Yurt İçi Eğitim Turları',
        description:[
            'Ülkemizin kültürel açıdan Dünyanın bir çok ülkesinden daha fazla zenginliğe sahiptir. Kültürel zenginliklerimizi uygulamalı olarak keşfetmek amacıyla, akademik danışmanlarımız rehberliğinde İzmir, İstanbul, Bursa, Manisa şehirlerimize Türkiye’nin her yerinden kültür ve eğitim turları düzenlemekteyiz.',
            'Katılacağınız bu gezilerde bilim, kültür, sanat, felsefe, folklor, sportif etkinlikler içeren atölyelere katılarak ülkemizin kültürel zenginliğini yakından tanıma fırsatına sahip olacaksınız.'
        ],
        image: 'http://www.uygdanismanlik.com/wp-content/uploads/2021/02/yurtici1.jpg',
        tags:['yurt içi eğitim,eiğitim,yurt içi turları'],
    },
    {
        type:'blog',
        id:6,
        createDateTime: new Date(Date.now),
        title: 'Yurt Dışı Eğitim Turları',
        description: [
            'Dünyanın en iyi eğitim sistemlerine sahip ülkelerdeki eğitim kurumlarını en az doktora derecesine sahip akademik danışmanlarımızın rehberliğinde ziyaret edecek, o ülkelerde yürütülen eğitim çalışmalarını yerinde etüt etme imkanına sahip olacaksınız. Bireysel ve kurumsal kapasitenizi artırmaya yönelik düzenlenen turlarımıza katılmak için irtibata geçebilirsiniz.'
        ],
        image:'http://www.uygdanismanlik.com/wp-content/uploads/2021/02/Yurtdisi.jpg',
        tags:['yurt dışı eğitim,eiğitim,yurt dışı turları'],
    },
    {
        type:'activities',
        id:1,
        title:'COVID-19 Pandemisi Sürecinde Bireysel Eğitim Danışmanlığı',
        description:[
            'Dünya’yı etkisi altına alan COVID-19 pandemisi ekonomi, sosyal yaşam, iş dünyası ile beraber eğitim alanında da köklü değişimlerin gerçekleşeceğini göstermektedir. Özellikle son yıllarda 21. Yüzyıl becerileri içerisinde anılan dijital okur- yazarlık kavramı ön plana çıkmaktadır. Bu kavram bilgiye erişim noktasında internet platformları, sosyal medya, dijital teknolojilerin öğrenme ve öğretme alanında kullanılması sırasında gereken becerileri ifade etmektedir. Pandemi sürecinde ise bu beceriler daha büyük bir önem kazanmıştır. Ancak uygulama süreçlerine bakıldığında eğitimde dijital platformların ani ve hızlı bir şekilde kullanılma zorunluluğu ortaya çıkmıştır.',
            'Öğrenciler, veliler ve öğretmenler bu sürece uyum sağlamak için büyük çaba göstermektedirler. Ancak bu süreç sadece dijital araçların kullanılmasıyla efektif bir şekilde yürütülememektedir. Bu açıdan pandemi sürecinde bireysel eğitim danışmanlığı gerektiği ortaya çıkmaktadır. Öğrenciler, veliler ve öğretmenler bu sürece uyum sağlamak için büyük çaba göstermektedirler. Ancak bu süreç sadece dijital araçların kullanılmasıyla efektif bir şekilde yürütülememektedir. Bu açıdan pandemi sürecinde bireysel eğitim danışmanlığı gerektiği ortaya çıkmaktadır.',
            'Danışmanlık sürecinde en az doktora seviyesine sahip profesyonel akademik danışmanlarımız öğrenci ve velilerimizin pandemi sürecinde ihtiyaç duydukları alanda yönlendirme yapmaktadır. Bu süreçte kişisel gelişim, akademik gelişim ve ruhsal gelişim odaklı yürütülen çalışmalar kapsamında bire-bir ders takviyesi, ödev takibi, kişisel gelişim süreç takibi ve yönlendirmesi, çalışma programı oluşturma çalışmaları yürütülmektedir. Ayrıntılı bilgi için bizimle iletişime geçebilirsiniz.',
        ],
        tags:['danışmanlık,eiğitim,pandemi'],
        image:'images/activities/activities1.webp',
        url:'/activities/activity1'
    },
    {
        type:'activities',
        id:2,
        title:'UYG Danışmanlık Hizmetleri olarak online eğitimlerimiz devam ediyor',
        description: [
            'Erdem, Hak, İlke ve Liyakat Derneği (EHİL-DER) üyelerine yönelik Proje Döngüsü Eğitimini (PDE) COVID-19 pandemisi nedeniyle online olarak gerçekleştirildik. Eğitim süresinde aktif katılım sağlayan dernek üyeleri, A.B.D Büyükelçiliği Hibe Programına (The U.S. Embassy Grants Programme) “Dezavantajlı Gruplarda İnovatif Girişimcilik Becerilerinin Geliştirilmesi” adlı proje ile başvuru gerçekleştirmişledir. UYG Danışmanlık ailesi olarak derneğimizi tebrik eder, başka eğitimlerde buluşmak dileğiyle göstermiş oldukları ilgi ve alakalarından dolayı teşekkür ederiz.'
        ],
        image:'/images/activities/activities2.webp',
        url:'/activities/activity2'

    },
    {
        type:'activities',
        id:3,
        title:'Horizon Europe Programına Yönelik Proje Hazırlama Eğitimi Programı',
        description:[
            'UYG Danışmanlık Hizmetleri olarak, Avrupa\'nın en büyük araştırma ve inovasyon programı olan Horizon Europe\'a yönelik proje hazırlama eğitimimizi başarıyla gerçekleştirdik. Bu eğitim, özellikle üniversiteler, araştırma merkezleri ve teknoloji şirketleri gibi kurumların araştırmacılarına ve proje yöneticilerine yöneliktir. Program kapsamında, proje çağrılarına uygun tekliflerin nasıl hazırlanacağı, projelerin nasıl yönetileceği ve başvuru süreçlerinde dikkat edilmesi gereken önemli noktalar detaylı bir şekilde işlenmektedir. Eğitim süresince, katılımcıların interaktif çalışmalarla bilgi ve deneyimlerini artırmaları hedeflenmektedir. Horizon Europe\'a başvuru yapmayı planlayan tüm araştırmacıları ve ilgili profesyonelleri, bu kapsamlı eğitim programımıza katılmaya davet ediyoruz. UYG Danışmanlık olarak, katılımcıların uluslararası arenada rekabet edebilir projeler geliştirmelerine destek olmaktan gurur duyarız. Eğitimlerimizde buluşmak üzere!'
        ],
        image:'/images/activities/activities3.webp',
        url:'/activities/activity3'

    },
    {
        type:'activities',
        id:4,
        title:'AB Fonları ve Devlet Destekleri için Proje Yazma Eğitimi',
        description:[
            'UYG Danışmanlık Hizmetleri olarak, Uşak İl Kültür ve Turizm Müdürlüğü (@usak.kulturturizm) ve TC Zafer Kalkınma Ajansı (@zaferkatr33) iş birliğiyle düzenlediğimiz "AB Fonları ve Devlet Destekleri için Proje Yazma Eğitimi" programımız başarıyla tamamlandı. Bu eğitim, Avrupa Birliği fonlarına ve Türkiye\'deki devlet desteklerine başvurmak isteyen kurumlar, STK\'lar ve girişimciler için özel olarak tasarlanmıştır. Eğitim içeriğinde, fonlara nasıl erişileceği, projelerin nasıl planlanıp yazılacağı ve başvuru süreçlerinde izlenmesi gereken adımlar ayrıntılı bir şekilde ele alınmaktadır. Katılımcılar, eğitim sonunda AB ve devlet destekleri konusunda bilgi sahibi olmanın yanı sıra, etkili proje teklifleri hazırlama konusunda da yetkinlik kazandılar. Projelerinizin başarıya ulaşması için gerekli tüm bilgi ve desteği sağlamak amacıyla düzenlenen bu eğitime katılımınızı sabırsızlıkla bekliyoruz. Başarılı projelerde buluşmak dileğiyle!'
        ],
        image:'/images/activities/activities4.webp',
        url:'/activities/activity4'

    }

]