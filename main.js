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
        id: "19",
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
      },
    ]),
    (special = []),
    (general = [
      {
        id: "32",
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
    (repair = []),
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
    (nature = []),
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
    (otherr = []),
    (other = []),
  ]),
];
const pagesContent = [
  (Build = [
    {
      id: "1",
      name: "ОТДЕЛОЧНЫЕ",
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
      id: "2",
      name: "СПЕЦИАЛЬНЫЕ",
      categories: [
        {
          name: "под ключ",
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
          color: "red",
          coast: [
            { name: "шпатлёвка под обои", pay: "3" },
            { name: "шпатлёвка под покраску", pay: "6" },
            { name: "штукатурка по маякам", pay: "4" },
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
          name: "под ключ",
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
      name: "ОБСЛУЖИВАНИЕ",
      categories: [
        {
          name: "под ключ",
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
      name: "ЗАПЧАСТИ",
      categories: [
        {
          name: "под ключ",
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
          name: "под ключ",
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
      name: "СПОРТ",
      categories: [
        {
          name: "под ключ",
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
          name: "под ключ",
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
      name: "ИСКУССТВО",
      categories: [
        {
          name: "под ключ",
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
      name: "РАЗВЛЕЧЕНИЯ",
      categories: [
        {
          name: "под ключ",
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
      name: "ИСКУССТВО",
      categories: [
        {
          name: "под ключ",
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
      name: "ТЕХНИКА",
      categories: [
        {
          name: "под ключ",
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
      name: "ФИНАНСЫ",
      categories: [
        {
          name: "под ключ",
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
          coast: [
            { name: "шпатлёвка под обои", pay: "3" },
            { name: "шпатлёвка под покраску", pay: "6" },
            { name: "штукатурка по маякам", pay: "4" },
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
