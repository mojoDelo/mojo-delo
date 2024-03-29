const header__links = document.getElementsByClassName("header__link"),
  pop__btn = document.getElementsByClassName("pop__btn"),
  person__data = document.getElementsByClassName("person__data"),
  header__subtitle = document.getElementById("header__subtitle"),
  person = document.getElementById("person"),
  categories = document.getElementById("categories"),
  cost = document.getElementById("cost"),
  mainPages = document.querySelector(".mainPages"),
  sub__link = document.getElementsByClassName("sub__link");
  const oblasts = document.getElementById('oblasts');
  const cities = document.getElementById('cities');

const greenIcon = new L.Icon({
  iconUrl:
    "https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-green.png",
  shadowUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png",
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41],
});
const blueIcon = new L.Icon({
  iconUrl:
    "https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-blue.png",
  shadowUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png",
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41],
});
const goldIcon = new L.Icon({
  iconUrl:
    "https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-gold.png",
  shadowUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png",
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41],
});
const redIcon = new L.Icon({
  iconUrl:
    "https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-red.png",
  shadowUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png",
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41],
});
const locat = [
  {name: "Брестская",
  coord: [52.485050, 25.448294],
  state: [
    {name: "Барановичи",
    state: [53.125912, 26.001739]},
    {name: "Белоозёрск",
    state: [52.473119, 25.170113]},
    {name: "Берёза",
    state: [52.537732, 24.976350]},
    {name: "Брест",
    state: [52.095362, 23.702886]},
    {name: "Высокое",
    state: [52.366738, 23.377221]},
    {name: "Ганцевичи",
    state: [52.751551, 26.433281]},
    {name: "Давид_Городок",
    state: [52.055420, 27.222845]},
    {name: "Дрогичин",
    state: [52.189749, 25.148374]},
    {name: "Жабинка",
    state: [52.198537, 24.013101]},
    {name: "Иваново",
    state: [52.144323, 25.537325]},
    {name: "Ивацевичи",
    state: [52.712431, 25.335902]},
    {name: "Каменец",
    state: [52.401143, 23.820719]},
    {name: "Кобрин",
    state: [52.213516, 24.355177]},
    {name: "Коссово",
    state: [52.754096, 25.153391]},
    {name: "Лунинец",
    state: [52.253489, 26.808524]},
    {name: "Ляховичи",
    state: [53.036307, 26.260057]},
    {name: "Малорита",
    state: [51.792360, 24.077949]},
    {name: "Микашевичи",
    state: [52.221314, 27.477745]},
    {name: "Пинск",
    state: [52.128083, 26.060853]},
    {name: "Пружаны",
    state: [52.557500, 24.457456]},
    {name: "Столин",
    state: [51.889434, 26.839979]}
  ]},
  {name: "Витебская",
  coord: [55.335697, 28.823301],
  state: [
    {name: "Барань", state: [54.480455, 30.312264]},
    {name: "Браслав", state: [55.644011, 27.048643]},
    {name: "Верхнедвинск", state: [55.776535, 27.936972]},
    {name: "Витебск", state: [55.190431, 30.184936]},
    {name: "Глубокое", state: [55.141599, 27.687489]},
    {name: "Городок", state: [55.462317, 29.992388]},
    {name: "Дисна", state: [55.563000, 28.207627]},
    {name: "Докшицы", state: [54.892863, 27.762296]},
    {name: "Дубровно", state: [54.573630, 30.691223]},
    {name: "Лепель", state: [54.884253, 28.695971]},
    {name: "Миоры", state: [55.624285, 27.628768]},
    {name: "Речица", state: [54.652493, 29.138989]},
    {name: "Новополоцк", state: [55.522120, 28.651504]},
    {name: "Орша", state: [54.514621, 30.417209]},
    {name: "Полоцк", state: [55.489807, 28.793647]},
    {name: "Поставы", state: [55.116409, 26.848254]},
    {name: "Сенно", state: [54.813397, 29.700288]},
    {name: "Толочин", state: [54.409000, 29.701192]},
    {name: "Чашники", state: [54.851175, 29.172927]}
  ]},
  {name: "Гомельская",
  coord: [52.241915, 29.605418],
  state: [
    {name: "Буда_кошелёва",
    state: [52.719640, 30.569284]},
    {name: "Василевичи",
    state: [52.246253, 29.832104]},
    {name: "Ветка",
    state: [52.556889, 31.179020]},
    {name: "Гомель",
    state: [52.4345, 30.9754]},
    {name: "Добруш",
    state: [52.404354, 31.322995]},
    {name: "Ельск",
    state: [51.816057, 29.158818]},
    {name: "Житковичи",
    state: [52.214200, 27.857251]},
    {name: "Жлобин",
    state: [52.892339, 30.021372]},
    {name: "Мозырь",
    state: [52.045973, 29.239626]},
    {name: "Наровля",
    state: [51.798390, 29.501248]},
    {name: "Петриков",
    state: [52.127790, 28.498297]},
    {name: "Речица",
    state: [52.361348, 30.384679]},
    {name: "Рогачёв",
    state: [53.085796, 30.042937]},
    {name: "Светлогорск",
    state: [52.625467, 29.744157]},
    {name: "Туров",
    state: [52.066479, 27.738760]},
    {name: "Хойники",
    state: [51.902528, 29.971432]},
    {name: "Чечерск",
    state: [52.914133, 30.914392]},
  ]},
  {name: "Гродненская",
  coord: [53.776578, 25.223481],
  state: [
    {name: "Берёзовка", state: [53.723340, 25.499145]},
    {name: "Волковыск", state: [53.152323, 24.450650]},
    {name: "Гродно", state: [53.676563, 23.836430]},
    {name: "Дятлово", state: [53.464888, 25.406774]},
    {name: "Ивье", state: [53.933215, 25.773828]},
    {name: "Лида", state: [53.901587, 25.287401]},
    {name: "Мосты", state: [53.413873, 24.538016]},
    {name: "Новогрудок", state: [53.595949, 25.819326]},
    {name: "Островец", state: [54.614087, 25.960998]},
    {name: "Ошмяны", state: [54.426044, 25.940465]},
    {name: "Свислочь", state: [53.035663, 24.098010]},
    {name: "Скидель", state: [53.582717, 24.230188]},
    {name: "Слоним", state: [53.090746, 25.329101]},
    {name: "Сморгонь", state: [54.478148, 26.397550]},
    {name: "Щучин", state: [53.601671, 24.740591]}
  ]},
  {name: "Могилёвская",
  coord: [53.665298, 30.527704],
  state: [
    {name: "Белыничи", state: [53.999162, 29.714489]},
    {name: "Бобруйск", state: [53.144499, 29.214652]},
    {name: "Быхов", state: [53.523513, 30.235535]},
    {name: "Горки", state: [54.281446, 30.988632]},
    {name: "Кировск", state: [53.274596, 29.475370]},
    {name: "Климовичи", state: [53.607727, 31.953863]},
    {name: "Кличев", state: [53.492895, 29.334374]},
    {name: "Костюковичи", state: [53.353442, 32.055950]},
    {name: "Кричев", state: [53.723008, 31.713871]},
    {name: "Круглое", state: [54.251390, 29.794411]},
    {name: "Могилёв", state: [53.907390, 30.332898]},
    {name: "Мстиславль", state: [54.018725, 31.728053]},
    {name: "Осиповичи", state: [53.306400, 28.636374]},
    {name: "Славгород", state: [53.441702, 31.000699]},
    {name: "Чаусы", state: [53.802511, 30.963796]},
    {name: "Чериков", state: [53.568845, 31.387067]},
    {name: "Шклов", state: [54.214855, 30.288656]}
  ]},
  {name: "Минская",
  coord: [53.682553, 27.619394],
  state: [
    {name: "Березино", state: [53.838261, 28.989078]},
    {name: "Борисов", state: [54.220898, 28.504980]},
    {name: "Вилейка", state: [54.501144, 26.925333]},
    {name: "Воложин", state: [54.087334, 26.526355]},
    {name: "Дзержинск", state: [53.687587, 27.130304]},
    {name: "Жодино", state: [54.101190, 28.336268]},
    {name: "Заславль", state: [54.002647, 27.277645]},
    {name: "Клецк", state: [53.066072, 26.640376]},
    {name: "Копыль", state: [53.154653, 27.083765]},
    {name: "Крупки", state: [54.321864, 29.136111]},
    {name: "Логойск", state: [54.201050, 27.853174]},
    {name: "Любань", state: [52.800757, 27.995070]},
    {name: "Марьина Горка", state: [53.509904, 28.148648]},
    {name: "Молодечно", state: [54.307647, 26.856885]},
    {name: "Мядель", state: [54.881954, 26.933576]},
    {name: "Несвиж", state: [53.219358, 26.673812]},
    {name: "Слуцк", state: [53.021302, 27.550098]},
    {name: "Смолевичи", state: [54.029308, 28.078442]},
    {name: "Старые_Дороги", state: [53.041174, 28.262837]},
    {name: "Столбцы", state: [53.480884, 26.742217]},
    {name: "Фаниполь", state: [53.741324, 27.330726]},
    {name: "Червень", state: [53.708872, 28.424341]}
  ]},
]
const coordinates = [
  (Build = [
    (finishing = [
      {
        id: "191",
        name: "Александр",
        tel: "+375(29)106-26-19",
        icon: { icon: blueIcon },
        cord: [52.425323, 31.007795],
        photos: [
          "img/build/otdelka/aleksandr/1.jpg",
          "img/build/otdelka/aleksandr/2.jpg",
          "img/build/otdelka/aleksandr/3.jpg",
          "img/build/otdelka/aleksandr/4.jpg",
          "img/build/otdelka/aleksandr/5.jpg",
          "img/build/otdelka/aleksandr/6.jpg",
          "img/build/otdelka/aleksandr/7.jpg",
          "img/build/otdelka/aleksandr/8.jpg",
          "img/build/otdelka/aleksandr/9.jpg",
        ],
        text: "отделочные работы",
      }
    ]),
    (special = [
      {
        id: "19",
        name: "Сергей",
        tel: "+375(25)655-62-12",
        icon: { icon: blueIcon },
        cord: [52.436143, 31.012995],
        photos: [
          "img/build/special/electric/sergey/1.jpg",
          "img/build/special/electric/sergey/2.jpg",
          "img/build/special/electric/sergey/3.jpg",
          "img/build/special/electric/sergey/4.jpg",
          "img/build/special/electric/sergey/5.jpg",
          "img/build/special/electric/sergey/6.jpg",
          "img/build/special/electric/sergey/7.jpg",
          "img/build/special/electric/sergey/8.jpg",
          "img/build/special/electric/sergey/9.jpg",
        ],
        text: "электромонтаж",
      },
      {
        id: "86",
        name: "Александр",
        tel: "+375(29)364-69-25",
        icon: { icon: goldIcon },
        cord: [53.877950, 27.555663],
        photos: [
          "img/build/special/pechnik/minsk-aleksandr/1.jpg",
          "img/build/special/pechnik/minsk-aleksandr/2.jpg",
          "img/build/special/pechnik/minsk-aleksandr/3.jpg",
          "img/build/special/pechnik/minsk-aleksandr/4.jpg",
          "img/build/special/pechnik/minsk-aleksandr/5.jpg",
          "img/build/special/pechnik/minsk-aleksandr/6.jpg",
          "img/build/special/pechnik/minsk-aleksandr/7.jpg",
          "img/build/special/pechnik/minsk-aleksandr/8.jpg",
          "img/build/special/pechnik/minsk-aleksandr/9.jpg",
        ],
        text: "ремонт печей и каминов",
      }
    ]),
    (general = [
      {
        id: "52",
        name: "Евгений Л.Н.",
        tel: "+375(29)363-28-30 ",
        icon: { icon: greenIcon },
        cord: [52.362955, 31.02533],
        photos: [
          "img/build/obshestroy/montazh/belitsa/1.jpg",
          "img/build/obshestroy/montazh/belitsa/2.jpg",
          "img/build/obshestroy/montazh/belitsa/3.jpg",
          "img/build/obshestroy/montazh/belitsa/4.jpg",
          "img/build/obshestroy/montazh/belitsa/5.jpg",
          "img/build/obshestroy/montazh/belitsa/6.jpg",
          "img/build/obshestroy/montazh/belitsa/7.jpg",
          "img/build/obshestroy/montazh/belitsa/8.jpg",
          "img/build/obshestroy/montazh/belitsa/9.jpg",
        ],
        text: "сайдинг, кровля, заборы",
      },
      {
        id: "13",
        name: "Юрий",
        tel: "+375(44)577-54-20",
        icon: { icon: redIcon },
        cord: [52.400072, 31.120134],
        photos: [
          "img/build/obshestroy/svarka/Yura/1.jpg",
          "img/build/obshestroy/svarka/Yura/2.jpg",
          "img/build/obshestroy/svarka/Yura/3.jpg",
          "img/build/obshestroy/svarka/Yura/4.jpg",
          "img/build/obshestroy/svarka/Yura/5.jpg",
          "img/build/obshestroy/svarka/Yura/6.jpg",
          "img/build/obshestroy/svarka/Yura/7.jpg",
          "img/build/obshestroy/svarka/Yura/8.jpg",
          "img/build/obshestroy/svarka/Yura/9.jpg",
        ],
        text: "изделия из металла",
      },
      {
        id: "16",
        name: "Шинкевич В.В",
        tel: "+375(29)209-08-88",
        icon: { icon: blueIcon },
        cord: [52.403776, 30.980301],
        photos: [
          "img/build/obshestroy/demont/Shinkevich/1.jpg",
          "img/build/obshestroy/demont/Shinkevich/2.jpg",
          "img/build/obshestroy/demont/Shinkevich/3.jpg",
          "img/build/obshestroy/demont/Shinkevich/4.jpg",
          "img/build/obshestroy/demont/Shinkevich/5.jpg",
          "img/build/obshestroy/demont/Shinkevich/6.jpg",
          "img/build/obshestroy/demont/Shinkevich/7.jpg",
          "img/build/obshestroy/demont/Shinkevich/8.jpg",
          "img/build/obshestroy/demont/Shinkevich/9.jpg",
        ],
        text: "демонтаж, электромонтаж",
      },
      {
        id: "162",
        name: "Александр",
        tel: "+375(33)6020498",
        icon: { icon: goldIcon },
        cord: [53.072710, 30.045182],
        photos: [
          "img/build/obshestroy/stolyarnie/srub-alex-rog/1.jpg",
          "img/build/obshestroy/stolyarnie/srub-alex-rog/2.jpg",
          "img/build/obshestroy/stolyarnie/srub-alex-rog/3.jpg",
          "img/build/obshestroy/stolyarnie/srub-alex-rog/4.jpg",
          "img/build/obshestroy/stolyarnie/srub-alex-rog/5.jpg",
          "img/build/obshestroy/stolyarnie/srub-alex-rog/6.jpg",
          "img/build/obshestroy/stolyarnie/srub-alex-rog/7.jpg",
          "img/build/obshestroy/stolyarnie/srub-alex-rog/8.jpg",
          "img/build/obshestroy/stolyarnie/srub-alex-rog/9.jpg",
        ],
        text: " Шлифовка, конопатка, покрытие пропиткой, гермитизация швов, cпил деревьев, уборка участка.",
      },
      {
        id: "132",
        name: "Дмитрий",
        tel: "+375(25)629-78-55",
        icon: { icon: goldIcon },
        cord: [52.413031, 31.323378],
        photos: [
          "img/build/obshestroy/stolyarnie/wood-dobrush/1.jpg",
          "img/build/obshestroy/stolyarnie/wood-dobrush/2.jpg",
          "img/build/obshestroy/stolyarnie/wood-dobrush/3.jpg",
          "img/build/obshestroy/stolyarnie/wood-dobrush/4.jpg",
          "img/build/obshestroy/stolyarnie/wood-dobrush/5.jpg",
          "img/build/obshestroy/stolyarnie/wood-dobrush/6.jpg",
          "img/build/obshestroy/stolyarnie/wood-dobrush/7.jpg",
          "img/build/obshestroy/stolyarnie/wood-dobrush/8.jpg",
          "img/build/obshestroy/stolyarnie/wood-dobrush/9.jpg",
        ],
        text: "деревянные конструкции, кровельные работы",
      }
    ]),
    (other = [
      {
        id: "2",
        name: "Александр",
        tel: "+375(44)750-22-11",
        icon: { icon: redIcon },
        cord: [52.363671, 31.012887],
        photos: [
          "img/arenda/belitsa/a.jpg",
          "img/arenda/belitsa/arendaa.jpg",
          "img/arenda/belitsa/are.jpg",
          "img/arenda/belitsa/arenda.jpg",
          "img/arenda/belitsa/aren.jpg",
          "img/arenda/belitsa/arend.jpg",
          "img/arenda/belitsa/az.jpg",
          "img/arenda/belitsa/arenda.jpg",
          "img/arenda/belitsa/arendaa.jpg",
        ],
        text: "аренда эл. инструмента, сад. техники",
      },
    ]),
  ]),
  (Car = [
    (repair = [
      {
        id: "51",
        name: "М-ДРАЙВ",
        tel: "+375 (29) 142-74-68",
        icon: { icon: blueIcon },
        cord: [52.446426, 30.954143],
        photos: [
          "img/auto/sto/m-drive/1.jpg",
          "img/auto/sto/m-drive/2.jpg",
          "img/auto/sto/m-drive/3.jpg",
          "img/auto/sto/m-drive/4.jpg",
          "img/auto/sto/m-drive/5.jpg",
          "img/auto/sto/m-drive/6.jpg",
          "img/auto/sto/m-drive/7.jpg",
          "img/auto/sto/m-drive/8.jpg",
          "img/auto/sto/m-drive/9.jpg",
        ],
        text: "СТО",
      }
    ]),
    (service = [
      {
        id: "41",
        name: "18... Шиномонтаж",
        tel: "+375(25)777-77-02",
        icon: { icon: greenIcon },
        cord: [52.407426, 30.960656],
        photos: [
          "img/auto/shinomontaz/18/1.jpg",
          "img/auto/shinomontaz/18/2.jpg",
          "img/auto/shinomontaz/18/3.jpg",
          "img/auto/shinomontaz/18/4.jpg",
          "img/auto/shinomontaz/18/5.jpg",
          "img/auto/shinomontaz/18/6.jpg",
          "img/auto/shinomontaz/18/7.jpg",
          "img/auto/shinomontaz/18/8.jpg",
          "img/auto/shinomontaz/18/9.jpg",
        ],
        text: "шиномонтаж",
      },
    ]),
    (parts = []),
    (other = []),
  ]),
  (Beauty = [
    (medecine = []),
    (cosmetic = [
      {
        id: "42",
        name: "Снежана",
        tel: "+375(25)740-18-37",
        icon: { icon: greenIcon },
        cord: [52.402814, 30.923759],
        photos: [
          "img/beauty/resnizi/snega/1.jpg",
          "img/beauty/resnizi/snega/2.jpg",
          "img/beauty/resnizi/snega/3.jpg",
          "img/beauty/resnizi/snega/4.jpg",
          "img/beauty/resnizi/snega/5.jpg",
          "img/beauty/resnizi/snega/6.jpg",
          "img/beauty/resnizi/snega/7.jpg",
          "img/beauty/resnizi/snega/8.jpg",
          "img/beauty/resnizi/snega/9.jpg",
        ],
        text: "ресницы, брови",
      },
    ]),
    (sport = []),
    (other = []),
  ]),
  (Leisure = [
    (nature = [
      {
        id: "72",
        name: "конный манеж",
        tel: "8 0232 60-99-14",
        icon: { icon: goldIcon },
        cord: [52.468915, 31.000178],
        photos: [
          "img/leisure/nature/horses/gomel/1.jpg",
          "img/leisure/nature/horses/gomel/2.jpg",
          "img/leisure/nature/horses/gomel/3.jpg",
          "img/leisure/nature/horses/gomel/4.jpg",
          "img/leisure/nature/horses/gomel/5.jpg",
          "img/leisure/nature/horses/gomel/6.jpg",
          "img/leisure/nature/horses/gomel/7.jpg",
          "img/leisure/nature/horses/gomel/8.jpg",
          "img/leisure/nature/horses/gomel/9.jpg",
        ],
        text: "конные прогулки"
      },
      {
        id: "172",
        name: "Татьяна",
        tel: "+375(33)321-06-60",
        icon: { icon: goldIcon },
        cord: [52.421589, 31.296086],
        photos: [
          "img/leisure/nature/horses/dobrush/1.jpg",
          "img/leisure/nature/horses/dobrush/2.jpg",
          "img/leisure/nature/horses/dobrush/3.jpg",
          "img/leisure/nature/horses/dobrush/4.jpg",
          "img/leisure/nature/horses/dobrush/5.jpg",
          "img/leisure/nature/horses/dobrush/6.jpg",
          "img/leisure/nature/horses/dobrush/7.jpg",
          "img/leisure/nature/horses/dobrush/8.jpg",
          "img/leisure/nature/horses/dobrush/9.jpg",
        ],
        text: "агроусадьба и конный двор"
      }
    ]),
    (art = [
      {
        id: "46",
        name: "Чаша Мира",
        tel: "",
        icon: { icon: greenIcon },
        cord: [52.425883, 31.015054],
        photos: [
          "img/leisure/art/CupOfPeace/1.jpg",
          "img/leisure/art/CupOfPeace/2.jpg",
          "img/leisure/art/CupOfPeace/3.jpg",
          "img/leisure/art/CupOfPeace/4.jpg",
          "img/leisure/art/CupOfPeace/5.jpg",
          "img/leisure/art/CupOfPeace/6.jpg",
          "img/leisure/art/CupOfPeace/7.jpg",
          "img/leisure/art/CupOfPeace/8.jpg",
          "img/leisure/art/CupOfPeace/9.jpg",
        ],
        text: "Арт-Салон",
      }
    ]),
    (fun = [
      {
        id: "146",
        name: "лазертаг, квест, икс-бокс",
        tel: "+375 (29) 116-17-52",
        icon: { icon: redIcon },
        cord: [52.412973, 30.953246],
        photos: [
          "img/leisure/fun/lasertag/gomel/1.jpg",
          "img/leisure/fun/lasertag/gomel/2.jpg",
          "img/leisure/fun/lasertag/gomel/3.jpg",
          "img/leisure/fun/lasertag/gomel/4.jpg",
          "img/leisure/fun/lasertag/gomel/5.jpg",
          "img/leisure/fun/lasertag/gomel/6.jpg",
          "img/leisure/fun/lasertag/gomel/7.jpg",
          "img/leisure/fun/lasertag/gomel/8.jpg",
          "img/leisure/fun/lasertag/gomel/9.jpg",
        ],
        text: "лазертаг, квест, икс-бокс",
      },
    ]),
    (other = []),
  ]),
  (Other = [
    (technique = [
      {
        id: "4",
        name: "Белый Мастер",
        tel: "+375(44)525-52-51",
        icon: { icon: greenIcon },
        cord: [52.42972, 31.009293],
        photos: [
          "img/other/technic/remont/oleg/1.jpg",
          "img/other/technic/remont/oleg/2.jpg",
          "img/other/technic/remont/oleg/3.jpg",
          "img/other/technic/remont/oleg/4.jpg",
          "img/other/technic/remont/oleg/5.jpg",
          "img/other/technic/remont/oleg/6.jpg",
          "img/other/technic/remont/oleg/7.jpg",
          "img/other/technic/remont/oleg/8.jpg",
          "img/other/technic/remont/oleg/9.jpg",
        ],
        text: "ремонт оргтехники",
      },
    ]),
    (economic = []),
    (handMade = [
      {
        id: "4",
        name: "Евгения",
        tel: "+375 (29) 839-57-56",
        icon: { icon: redIcon },
        cord: [52.426867, 30.965291],
        photos: [
          "img/other/handMade/soap/jenn/1.jpg",
          "img/other/handMade/soap/jenn/2.jpg",
          "img/other/handMade/soap/jenn/3.jpg",
          "img/other/handMade/soap/jenn/4.jpg",
          "img/other/handMade/soap/jenn/5.jpg",
          "img/other/handMade/soap/jenn/6.jpg",
          "img/other/handMade/soap/jenn/7.jpg",
          "img/other/handMade/soap/jenn/8.jpg",
          "img/other/handMade/soap/jenn/9.jpg",
        ],
        text: "Мыло ручной работы",
      },
      {
        id: "104",
        name: "Евгения",
        tel: "+375 (44) 561-63-25",
        icon: { icon: blueIcon },
        cord: [52.454815, 30.977372],
        photos: [
          "img/other/handMade/decore/flowers/1.jpg",
          "img/other/handMade/decore/flowers/2.jpg",
          "img/other/handMade/decore/flowers/3.jpg",
          "img/other/handMade/decore/flowers/4.jpg",
          "img/other/handMade/decore/flowers/5.jpg",
          "img/other/handMade/decore/flowers/6.jpg",
          "img/other/handMade/decore/flowers/7.jpg",
          "img/other/handMade/decore/flowers/8.jpg",
          "img/other/handMade/decore/flowers/9.jpg",
        ],
        text: "Декор",
      },
      {
        id: "144",
        name: "Дмитрий @remeslo_kovka",
        tel: "+375(29)616-55-86",
        icon: { icon: greenIcon },
        cord: [52.413571, 31.315598],
        photos: [
          "img/other/handMade/metall/dobrush/1.jpg",
          "img/other/handMade/metall/dobrush/2.jpg",
          "img/other/handMade/metall/dobrush/3.jpg",
          "img/other/handMade/metall/dobrush/4.jpg",
          "img/other/handMade/metall/dobrush/5.jpg",
          "img/other/handMade/metall/dobrush/6.jpg",
          "img/other/handMade/metall/dobrush/7.jpg",
          "img/other/handMade/metall/dobrush/8.jpg",
          "img/other/handMade/metall/dobrush/9.jpg",
        ],
        text: "изделия из металла, ковка",
      }
    ]),
    (other = [
      {
        id: "49",
        name: "3 кота",
        tel: "+375(29)533-51-60",
        icon: { icon: greenIcon },
        cord: [52.519045, 30.933165],
        photos: [
          "img/other/other/pets/eremino/1.jpg",
          "img/other/other/pets/eremino/2.jpg",
          "img/other/other/pets/eremino/3.jpg",
          "img/other/other/pets/eremino/4.jpg",
          "img/other/other/pets/eremino/5.jpg",
          "img/other/other/pets/eremino/6.jpg",
          "img/other/other/pets/eremino/7.jpg",
          "img/other/other/pets/eremino/8.jpg",
          "img/other/other/pets/eremino/9.jpg",
        ],
        text: "ГОСТИНИЦА, СТРИЖКА для кошек и собак",
      } 
    ]),
  ]),
];
const pagesContent = [
  (Build = [
    {
      id: "1",
      name: "ОТДЕЛОЧНЫЕ",
      categories: [
        {
          name: "отделочные",
          color: "blue",
          coast: [
            { name: "шпатлёвка под обои", pay: "8" },
            { name: "шпатлёвка под покраску", pay: "15" },
            { name: "штукатурка по маякам", pay: "10" },
          ],
        },
      ],
    },
    {
      id: "2",
      name: "СПЕЦИАЛЬНЫЕ",
      categories: [
        {
          name: "электромонтаж",
          color: "blue",
          coast: [
            { name: "точка", pay: "12" },
            { name: "расп. коробка", pay: "10" },
            { name: "точка чистовая", pay: "5" },
          ],
        },
        {
          name: "ремонт печей и каминов",
          color: "gold",
          coast: [
            { name: "ремонт печи", pay: "от 50р" }
          ],
        }
      ],
    },
    {
      id: "3",
      name: "ОБЩЕСТРОИТЕЛЬНЫЕ",
      categories: [
        {
          name: "демонтаж",
          color: "blue",
          coast: [
            { name: "Полы", pay: "от 6р. кв." },
            { name: "Штукатурка", pay: "от 6 р. кв." },
            { name: "Стены", pay: "от 7р. кв." },
            { name: "Здания", pay: "от 17 р. кв." },
            { name: "Бетонная сантех кабина", pay: "1100 шт." },
          ],
        },
        {
          name: "монтаж",
          color: "green",
          coast: [
            { name: "Монтаж сайдинга", pay: "от 7р.м2" },
            { name: "Кровельные работы", pay: "от 10р.м2" },
            { name: "Установка заборов", pay: "от 14р.м2" },
          ],
        },
        {
          name: "сварочные работы",
          color: "red",
          coast: [
            { name: "изделие", pay: "от 50р" }
          ],          
        },
        {
          name: "столярные",
          color: "gold",
          coast: [
            { name: "изделие", pay: "от 50р" }
          ],          
        }
      ],
    },
    {
      id: "4",
      name: "ДРУГОЕ",
      categories: [
        {
          name: "аренда",
          color: "red",
          coast: [
            { name: "болгарка", pay: "от 9" },
            { name: "перфоратор", pay: "от 15" }
          ],
        },
      ],
    },
  ]),
  (Car = [
    {
      id: "1",
      name: "РЕМОНТ",
      categories: [
        {
          name: "подвеска +",
          color: "blue",
          coast: [
            { name: "ТОРМОЗНАЯ СИСТЕМА", pay: "" },
            { name: "Замена тормозных дисков", pay: "от 30р" },
            { name: "Замена тормозной жидкости", pay: "от 25р" },
            { name: "Диагностика тормозной системы", pay: "от 15р" },
            { name: "Замена передних тормозных колодок", pay: "от 20р" },
            { name: "Замена задних тормозных колодок", pay: "от 25р" },
            { name: "Регулировка ручного тормоза", pay: "от 40р" },
            { name: "Регулировка ручного тормоза", pay: "от 40р" },
            { name: "Регулировка ручного тормоза", pay: "от 40р" },
            { name: "Регулировка ручного тормоза", pay: "от 40р" },
          ],
        },
      ],
    },
    {
      id: "2",
      name: "ОБСЛУЖИВАНИЕ",
      categories: [
        {
          name: "шиномонтаж",
          color: "green",
          coast: [
            { name: "сняти - установка колеса", pay: "4р" }
          ],
        },
        {
          name: "Тех. обслуживание",
          color: "blue",
          coast: [
            { name: "Замена салонного фильтра", pay: "10р" },
            { name: "Замена воздушного фильтра", pay: "15р" },
            { name: "Замена антифриза", pay: "от 35р" },
            { name: "Замена масла в двигателе", pay: "от 15р" },
            { name: "Замена топливного фильтра", pay: "от 10р" },
          ],
        }
      ],
    },
    {
      id: "3",
      name: "ЗАПЧАСТИ",
      categories: [
        {
          name: "под ключ",
          color: "blue",
          coast: [
            { name: "шпатлёвка под обои", pay: "3" },
            { name: "шпатлёвка под покраску", pay: "6" },
            { name: "штукатурка по маякам", pay: "4" },
          ],
        },
      ],
    },
    {
      id: "4",
      name: "ДРУГОЕ",
      categories: [
        {
          name: "под ключ",
          color: "blue",
          coast: [
            { name: "шпатлёвка под обои", pay: "3" },
            { name: "шпатлёвка под покраску", pay: "6" },
            { name: "штукатурка по маякам", pay: "4" },
          ],
        },
      ],
    },
  ]),
  (Beauty = [
    {
      id: "1",
      name: "МЕДИЦИНА",
      categories: [
        {
          name: "под ключ",
          color: "green",
          coast: [
            { name: "шпатлёвка под обои", pay: "3" },
            { name: "шпатлёвка под покраску", pay: "6" },
            { name: "штукатурка по маякам", pay: "4" },
          ],
        },
      ],
    },
    {
      id: "2",
      name: "КОСМЕТ. УСЛУГИ",
      categories: [
        {
          name: "ресницы брови",
          color: "green",
          coast: [
            { name: "наращивание ресниц", pay: "от 25р." },
            { name: "брови", pay: "от 20р" },

          ],
        },
      ],
    },
    {
      id: "3",
      name: "СПОРТ",
      categories: [
        {
          name: "под ключ",
          color: "green",
          coast: [
            { name: "шпатлёвка под обои", pay: "3" },
            { name: "шпатлёвка под покраску", pay: "6" },
            { name: "штукатурка по маякам", pay: "4" },
          ],
        },
      ],
    },
    {
      id: "4",
      name: "ДРУГОЕ",
      categories: [
        {
          name: "под ключ",
          color: "green",
          coast: [
            { name: "шпатлёвка под обои", pay: "3" },
            { name: "шпатлёвка под покраску", pay: "6" },
            { name: "штукатурка по маякам", pay: "4" },
          ],
        },
      ],
    },
  ]),
  (Leisure = [
    {
      id: "1",
      name: "ПРИРОДА",
      categories: [
        {
          name: "конные прогулки",
          color: "gold",
          coast: [
            { name: "с сопровождением (5 минут)", pay: "5р" },
            { name: "с сопровождением (2 минуты)", pay: "3р" },
            { name: "фото- или видеосъёмок (до 30 мин)", pay: "22р" },
            { name: "фото- или видеосъёмок (до 10 мин)", pay: "9р" },
            { name: "Стрельба из лука (6 выстрелов) (дети)", pay: "2р" }
          ],
        },
      ],
    },
    {
      id: "2",
      name: "ИСКУССТВО",
      categories: [
        {
          name: "Арт салон",
          color: "green",
          coast: [
            { name: "кофе", pay: "3р" },
            { name: "кино", pay: "0р" },
            { name: "хорошее настроение", pay: "0р" },
          ],
        },
      ],
    },
    {
      id: "3",
      name: "РАЗВЛЕЧЕНИЯ",
      categories: [
        {
          name: "лазертаг, квест, икс-бокс",
          color: "red",
          coast: [
            { name: "лазертаг будни", pay: "13р./чел." },
            { name: "лазертаг вых.", pay: "15р./чел." }
          ]
        },
      ],
    },
    {
      id: "4",
      name: "ДРУГОЕ",
      categories: [
        {
          name: "под ключ",
          color: "green",
          coast: [
            { name: "шпатлёвка под обои", pay: "3" },
            { name: "шпатлёвка под покраску", pay: "6" },
            { name: "штукатурка по маякам", pay: "4" },
          ],
        },
      ],
    },
  ]),
  (Other = [
    {
      id: "1",
      name: "ТЕХНИКА",
      categories: [
        {
          name: "ремонт техники",
          color: "green",
          coast: [
            { name: "чистка ноутбуков", pay: "от 30р" },
            { name: "диагностика", pay: "0 р" },
            { name: "заправка картр.", pay: "от 15р" },
          ],
        },
      ],
    },
    {
      id: "2",
      name: "ЭКОНОМИКА",
      categories: [
        {
          name: "ремонт орг техники",
          color: "green",
          coast: [
            { name: "шпатлёвка под обои", pay: "3" },
            { name: "шпатлёвка под покраску", pay: "6" },
            { name: "штукатурка по маякам", pay: "4" },
          ],
        },
      ],
    },
    {
      id: "3",
      name: "ИЗДЕЛИЯ РУЧКАМИ",
      categories: [
        {
          name: "Мыло ручной работы",
          color: "red",
          coast: [
            { name: "Мыло ручной работы", pay: "от 10р." }
          ],
        },
        {
          name: "Декор",
          color: "blue",
          coast: [
            { name: "букеты", pay: "от 15р." }
          ],
        },
        {
          name: "изделия из металла",
          color: "green",
          coast: [
            { name: "изделие", pay: "от 30р." }
          ],
        }
      ],
    },
    {
      id: "4",
      name: "ДРУГОЕ",
      categories: [
        {
          name: "домашние питомцы",
          coast: [
            { name: "стрижка", pay: "от 30р" }
          ],
        },
      ],
    },
  ]),
];
// 52.4345, 30.9754
const center = [53.899994, 27.558725];

