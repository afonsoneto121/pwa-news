var myHeaders = new Headers();
myHeaders.append("Authorization", `Bearer ${process.env.REACT_APP_API_KEY}`);

const params = {
    headers: myHeaders,
};
const URL = "https://newsapi.org/v2/";
const END_POINTS = {
    EVERYTHING: 'everything',
    TOP_HEADLINE: 'top-headlines'
}
const getNews = (subject) => {
    return fetch(`${URL}${END_POINTS.TOP_HEADLINE}?country=us&category=${subject}`,params)
        .then(response => response.json())
        .catch(err => {
            console.error('Ocorreu um erro',err);
        })
}

const searchNews = (searchStr) => {
    return fetch(`${URL}${END_POINTS.TOP_HEADLINE}?country=us&q=${searchStr}`,params)
        .then(response => response.json())
        .catch(err => {
            console.error('Ocorreu um erro',err);
        })
}

const mockAPI = Promise.resolve({
    "status": "ok",
    "totalResults": 1000,
    "articles": [
        {
            "source": {
                "id": "the-verge",
                "name": "The Verge"
            },
            "author": "Sam Byford",
            "title": "Densha de Go! train controller review: it’s awesome - The Verge",
            "description": "This month sees the first new console controller for Taito’s train-driving series Densha de Go! in 14 years. Zuiki has released a model designed to work with Densha de Go! Hashirou Yamanote-sen for the Nintendo Switch.",
            "url": "https://www.theverge.com/22628513/densha-de-go-switch-controller-review-hashirou-yamanote-sen",
            "urlToImage": "https://cdn.vox-cdn.com/thumbor/uqorMYk9zQAWenG2Sao5absn83c=/0x146:2040x1214/fit-in/1200x630/cdn.vox-cdn.com/uploads/chorus_asset/file/22787288/DSCF7743.jpg",
            "publishedAt": "2021-08-17T14:30:00Z",
            "content": "The Nintendo Switch gets the first new model in 14 years\r\nImagine if you were really into a video game series, but no one released a controller that let you play it properly for 14 years. Unfortunate… [+5785 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "NME"
            },
            "author": null,
            "title": "‘Mortal Shell’ debuts on Steam with free ‘The Virtuous Cycle’ DLC - NME",
            "description": "After a year of exclusivity on the Epic Games store, gothic action-adventure Mortal Shell is seeing its PC availability extended to Steam and GOG.",
            "url": "https://www.nme.com/news/gaming-news/mortal-shell-debuts-on-steam-with-free-the-virtuous-cycle-dlc-3021309",
            "urlToImage": "https://www.nme.com/wp-content/uploads/2020/08/082520-Mortal-Shell-Cold-Symmetry-Image6.jpg",
            "publishedAt": "2021-08-17T14:25:11Z",
            "content": "After a year of exclusivity on the Epic Games store, gothic action-adventure Mortal Shell is seeing its PC availability extended to Steam and GOG, and to celebrate, developer Cold Symmetry is making … [+1580 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "GamesRadar+"
            },
            "author": "Hirun Cryer",
            "title": "Star Wars Jedi: Fallen Order and Battlefront 2 come to mobile via Xbox Game Pass - Gamesradar",
            "description": "There's a slate of standout games coming to Xbox Game Pass later this week",
            "url": "https://www.gamesradar.com/star-wars-jedi-fallen-order-and-battlefront-2-come-to-mobile-via-xbox-game-pass/",
            "urlToImage": "https://cdn.mos.cms.futurecdn.net/AFhiaZepdePf4XQBPsZS85-1200-80.jpg",
            "publishedAt": "2021-08-17T14:22:30Z",
            "content": "Star Wars Jedi: Fallen Order is available on mobile devices through Xbox Game Pass right now.\r\nJust below, the official Xbox Game Pass published a brand new list of new and forthcoming additions to t… [+2228 chars]"
        },
        {
            "source": {
                "id": "google-news",
                "name": "Google News"
            },
            "author": null,
            "title": "Twelve Minutes Trailer Welcomes Daisy Ridley, James McAvoy to a Time-Twisted Murder Mystery - CBR - Comic Book Resources",
            "description": null,
            "url": "https://news.google.com/__i/rss/rd/articles/CBMiTGh0dHBzOi8vd3d3LmNici5jb20vdHdlbHZlLW1pbnV0ZXMtZGFpc3ktcmlkbGV5LWphbWVzLW1jYXZveS1sYXVuY2gtdHJhaWxlci_SAVBodHRwczovL3d3dy5jYnIuY29tL3R3ZWx2ZS1taW51dGVzLWRhaXN5LXJpZGxleS1qYW1lcy1tY2F2b3ktbGF1bmNoLXRyYWlsZXIvYW1wLw?oc=5",
            "urlToImage": null,
            "publishedAt": "2021-08-17T14:18:09Z",
            "content": null
        },
        {
            "source": {
                "id": null,
                "name": "Frandroid"
            },
            "author": "Romain Ribout",
            "title": "Lenovo IdeaPad Duet : la tablette hybride sous ChromeOS passe de 349 à 269 euros - Frandroid",
            "description": "Le Lenovo IdeaPad Duet est une tablette hybride qui rassemble dans un seul produit la praticité du format ardoise avec la simplicité d'utilisation d'un Chromebook. Le prix initial de 349 euros n'est pas très élevé pour l'expérience apportée, mais il devient a…",
            "url": "https://www.frandroid.com/bons-plans/1030681_lenovo-ideapad-duet-la-tablette-hybride-sous-chromeos-passe-de-349-a-269-euros",
            "urlToImage": "https://images.frandroid.com/wp-content/uploads/2020/06/lenovo-ideapad-duet-frandroiddsc00929-scaled.jpg",
            "publishedAt": "2021-08-17T13:50:31Z",
            "content": "Le Lenovo IdeaPad Duet est une tablette hybride qui rassemble dans un seul produit la praticité du format ardoise avec la simplicité d'utilisation d'un Chromebook. Le prix initial de 349 euros n'est … [+3284 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "SaltWire Network"
            },
            "author": "Reuters Inc.",
            "title": "Russia fines Google for not deleting banned content | Saltwire - SaltWire Network",
            "description": "MOSCOW (Reuters) -     A Moscow court on Tuesday fined Alphabet Inc's Google 4 million roubles ($54,444) for violating Russian rules on banned content.\n\n\n The penalty comes amid a wider stand-off between Russia and so-called Big Tech, with Moscow",
            "url": "https://www.saltwire.com/nova-scotia/business/russia-fines-google-for-not-deleting-banned-content-100624437/",
            "urlToImage": "https://saltwire.imgix.net/2021/8/17/russia-fines-google-for-not-deleting-banned-content.jpg?cs=srgb&w=1200&h=630&fit=crop&auto=enhance%2Cformat%2Ccompress",
            "publishedAt": "2021-08-17T13:37:19Z",
            "content": "MOSCOW (Reuters) - A Moscow court on Tuesday fined Alphabet Inc's Google 4 million roubles ($54,444) for violating Russian rules on banned content. \r\nThe penalty comes amid a wider stand-off between … [+333 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "It.dir.bg"
            },
            "author": "Стоян Гогов",
            "title": "Microsoft разработи система за борба с пиратско съдържание - IT.dir.bg",
            "description": "Argus може да работи с изображения, аудио или програми",
            "url": "https://it.dir.bg/tehnologii/microsoft-razraboti-sistema-za-borba-s-piratsko-sadarzhanie",
            "urlToImage": "https://static.dir.bg/uploads/images/2021/07/19/2230105/768x432.jpg?_=1626704310",
            "publishedAt": "2021-08-17T13:37:16Z",
            "content": ", Ethereum, Microsoft. , , , technews.bg.\r\n Microsoft, Alibaba . Argus. , .\r\nArgus . .\r\n : , . Argus ."
        },
        {
            "source": {
                "id": null,
                "name": "Ahram.org.eg"
            },
            "author": null,
            "title": "أوائل الثانوية العامة.. والدة «رحمة» علمي علوم بـ 402 درجة: حققت حلم أبيها واعتمدت على منصات الإنترنت - بوابة الأهرام",
            "description": "",
            "url": "https://gate.ahram.org.eg/News/2897035.aspx",
            "urlToImage": "https://gate.ahram.org.eg/Media/News/2021/8/17/19_2021-637648104732681116-268.jpg",
            "publishedAt": "2021-08-17T13:29:00Z",
            "content": null
        },
        {
            "source": {
                "id": null,
                "name": "Xboxygen"
            },
            "author": "la Rédaction",
            "title": "Xbox Game Pass et Cloud Gaming : 10 nouveaux jeux tactiles (liste complète) - Xboxygen",
            "description": "Suite à l'ajout de nouveaux jeux pour le Xbox Game Pass en juillet, Microsoft a également rendu éligibles de nouveaux jeux avec des contrôles tactiles sur mobile. (...)",
            "url": "https://www.xboxygen.com/News/36346-Xbox-Game-Pass-et-Cloud-Gaming-10-nouveaux-jeux-tactiles-liste-complete",
            "urlToImage": "https://www.xboxygen.com/IMG/jpg/xbox_game_pass-touch-controls.jpg",
            "publishedAt": "2021-08-17T13:22:00Z",
            "content": "Suite à l’ajout de nouveaux jeux pour le Xbox Game Pass en juillet, Microsoft a également rendu éligibles de nouveaux jeux avec des contrôles tactiles sur mobile. Nous en avons profité pour en faire … [+6168 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Akhbarkalaan.com"
            },
            "author": null,
            "title": "أسرع طريقة تحميل لعبة ماين كرافت Minecraft الأصلية على الكمبيوتر والأندرويد - أخبارك الآن",
            "description": "تحميل لعبه ماين كرافت هو ما يبحث عنه الكثير من محبين الألعاب الإلكترونية التي تتيح لكل لاعب الفرصة في التنافس مع أصدقائه والعيش في الأجواء التشويقية",
            "url": "https://www.akhbarkalaan.com/95041/أسرع-طريقة-تحميل-لعبة-ماين-كرافت/",
            "urlToImage": "https://www.akhbarkalaan.com/wp-content/uploads/2021/08/ماين-2.jpg",
            "publishedAt": "2021-08-17T13:15:53Z",
            "content": null
        },
        {
            "source": {
                "id": "google-news",
                "name": "Google News"
            },
            "author": null,
            "title": "Samsung Galaxy Z Fold 3 vs. Galaxy Z Fold 2: What's the Difference? - MUO - MakeUseOf",
            "description": null,
            "url": "https://news.google.com/__i/rss/rd/articles/CBMiUGh0dHBzOi8vd3d3Lm1ha2V1c2VvZi5jb20vc2Ftc3VuZy1nYWxheHktei1mb2xkLTMtdnMtZ2FsYXh5LXotZm9sZC0yLWRpZmZlcmVuY2Uv0gEA?oc=5",
            "urlToImage": null,
            "publishedAt": "2021-08-17T13:15:00Z",
            "content": null
        },
        {
            "source": {
                "id": null,
                "name": "Univers Freebox"
            },
            "author": null,
            "title": "Free Mobile baisse de façon importante, mais temporaire, le prix des différentes versions d’iPhone 12 et 12 mini - Univers Freebox",
            "description": "L’opérateur de Xavier Niel applique plusieurs baisses de prix sur les smartphones Apple les plus récents disponibles dans sa boutique en ligne. Deux modèles sont concernés. Free propose une promo temporaire sue tous les modèles d’iPhone 12 et 12 mini, que ce …",
            "url": "https://www.universfreebox.com/article/62035/free-mobile-baisse-de-facon-importante-mais-temporaire-le-prix-des-differentes-version-diphone-12-et-12-mini",
            "urlToImage": "https://www.universfreebox.com/wp-content/uploads/2021/08/free-illustration12.jpg",
            "publishedAt": "2021-08-17T13:08:10Z",
            "content": "Lopérateur de Xavier Niel applique plusieurs baisses de prix sur les smartphones Apple les plus récents disponibles dans sa boutique en ligne. Deux modèles sont concernés.\r\nFree propose une promo tem… [+3483 chars]"
        },
        {
            "source": {
                "id": "the-verge",
                "name": "The Verge"
            },
            "author": "Cameron Faulkner",
            "title": "Cyberpunk 2077 for consoles is just $10 today at Best Buy - The Verge",
            "description": "If you’ve been waiting for Cyberpunk 2077 to drop to just $10 for Xbox One, Series X and S, or for PS4 and PS5, check out Best Buy’s sale on the game. Also, Nvidia’s Shield TV and Amazon’s Kindle Paperwhite are discounted.",
            "url": "https://www.theverge.com/good-deals/2021/8/17/22628577/cyberpunk-2077-xbox-playstation-nvidia-shield-tv-amazon-kindle-deal-sale",
            "urlToImage": "https://cdn.vox-cdn.com/thumbor/mf-ReyvG10ix8ksLDkz92if9yTA=/0x0:1920x1005/fit-in/1200x630/cdn.vox-cdn.com/uploads/chorus_asset/file/22462315/Cyberpunk2077_Im_your_fixer_RGB_en.jpeg",
            "publishedAt": "2021-08-17T13:08:07Z",
            "content": "CD Projekt Reds latest game is in the bargain bin\r\nIf you buy something from a Verge link, Vox Media may earn a commission. See our ethics statement.\r\nI always think this guy looks like Ed Helms.\r\nIm… [+2687 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Clubic"
            },
            "author": "Paul Taquet",
            "title": "Déjà convaincant, le Huawei MateBook D16 l'est encore plus avec cette promotion juste avant la rentrée - Clubic",
            "description": "Voici une belle affaire pour celles et ceux qui recherchent le MateBook D16 en promotion ! En ce moment, le PC portable de la marque Huawei bénéficie d'une réduction de 100 euros chez Amazon.",
            "url": "https://www.clubic.com/bons-plans/amazon/bons-plans-380903-deja-convaincant-le-huawei-matebook-d16-l-est-encore-plus-avec-cette-promotion-juste-avant-la-rentree.html",
            "urlToImage": "https://pic.clubic.com/v1/images/1908125/raw?width=900&height=600&fit=max&hash=e47c0361ef617ebbe391866729d228dc87224b2b",
            "publishedAt": "2021-08-17T13:07:00Z",
            "content": "Dévoilé en même temps que les modèles D14 et D15\r\n en avril 2021, le Huawei MateBook D16 est un PC portable qui dispose d'un écran FullView de 16,1 pouces avec une résolution de 1920 x 1080 pixels, u… [+622 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "jeuxvideo.com"
            },
            "author": "Matt_Clank",
            "title": "La Smart TV OLED 4K UHD Philips 48 pouces à prix cassé - jeuxvideo.com",
            "description": "Une belle Smart TV, surtout en 4K, ça vous change de vos écrans habituels ! Et la Philips 48 pouces OLED est actuellement en réduction chez la Fnac qui la propose avec un rabais de -24% ! Promotion Smart TV : l’écran Philips 4K UHD en réduction chez la Fnac C…",
            "url": "https://www.jeuxvideo.com/news/1449226/la-smart-tv-oled-4k-uhd-philips-48-pouces-a-prix-casse.htm",
            "urlToImage": "https://image.jeuxvideo.com/medias-md/162920/1629199052-8709-card.png",
            "publishedAt": "2021-08-17T13:05:02Z",
            "content": "Une belle Smart TV, surtout en 4K, ça vous change de vos écrans habituels ! Et la Philips 48 pouces OLED est actuellement en réduction chez la Fnac qui la propose avec un rabais de -24% ! Ce télévise… [+2147 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "PCMag.com"
            },
            "author": "Michael Muchmore",
            "title": "Adobe Launches Photoshop Beta Program - PCMag AU",
            "description": "Also, Photoshop for iPad gets the beloved Healing Brush and Magic Wand tools, Sky Replacement and Transform Warp tools see big improvements on the desktop, and a new Discover panel boosts productivity.",
            "url": "https://au.pcmag.com/photo-editing/88861/adobe-launches-photoshop-beta-program",
            "urlToImage": "https://sm.pcmag.com/t/pcmag_au/news/a/adobe-laun/adobe-launches-photoshop-beta-program_t454.1200.jpg",
            "publishedAt": "2021-08-17T13:00:00Z",
            "content": "Adobe is debuting a beta testing program for its flagship Photoshop image-editing software for Creative Cloud subscribers. The company also announced updates to Photoshop on desktop as well as the iP… [+2690 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Cnbeta.com"
            },
            "author": "cnBeta",
            "title": "iQOO 8系列发布：骁龙888Plus+首发E5屏幕售价3799元起- 手机 - cnBeta",
            "description": "8月17日消息，今天iQOO发布了最新旗舰机iQOO8系列。此次iQOO带来了iQOO8和iQOO8Pro两款手机；搭载骁龙888PIus＋首发E5屏幕，售价3799元起。据介绍，iQOO8系列采用了微膜凝光AG工艺，能够实现光致变色，有耀和燃、传奇版两种配色；iQOO8Pro则提供了传奇版、赛道版两种配色，其中传奇版是砂岩手感，触感细腻；赛道版采用碳纤维纹理。",
            "url": "https://www.cnbeta.com/articles/tech/1167349.htm",
            "urlToImage": "https://static.cnbetacdn.com/article/2021/0817/f788b802a547d02.jpg",
            "publishedAt": "2021-08-17T12:53:00Z",
            "content": "iQOO 8 Pro2K E510bit15008001LTPO1Hz120HzDisplayMate 14A+\r\niQOO 8 Pro3D11.138.7%\r\niQOO 8 Pro888+LPDDR5UFS 3.1iQOO 2.012GB 16GB\r\niQOO 8 Pro4500mah120W50W10W\r\niQOO 8X2.0iQOO 8KPL\r\niQOO 8 Pro5000+4800+16… [+131 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Mydrivers.com"
            },
            "author": null,
            "title": "RISC-V领军企业赛昉科技完成A+轮融资：累计超10亿 - 驱动之家",
            "description": "上海赛昉科技有限公司（简称&ldquo;赛昉科技&rdquo;）宣布近日完成A+轮融资，本轮融资由深圳市国科瑞华三期股权投资基金合伙企业（简称国科瑞华）、中国互联网投资基金（简称中网投）领投。A+",
            "url": "https://news.mydrivers.com/1/776/776993.htm",
            "urlToImage": "https://img1.mydrivers.com/img/20210817/d7657f893a0d45139ec01c0d65d19ebf.jpg",
            "publishedAt": "2021-08-17T12:52:00Z",
            "content": null
        },
        {
            "source": {
                "id": null,
                "name": "Letemsvetemapplem.eu"
            },
            "author": null,
            "title": "Applu uniklo schéma Apple Watch Series 7! Takto budou vypadat - Letem světem Applem",
            "description": "Vzhled Apple Watch Series 7 už není žádným tajemstvím. Po celé řadě nejrůznějších úniků informací a renderů se totiž před malou chvílí objevilo i oficiální schéma...",
            "url": "https://www.letemsvetemapplem.eu/2021/08/17/applu-uniklo-schema-apple-watch-series-7-takto-budou-vypadat/",
            "urlToImage": "https://www.letemsvetemapplem.eu/wp-content/uploads/2021/08/Apple-Watch-Series-7-1.jpeg",
            "publishedAt": "2021-08-17T12:50:45Z",
            "content": "Vzhled Apple Watch Series 7 u není ádným tajemstvím. Po celé ad nejrznjích únik informací a render se toti ped malou chvílí objevilo i oficiální schéma tchto hodinek uniklé od pedního dodavatele Appl… [+1433 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Investing.com"
            },
            "author": "Investing.com",
            "title": "Ventas minoristas, Walmart, China y ataque a tecnológicas: 5 claves en Wall Street Por Investing.com - Investing.com España",
            "description": "Ventas minoristas, Walmart, China y ataque a tecnológicas: 5 claves en Wall Street",
            "url": "https://es.investing.com/news/economy/ventas-minoristas-walmart-china-y-ataque-a-tecnologicas-5-claves-en-wall-street-2151228",
            "urlToImage": "https://i-invdn-com.investing.com/news/LYNXMPED0H13H_L.jpg",
            "publishedAt": "2021-08-17T12:50:00Z",
            "content": "Por Geoffrey Smith\r\nPor Investing.com - Los datos de las ventas minoristas y de la producción industrial de Estados Unidos correspondientes al mes de julio y las ganancias de Walmart (NYSE:WMT) y Hom… [+4968 chars]"
        }
    ]
})

export default {
    getNews,
    searchNews,
    mockAPI
}