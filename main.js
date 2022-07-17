const header__links = document.getElementsByClassName("header__link"),
  pop__btn = document.getElementsByClassName("pop__btn"),
  person__data = document.getElementsByClassName("person__data"),
  header__subtitle = document.getElementById("header__subtitle"),
  person = document.getElementById("person"),
  categories = document.getElementById("categories"),
  cost = document.getElementById("cost"),
  mainPages = document.querySelector(".mainPages"),
  sub__link = document.getElementsByClassName("sub__link");

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
        img: "img/img/gomel.jpg",
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
        img: "img/img/gomel.jpg",
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
        img: "img/img/gomel.jpg",
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
        img: "img/img/gomel.jpg",
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
        img: "img/img/gomel.jpg",
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
        img: "img/img/gomel.jpg",
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
        img: "img/img/gomel.jpg",
        text: " Шлифовка, конопатка, покрытие пропиткой, гермитизация швов, cпил деревьев, уборка участка.",
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
        img: "img/img/gomel.jpg",
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
        img: "img/img/gomel.jpg",
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
        img: "img/img/gomel.jpg",
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
        img: "img/img/gomel.jpg",
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
        img: "img/img/gomel.jpg",
        text: "конные прогулки"
      }
    ]),
    (art = []),
    (fun = [
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
        img: "img/img/gomel.jpg",
        text: "Арт-Салон",
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
        img: "img/img/gomel.jpg",
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
        img: "img/img/gomel.jpg",
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
        img: "img/img/gomel.jpg",
        text: "Декор",
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
        img: "img/img/gomel.jpg",
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
      id: "2",
      name: "РАЗВЛЕЧЕНИЯ",
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

const center = [52.4345, 30.9754];

const map = L.map("map").setView(center, 11);
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