const map = L.map("map").setView(center, 6);
L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
  minZoom: 6,
  maxZoom: 17,
  attribution: "© OpenStreetMap",
}).addTo(map);
const markerGroup = L.layerGroup().addTo(map);
const addMarkers = () => {
  let num = 0;
  for (element of coordinates) {
   
    for (mark of element) {
      if (mark == []) {
       
      } else
        for (mar of mark) {
          
          L.marker(mar.cord, mar.icon)
            .addTo(markerGroup)
            .bindPopup(
              `<section id="${mar.id}" class="${num}"> 
                    <p class="pop__into">${mar.name}</p>
                    <p>${mar.text}</p>
                    <a href="tel:${mar.tel}">${mar.tel}</a>
                    </section>`
            );
        }
    }
    num++;
  }
};
addMarkers();

const changeCost = (num, link, cat) => {
  cost.innerHTML = "";
  console.log(num);
  console.log(link);
  console.log(cat);
  cost.classList.add("active");
  let tableCost = pagesContent[num][link].categories[cat].coast.map(
    (el) =>
      `<tr class="row"><td class="column1">${el.name}</td><td class="column2">${el.pay}</td></tr>`
  );
  for (price of tableCost) {
    console.log(price);
    cost.innerHTML += price;
  }
};

const changeSubClass = (num, link) => {
  markerGroup.clearLayers();
  let cat = 0;
  categories.innerHTML = "";
  categories.classList.add("active");
  let SubClass = [];
  SubClass = pagesContent[num][link].categories.map(
    (el) => `<h4 class="category">${el.name}</h4>`
  );
  for (clas of SubClass) {
    cat++;
    categories.innerHTML += clas;
    let category = document.getElementsByClassName("category");
    category[cat - 1].id = cat - 1;
    category[cat - 1].style.color =
      pagesContent[num][link].categories[cat - 1].color;
  }
  for (categ of categories.children) {
    categ.addEventListener("click", (categ) =>
      changeCost(num, link, categ.target.id)
    );
  }
  console.log(categories.children);
  for (mark of coordinates[num][link]) {
    L.marker(mark.cord, mark.icon)
      .addTo(markerGroup)
      // .on('click', markerOnClick(mark))
      .bindPopup(
        `<section id="${mark.id}" class="${num}"> 
            <p class="pop__into">${mark.name}</p>
            <p>${mark.text}</p>
            <a href="tel:${mark.tel}">${mark.tel}</a>
            </section>`
      );
  }
};

