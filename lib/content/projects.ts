import type { CategoryId, Project, ProjectCard, ProjectImage, ServiceId } from "@/lib/content/types"

function img(file: string, alt: string, width: number, height: number): ProjectImage {
  return { src: `/media/${file}`, alt, width, height }
}

export const projects: Project[] = [
  {
    slug: "fredheim-kongsberg-kulturskole",
    title: "Fredheim – Kongsberg kulturskole",
    category: "offentlig-uterom",
    client: "AG Entreprenør AS",
    location: "Fredheim, Kongsberg kommune",
    type: "Endring av områdereguleringsplan og prosjektering",
    year: "2023",
    featured: true,
    services: ["landskap", "areal"],
    summary:
      "Endring av områdereguleringsplan for å sikre verneverdig arkitektur, og detaljprosjektering av utearealene.",
    body: [
      "Prosjektet har bestått av endring av områdereguleringsplan for å sikre verneverdig arkitektur og tilhørende utearealer. Utearealene er også detaljprosjektert.",
      "Overvann, belysning, vegetasjon og materialbruk er hensyntatt i detaljeringen.",
    ],
    images: [
      img(
        "2fe8cb56f5a946a4bb8311f15ac2433c.jpg",
        "Fredheim, Kongsberg kulturskole: eksisterende situasjon og forslag til uteareal",
        1262,
        848
      ),
      img(
        "fc4aaea5682c4357af141337e53debba.png",
        "Gatesituasjon ved Kongsberg kulturskole",
        1232,
        828
      ),
      img("951e46ec022c4071b61407f114300676.jpg", "Fredheim, Kongsberg kulturskole", 1262, 848),
      img("7b6658e2868f4e11ba34eda982af43e9.jpg", "Uteareal ved Fredheim", 1527, 688),
    ],
  },
  {
    slug: "sentrumsgate-rodberg",
    title: "Sentrumsgate og kommunehus, Rødberg",
    category: "offentlig-uterom",
    client: "Nore og Uvdal kommune",
    location: "Rødberg, Nore og Uvdal kommune",
    type: "Detaljprosjektering",
    year: "2023",
    services: ["landskap"],
    summary:
      "Detaljering av deler av sentrumsgaten og arealet foran kommunehuset, med sitteplasser, trapp og beplantning.",
    body: [
      "Plan og Ressurs har bistått Nore og Uvdal kommune med å detaljere deler av sentrumsgaten og området foran kommunehuset.",
      "Material- og plantebeskrivelse er vektlagt. Utearealet har fått integrerte sitteplasser, trapp og soner med beplantning.",
    ],
    images: [
      img("156c535fe0164c96a30f8037be84b1dc.jpg", "Sentrumsgate og kommunehus, Rødberg", 4624, 2084),
      img("10194e2947b6467e97319d0733243002.jpg", "Detalj fra sentrumsgaten i Rødberg", 4000, 1800),
      img("38efdfdffd454dbd9b96108c55deb393.jpg", "Uteareal foran kommunehuset i Rødberg", 4000, 1800),
    ],
  },
  {
    slug: "skredsvikmoen-barnehage",
    title: "Skredsvikmoen barnehage",
    category: "offentlig-uterom",
    client: "Betonmast Asker og Bærum",
    location: "Geithus, Modum kommune",
    type: "Detaljprosjektering og detaljregulering",
    year: "2019",
    services: ["landskap", "areal"],
    summary:
      "Prosjektering av uteareal, veg og parkering for Modum kommunes største barnehage, med innledende regulering.",
    body: [
      "Plan og Ressurs har prosjektert utearealene i Modum kommunes største barnehage, inkludert veg- og parkeringsarealer. Lokalisering av bygningen ble funnet i samråd med arkitekt.",
      "I prosjektet inngår også en innledende detaljregulering med konsekvensutredning, inkludert planlegging av 15 eneboligtomter.",
    ],
    images: [
      img(
        "89397bb7c4d74fc990c2f2d3ae3df026.jpg",
        "Modell av uteareal, adkomst og parkering ved Skredsvikmoen barnehage",
        1424,
        751
      ),
      img("c6164952921143f787388f9c102e08e1.jpg", "Skredsvikmoen barnehage", 1736, 592),
      img("6aef7c9db14d4afeb0aef089d573e9de.png", "Uteareal ved Skredsvikmoen barnehage", 992, 603),
    ],
  },
  {
    slug: "rodberg-skole",
    title: "Rødberg skole",
    category: "offentlig-uterom",
    client: "Nore og Uvdal kommune",
    location: "Rødberg, Nore og Uvdal kommune",
    type: "Detaljprosjektering",
    year: "2019",
    services: ["landskap"],
    summary: "Nye leke- og uteoppholdsarealer, med sittegrupper og pergola.",
    body: [
      "Arbeidet har bestått av detaljprosjektering av nye leke- og uteoppholdsarealer.",
      "Plan og Ressurs hadde også ansvaret for nye soner for sittegrupper og pergola med takoverbygg.",
    ],
    images: [
      img("32113f7dc82248258fcf7fac8bba982f.png", "Rødberg skole", 601, 847),
      img("1e3908d2f4e8479681c59ed4dedf0685.png", "Uteareal ved Rødberg skole", 980, 726),
      img("9482bd86446441d9ab450df58dc9ceec.png", "Lek og opphold ved Rødberg skole", 531, 281),
    ],
  },
  {
    slug: "kinsarvik-barnehage",
    title: "Kinsarvik barnehage",
    category: "offentlig-uterom",
    client: "Ullensvang kommune",
    location: "Kinsarvik, Ullensvang kommune",
    type: "Detaljprosjektering",
    year: "2015",
    services: ["landskap"],
    summary: "Landskapsarkitektur for ny barnehage, med lekeområder tilpasset skogsterrenget.",
    body: [
      "Landskapsarkitekttjenester tilknyttet ny barnehage i Kinsarvik.",
      "Detaljprosjekteringen la vekt på at lekeområdene ble tilpasset omgivelsene, og på bruk av skogsterrenget.",
    ],
    images: [
      img("9b7ffeee1fd44e00a5472cc2e0478406.png", "Kinsarvik barnehage", 652, 423),
      img("2a5d4ff011824f9a811296b04d2cbe83.png", "Lekeareal i skogsterreng, Kinsarvik", 832, 562),
    ],
  },
  {
    slug: "gluggelokka-boliger",
    title: "Gluggeløkka boliger",
    category: "boliger",
    client: "Trysilhus Areal AS",
    location: "Gluggeløkka / Steglet, Kongsberg kommune",
    type: "Detaljregulering",
    year: "2023",
    featured: true,
    services: ["eiendom", "areal", "landskap"],
    summary:
      "Nytt boligområde med 118 boenheter: blokkleiligheter og konsentrert småhusbebyggelse ved Numedalslågen.",
    body: [
      "Hovedformålet var å planlegge et nytt boligområde med konsentrert småhusbebyggelse og mindre blokkbebyggelse for Trysilhus Areal AS, på eiendom gnr. 7398, bnr. 1. Reguleringsplanen åpnet for totalt 118 boenheter: 48 blokkleiligheter fordelt på 4 etasjer og 70 leiligheter i konsentrert småhusbebyggelse.",
      "I planarbeidet ble det lagt til rette for uterom, leke- og grøntarealer, og bevaring av deler av kulturhistorien på området. Nærturer er koblet til eksisterende stier langs Numedalslågen og de nærmeste boligområdene.",
      "Trafikksikker forbindelse til veger og gangarealer har vært et viktig tema, inkludert nytt fortau til nærmeste bussholdeplass og gangforbindelser til Granbakken i nord og Veungsdalen i sør.",
    ],
    images: [
      img(
        "301746fd23a44b128798159cb0c66d26.png",
        "Gluggeløkka sett mot Numedalslågen, med blokker og småhus",
        1012,
        565
      ),
      img(
        "fb1209cf242443d0b9395c588f7cce56.jpg",
        "Gatemiljø med småhus og gangveier på Gluggeløkka",
        1452,
        720
      ),
      img(
        "2b11a62e4d3e42799e97c3016a8c4848.jpg",
        "Volumstudie av småhus og et felles byrom",
        1441,
        720
      ),
      img(
        "c617977321a0427d8f5b577ba710554e.png",
        "Plan og snitt for boligbebyggelse",
        1480,
        715
      ),
    ],
  },
  {
    slug: "bk-banen",
    title: "BK-banen",
    category: "boliger",
    client: "PK Hus AS",
    location: "BK-banen / Raumyr, Kongsberg kommune",
    type: "Konseptutvikling og detaljregulering",
    year: "2026",
    featured: true,
    services: ["eiendom", "areal", "landskap"],
    summary:
      "Ny boligbebyggelse med inntil 254 boenheter, tjenesteyting og lokalnæring, og et grønt gatemiljø.",
    body: [
      "Hovedformålet er å etablere ny boligbebyggelse for konsentrert småhusbebyggelse og blokkbebyggelse for PK Hus AS, hjemmelshaver på eiendommene gnr./bnr. 8062/10 og 8062/19. Illustrasjonsplanen viser opptil 254 boenheter.",
      "Planen legger også opp til offentlig og privat tjenesteyting, og lokalnæring på deler av arealet. Deler av tilgrensende eiendommer, leke- og friområder og vegarealer er med i planarbeidet.",
      "Bestemmelsene skal sikre gode uterom og grønnstruktur, med blågrønne løsninger. Grønt gatemiljø og uteoppholdsarealer ved Withs gate og Olavs gate er vektlagt, og kantparkering i Withs gate får parktrær. Dagens lekeplass i planområdets sørlige hjørne oppgraderes. Gang- og sykkelveger og fortau reguleres rundt kvartalet.",
    ],
    images: [
      img(
        "ba538b7cee884df4b03d6b44b6bc6435.png",
        "Gårdsrom med lek mellom boligblokkene på BK-banen",
        1601,
        892
      ),
      img(
        "24642679a11048b99fb5a1bbd536de73.jpg",
        "Boligkvartal med grønne tak og felles uteareal",
        1452,
        720
      ),
      img(
        "b0a2d93d828b4253ac8e399790009ff9.jpg",
        "Tremodell av boliger, lek og trerekker",
        1441,
        720
      ),
      img("8189bc8ec48249edac7dac094d92c5b6.png", "BK-banen, illustrasjon", 1583, 907),
      img("494b4e4a99be4a639cac318223d5ae81.png", "BK-banen, uterom", 1607, 902),
    ],
  },
  {
    slug: "skogenberget",
    title: "Skogenberget",
    category: "boliger",
    client: "Nore og Uvdal kommune",
    location: "Rødberg, Nore og Uvdal kommune",
    type: "Detaljregulering",
    year: "2018",
    services: ["areal", "eiendom"],
    summary:
      "Omsorgsboliger, konsentrert småhusbebyggelse og noe sentrumsbebyggelse, med universell utforming.",
    body: [
      "Hensikten har vært å legge til rette for boliger for barn og unge med spesielle behov, og å regulere boligbebyggelse, konsentrert småhusbebyggelse, lekearealer og friområder.",
      "Planen tar også med noe sentrumsbebyggelse med kombinert formål: næring, kontor og leiligheter. Myke trafikanter og universell utforming er vektlagt.",
    ],
    images: [
      img("7cdec0419a7242219d39ae219ad9fe47.png", "Skogenberget, Rødberg", 892, 472),
      img("30b53c4b37b44a53aaaf44f6453d241c.png", "Boligbebyggelse på Skogenberget", 1267, 711),
      img("23f54bae8eb747e1aa6b3f13ab226371.png", "Plan for Skogenberget", 1266, 707),
    ],
  },
  {
    slug: "diple-kollen",
    title: "Diple, Kollentoppen og Østre Kollen",
    category: "fritidsboliger",
    client: "Kollen Gaustatoppen AS",
    location: "Gaustablikk, Tinn kommune",
    type: "Detaljprosjektering og reguleringsendring",
    year: "2024",
    services: ["landskap", "areal"],
    summary:
      "Detaljprosjektering av hytteområder på Gaustablikk, med 3D-terrengmodeller til maskinstyring.",
    body: [
      "Prosjektet har bestått av detaljprosjektering av ulike hytteområder på Gaustablikk i Tinn kommune.",
      "I samråd med utbygger er det utarbeidet detaljerte 3D-terrengmodeller, som er brukt til maskinstyring i anleggsmaskiner. Prosjektene har også omfattet endringer av reguleringsplan.",
    ],
    images: [
      img(
        "e63bf48f4e5a44fa8539af4b43ce2c0f.png",
        "Situasjonsplan for Diplevegen med tomter og felles parkering",
        893,
        698
      ),
      img(
        "09238a135d60442c95eaee2bb20345b9.png",
        "3D-terrengmodell av hyttefelt i fjellskog",
        1696,
        804
      ),
      img("93b32ff8465b4c26be9298c842e825e1.png", "Diple, Kollentoppen og Østre Kollen", 1087, 726),
      img("a767f8fc1d27491e96d24f9065a34502.png", "Hytteområde på Gaustablikk", 1732, 896),
      img("bb6f832493fa4c2dbd3014e4de02e29f.png", "Terreng og tomter på Gaustablikk", 1067, 712),
    ],
  },
  {
    slug: "gvelven-feriegrend",
    title: "Gvelven feriegrend",
    category: "fritidsboliger",
    client: "Øystein Gjellerud",
    location: "Blefjell, Flesberg kommune",
    type: "Detaljregulering",
    year: "2025",
    featured: true,
    services: ["areal", "landskap"],
    summary:
      "Fortetting og utvidelse av hyttefelt, med hensyn til våtmark, natur, stier og løyper.",
    body: [
      "Planen legger til rette for frittliggende fritidsbebyggelse som fortetting av eksisterende hyttefelt, og en utvidelse østover i uberørte natur- og friluftsområder. Planbestemmelsene ble gjennomgått for hele området, og teknisk infrastruktur ble oppdatert.",
      "Planen ivaretar verdifulle våtmark- og naturområder, friluftsliv og innregulering av større stier og løyper. Det er produsert 3D-modeller for å vise planen i landskapet og mot eksisterende fritidsbebyggelse.",
    ],
    images: [
      img(
        "e68f828caca74cbd8d4a003bac97615f.png",
        "Hyttefelt i fjellskog, med veger og felles parkering",
        1416,
        808
      ),
      img("6ca591ef30304af98bd2aca17cbb51ee.png", "Gvelven feriegrend", 2101, 1255),
      img("df9c23bee01543a39496cb8207971fae.png", "Landskap og hytter på Blefjell", 2101, 1255),
      img("0460edd7046543ca854c958a14b268f0.png", "Terrengmodell, Gvelven", 2101, 1255),
    ],
  },
  {
    slug: "fjellsnaret-3",
    title: "Fjellsnaret 3",
    category: "fritidsboliger",
    client: "Fjellsnaret AS",
    location: "Fjellsnaret / Uvdal, Nore og Uvdal kommune",
    type: "Detaljregulering",
    year: "2021",
    services: ["areal"],
    summary:
      "Bedre adkomst og omplassering av tomter i bratt terreng, med reviderte planbestemmelser.",
    body: [
      "Hensikten var å forbedre adkomsten til en rekke tomter i delen som defineres som Fjellsnaret 3 i områdereguleringsplanen for Øvre Uvdal reiselivsområde, og å flytte tomter som ligger i uhensiktsmessig bratt terreng.",
      "Det førte til justering av enkelttomter, tomterekker, veger og skiløyper. Planbestemmelsene ble revidert samtidig.",
    ],
    images: [
      img("0eb67f2fa4844519af5727115e03979d.png", "Fjellsnaret 3", 1188, 826),
      img("df3b8eeab5614ba3b4fac8011ca43bdf.png", "Tomter og adkomst, Fjellsnaret", 1722, 850),
      img("7bc3da7614d64fc7bc90ae812007370a.png", "Reguleringsendring, Fjellsnaret 3", 1637, 848),
    ],
  },
  {
    slug: "blestolen",
    title: "Blestølen",
    category: "fritidsboliger",
    client: "R1 Gruppen",
    location: "Blefjell, Flesberg kommune",
    type: "Detaljregulering og konseptutvikling",
    year: "2025",
    services: ["eiendom", "areal"],
    summary:
      "Frittliggende og konsentrert fritidsbebyggelse, og et nytt møtested der campingplassen fases ut.",
    body: [
      "Hovedformålet var å legge til rette for frittliggende og konsentrert fritidsbebyggelse. Dagens campingplass med 40 vogner fases ut.",
      "Eksisterende kafeteria flyttes inn i et nytt næringsbygg med flere funksjoner, blant annet leiligheter. Området skal fungere som møteplass for tur- og skiløypenettet og som et nytt sentrum på Blefjell. Parkeringsplassen får økt kapasitet for tilreisende og beboere. Friluftslivet ivaretas med god tilgang til eksisterende stier og løyper.",
    ],
    images: [
      img("603aeb1ad6374e57952b7467a224d36d.png", "Blestølen, Blefjell", 1338, 614),
      img("fd71d25c6eaf4ba4a7d6ab3fc646a20e.png", "Konsept for Blestølen", 1321, 877),
      img("5f0f322e3b364c48b57f2dc32482fbb1.png", "Fritidsbebyggelse på Blestølen", 1339, 617),
    ],
  },
  {
    slug: "bjorsate-masseuttak",
    title: "Bjorsåte masseuttak",
    category: "naering",
    client: "Fulsaas Maskin AS",
    location: "Veggli, Rollag kommune",
    type: "Konseptutvikling og detaljregulering",
    year: "2024",
    services: ["areal", "eiendom"],
    summary:
      "Én felles reguleringsplan for Prestmoen og Bjorsåte, med returmottak og næringsutvikling etter endt drift.",
    body: [
      "Formålet har vært å revidere gjeldende reguleringsplaner for Prestmoen masseuttak og Bjorsåte masseuttak til én felles plan, og å innarbeide returmottak for betong- og asfaltmasser. Planforslaget tar også med næringsutvikling etter endt drift.",
      "Dagens regulerte flate for masseuttak mot sørøst ble betydelig innskrenket, og nytt uttaksområde ble mer i tråd med eksisterende driftsplan.",
    ],
    images: [
      img("005b111f7ced4fae835c90b62197691f.jpg", "Bjorsåte masseuttak", 3840, 2160),
      img("184857683962409687f403896b50a7ad.jpg", "Masseuttak ved Veggli", 3840, 2160),
      img("643ca08ffee3410e92e81913dad76087.jpg", "Driftsområde, Bjorsåte", 3840, 2160),
    ],
  },
  {
    slug: "heggenveien-30",
    title: "Heggenveien 30",
    category: "naering",
    client: "Hæhre Entreprenør AS",
    location: "Vikersund, Modum kommune",
    type: "Detaljregulering",
    year: "2019",
    services: ["areal", "eiendom"],
    summary: "Næringstomt med verksted, kontor og overnatting for ansatte.",
    body: [
      "Tomten er utviklet til næringsvirksomhet, med mulighet for verksted, kontorbygning og overnatting for ansatte.",
    ],
    images: [
      img("3d660a5179044d8bbb4bb4d4ab0ebfc8.png", "Heggenveien 30, Vikersund", 1143, 767),
      img("a8d7bb4f36a24feea25f9d79034b98fb.png", "Næringsbebyggelse i Heggenveien", 1098, 732),
      img("d2b27040eeb948eda0c803762e5c2785.png", "Plan for Heggenveien 30", 1092, 727),
    ],
  },
  {
    slug: "vikersund-naeringspark",
    title: "Vikersund næringspark",
    category: "naering",
    client: "Tveføtrud Eiendom AS",
    location: "Vikersund / Sysle, Modum kommune",
    type: "Detaljregulering og detaljprosjektering",
    year: "2024",
    services: ["areal", "eiendom", "landskap"],
    summary: "Utvidelse for næring, tjenesteyting, industri og lager, med prosjektering senere i løpet.",
    body: [
      "Formålet var å legge til rette for utbygging med næring og tjenesteyting, og industri og lager. Planen er en utvidelse av eksisterende reguleringsplan.",
      "Plan og Ressurs har også bistått med detaljprosjektering og søknader senere i prosessen.",
    ],
    images: [
      img(
        "3323ca682dd64b60839d4eb3b9a17bf2.png",
        "Næringspark med haller, parkering og adkomst",
        1487,
        817
      ),
      img("539a3b8f56fe46d293465da48d37d1cb.png", "Vikersund næringspark", 1348, 862),
      img("4536556b005140c8ba560d0eb66792d8.png", "Utvidelse av næringsområdet", 1483, 835),
      img("ead8b2f25dcf4724998eba7bb623ee7b.png", "Næring og lager, Vikersund", 1488, 841),
    ],
  },
  {
    slug: "hvittingfoss-sentrum-nord",
    title: "Hvittingfoss sentrum nord",
    category: "kombinerte",
    client: "E&Ø Dagligvare AS",
    location: "Hvittingfoss, Kongsberg kommune",
    type: "Konseptutvikling og detaljregulering",
    year: "2021",
    services: ["eiendom", "areal"],
    summary:
      "Næring og forretning med mulighet for matbutikk, bensinstasjon, servering og boliger i øvre etasjer.",
    body: [
      "Hensikten var å legge til rette for ny nærings- og forretningsvirksomhet, med mulighet for matbutikk, bensinstasjon, matservering og boliger. Noen av funksjonene finnes allerede, blant annet bensinstasjon langs fylkesveg 40 og Sentrumsveien, og et par eneboliger.",
      "Planintensjonen var å samle flere av funksjonene i ett eller flere større bygningskompleks. Boliger er planlagt som leiligheter i de øvre etasjene.",
    ],
    images: [
      img("b29652578b874be5bfe5d78ee0dec496.png", "Hvittingfoss sentrum nord", 1476, 1030),
      img("81d13a363c534aeb9472570c64659f30.png", "Konsept for Hvittingfoss", 1452, 561),
      img("7f8622c23cf442c283233d551b0223dd.png", "Snitt og program, Hvittingfoss", 1592, 553),
    ],
  },
  {
    slug: "numedalsveien-76",
    title: "Numedalsveien 76",
    category: "kombinerte",
    client: "Numedalsveien 76 AS",
    location: "Kongsberghallen / Kiwi, Kongsberg kommune",
    type: "Konseptutvikling og detaljregulering",
    year: "Under utarbeidelse",
    services: ["eiendom", "areal"],
    summary:
      "Nærsenter for Skavanger, med handel, tjenester, lager og ny kryssløsning og kollektivstopp.",
    body: [
      "Prosjektet består av konseptutvikling og regulering av Numedalsveien 76 med flere eiendommer. På grunn av krav i kommuneplanens arealdel er også arealene ved Kongsberghallen, Kiwi og en rekke veger og gang- og sykkelveger tatt med.",
      "Reguleringen omfatter næringsvirksomhet, lager, logistikk, dagligvare, detaljhandel, bevertning, kontor og privat og offentlig tjenesteyting. Området får en funksjon som nærsenter for Skavanger, og kan bestå av apotek, lege, blomsterbutikk, kafé og bakeri. Ny kryssløsning og kollektivstopp ved Numedalsveien er en del av prosjektet.",
    ],
    images: [
      img(
        "ac7290f0aab346dda0daaa1d91635424.png",
        "Volumstudie av bebyggelse ved Numedalsveien 76",
        1082,
        797
      ),
      img(
        "43cfc7c10225400ab99fc149f771b3bd.png",
        "3D-modell av kvartalet ved Numedalsveien",
        1088,
        842
      ),
      img("ec9682f1f7ff48bc9d4448759cf06461.png", "Numedalsveien 76", 1246, 850),
      img("9b1f6418d3c743fba1c8e68b24b7dbad.png", "Nærsenter ved Kongsberghallen", 1402, 900),
    ],
  },
  {
    slug: "skredsvikmoen-regulering",
    title: "Skredsvikmoen",
    category: "kombinerte",
    client: "Modum kommune",
    location: "Geithus / Skredsvikmoen, Modum kommune",
    type: "Detaljregulering",
    year: "2017",
    services: ["areal", "landskap"],
    summary:
      "Regulering av boliger, barnehage og veganlegg vest for Stalsberg skole, inkludert skolevei.",
    body: [
      "Området vest for Stalsberg skole på Geithus ble regulert til blant annet frittliggende småhusbebyggelse, offentlig og privat tjenesteyting for barnehage, og veganlegg.",
      "De viktigste oppgavene var lokalisering av barnehagen og infrastrukturen: hvor atkomstvegene skulle ligge, og hvilke konsekvenser det fikk for området. Det ble også vurdert om gang- og sykkelveg skulle knytte fremtidig barnehage og Stalsberg skole sammen.",
      "Oppdraget var en del av prosjekteringen av Skredsvikmoen barnehage, der Plan og Ressurs også var ansvarlig for lek- og utomhusarealer, parkering og veganlegg.",
    ],
    images: [
      img("9cf44ef571c64b4c86f9c53699a708ee.png", "Skredsvikmoen, Geithus", 1040, 808),
      img("b9ee60c0a46c47e39e4ec7770c4bf9d4.png", "Reguleringsplan, Skredsvikmoen", 1432, 727),
      img("037fa21e1b8841bb8ce981eff1205bff.png", "Barnehage og boligtomter, Skredsvikmoen", 1302, 795),
    ],
  },
  {
    slug: "barnehage-granvin",
    title: "Barnehage Granvin",
    category: "kombinerte",
    client: "Voss kommune",
    location: "Granvin, Voss kommune",
    type: "Detaljregulering",
    year: "2023",
    services: ["areal", "landskap"],
    summary: "Sentrumsnær barnehage med adkomst og parkering, som del av utviklingen av bygdatunet.",
    body: [
      "Formålet var å legge til rette for utbygging av en sentrumsnær barnehage i Granvin, med adkomst og parkering.",
      "Parallelt har Coop fremmet interesser for egen tomt, og det er ivaretatt i prosessen. Stedsutvikling og utvikling av bygdatunet var en viktig del av planarbeidet.",
    ],
    images: [
      img("ad5ae770c519483a98781de1edb3f4b9.png", "Barnehage i Granvin", 1222, 831),
      img("cc3af1bc308a49739f94e071f4efdcf7.png", "Bygdatunet i Granvin", 1511, 838),
      img("76ec7173ae4c44a88e0f7785d54d91b3.png", "Adkomst og parkering, Granvin", 1284, 1010),
    ],
  },
  {
    slug: "vegglifjell-resort",
    title: "Vegglifjell Resort og skistadion, Lauvhovd",
    category: "kombinerte",
    client: "Vegglifjell Resort",
    location: "Vegglifjell, Rollag kommune",
    type: "Detaljregulering og detaljprosjektering",
    year: "2022",
    services: ["areal", "landskap"],
    summary:
      "Digitalisering av reguleringsplan for hytter, skianlegg og næring, og 3D-modell av terreng og løype.",
    body: [
      "Plan og Ressurs har bistått med digitalisering av detaljreguleringsplanen, som omfatter hytter, skianlegg og næring.",
      "Vi har også detaljprosjektert terreng og skianlegg som en 3D-modell, egnet til maskinstyring i anleggsfasen. Anlegget er asfaltert og kan brukes som rulleskiløype om sommeren. Det er en del av utviklingen av Vegglifjell som hytte-, turist- og rekreasjonsområde.",
    ],
    images: [
      img("9f4c881de5064c988a469e71438f5db2.png", "Vegglifjell Resort og skistadion", 1278, 881),
      img("b32cb429d7104fa1952829b2b522e187.png", "Skianlegg på Lauvhovd", 975, 651),
      img("d3947ce57f9641b890534d1580541758.png", "Terrengmodell, Vegglifjell", 976, 647),
    ],
  },
  {
    slug: "kommunedelplan-vegglifjell",
    title: "Kommunedelplan Vegglifjell 2019–2035",
    category: "kombinerte",
    client: "Rollag kommune",
    location: "Vegglifjell, Rollag kommune",
    type: "Kart, konsekvensutredning og plankonsulent",
    year: "2024",
    services: ["areal"],
    summary:
      "Overtakelse av kommunedelplanen midt i løpet, med kart, innspill, innsigelser og konsekvensutredning.",
    body: [
      "Plan og Ressurs overtok arbeidet fra en annen plankonsulent midt i prosessen. På grunn av en rekke innsigelser fra myndighetene ble planforslaget revidert flere ganger.",
      "Bistanden omfattet kartarbeid, digitalisering, vurdering og sortering av innspill, konsekvensutredninger og det øvrige konsulentarbeidet frem til ferdig kommunedelplan.",
    ],
    images: [
      img("fc07bf44b734449c94593289b34149a2.png", "Kommunedelplan Vegglifjell", 979, 652),
      img("7753cafc56834a2590a7a7e7e72b130e.png", "Planområde på Vegglifjell", 1509, 1052),
    ],
  },
  {
    slug: "hagedesign",
    title: "Hagedesign",
    category: "hagedesign",
    client: "Private oppdragsgivere",
    location: "Flere steder",
    type: "Utomhusplaner og hagedesign",
    year: "Løpende",
    services: ["landskap"],
    summary:
      "Hageplaner fra skisse til ferdig plan, også med mur, trapp, overvann og 3D-visualisering.",
    body: [
      "Plan og Ressurs har laget en rekke utomhus- og hageplaner, og bistått med hagedesign for mange kunder. Noen oppdrag er mer tekniske, for eksempel overvannstiltak eller prosjektering av mur og trapp.",
      "Arbeidet bygger på fagkunnskap om planter og arkitektur, og skal styrke eiendommens verdi med varig kvalitet. Visualisering i 3D brukes for at kunden skal forstå prosjektet. Landskapsarkitekten har i tillegg en særlig interesse for historiske og kulturelle hager, anlegg og parker.",
    ],
    images: [
      img(
        "21aa18b996a64986be3b3df1270cb593.png",
        "Hageplan i 3D, med plantefelt og snitt",
        850,
        407
      ),
      img(
        "7672344508d147eca5381aa522d51288.png",
        "Plantepalett for klatreplanter, trær, hekk og busker",
        1856,
        878
      ),
    ],
  },
]

export function getProject(slug: string) {
  return projects.find((project) => project.slug === slug)
}

export function getProjectsByCategory(category: CategoryId) {
  return projects.filter((project) => project.category === category)
}

export function getProjectsByService(service: ServiceId) {
  return projects.filter((project) => project.services.includes(service))
}

export function getFeaturedProjects() {
  return projects.filter((project) => project.featured)
}

export function getRelatedProjects(slug: string) {
  const project = getProject(slug)
  if (!project) return []
  return projects.filter((item) => item.category === project.category && item.slug !== slug).slice(0, 3)
}

export function toProjectCards(list: Project[] = projects): ProjectCard[] {
  return list.map((project) => ({
    slug: project.slug,
    title: project.title,
    category: project.category,
    location: project.location,
    type: project.type,
    year: project.year,
    image: project.images[0],
  }))
}