const changePage = (numb) => {
  header__subtitle.classList.add("active");
  let num = numb - 1;
  let n = 0;
  for (page of sub__link) {
    page.innerHTML = pagesContent[num][n].name;
    n++;
  }
  for (link of sub__link) {
    link.addEventListener("click", (link) =>
      changeSubClass(num, link.target.id)
    );
  }

};

const changeClass = (el) => {
  markerGroup.clearLayers();
  cost.classList.remove("active");
  person.classList.remove('active');
  categories.classList.remove("active");
  let num = el.target.id;
  if (num == 0) {
    header__subtitle.classList.remove("active");
    mainPages.classList.add("active");
    for (link of header__links) {
      link.classList.remove("active");
    }
    person.classList.remove("active");
    header__links[0].classList.add("active");
    addMarkers();
  } else {
    mainPages.classList.remove("active");
    for (link of header__links) {
      link.classList.remove("active");
    }
    header__links[num].classList.add("active");

    changePage(num);
    
    for (mark of coordinates[num - 1]) {
        if (mark == []) {
         
        } else
          for (mar of mark) {
            
            L.marker(mar.cord, mar.icon)
              .addTo(markerGroup)
              .bindPopup(
                `<section id="${mar.id}" class="${num - 1}"> 
                <p class="pop__into">${mar.name}</p>
                <p>${mar.text}</p>
                <a href="tel:${mar.tel}">${mar.tel}</a>
                </section>`
              );
              
            console.log(mar.id);
            console.log(num);
          }
      }
  }
  console.log(markerGroup);
};

for (link of header__links) {
  link.addEventListener("click", (link) => changeClass(link));
}

const changeOblast = () => {
  if(oblasts.value == "все области") {
    map.setView(new L.LatLng(53.899994, 27.558725), 6)
    cities.classList.remove('active')
  } else{
  let oblastCities =["<option value='все города'>все города</option>"];
  let obl = locat.find(city => city.name === oblasts.value);  
  obl.state.forEach(element => {
    oblastCities.push(`<option value="${element.name}" id="${element.state}">${element.name}</option>`)
      console.log (element)      
    }
  );
  cities.innerHTML = oblastCities.join("");
  cities.classList.add('active')
  map.setView(new L.LatLng(obl.coord[0], obl.coord[1]), 8)
}
  
};

oblasts.addEventListener("change", (event) => {
  console.log (event.target.value)
  changeOblast();  
});

const changeCity = () => {
  if(cities.value == "все города") {
    let obl = locat.find(city => city.name === oblasts.value);
    map.setView(new L.LatLng(obl.coord[0], obl.coord[1]), 8)
  } else{
  console.log (oblasts.value)
  let cit = locat.find(ob => ob.name === oblasts.value).state.find(city => city.name === cities.value);
  map.setView(new L.LatLng(cit.state[0], cit.state[1]), 11)
}
};

cities.addEventListener("change", (event) => {
  console.log (event.target.value)
  changeCity();  
});
