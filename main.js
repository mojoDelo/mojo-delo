const header__links = document.getElementsByClassName('header__link'),
    pop__btn = document.getElementsByClassName('pop__btn'),
    object__photo = document.getElementsByClassName('object__photo'),
    person__data = document.getElementsByClassName('person__data'),
    header__subtitle = document.getElementById('header__subtitle'),
    person = document.getElementById('person'),
    mainPages = document.querySelector('.mainPages'),
    sub__link = document.getElementsByClassName('sub__link');

const greenIcon = new L.Icon({
    iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-green.png',
    shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowSize: [41, 41]
});
const blueIcon = new L.Icon({
    iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-blue.png',
    shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowSize: [41, 41]
});
const goldIcon = new L.Icon({
    iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-gold.png',
    shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowSize: [41, 41]
});
const redIcon = new L.Icon({
    iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-red.png',
    shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowSize: [41, 41]
});
const coordinates = [
    Build = [
        { id: "32", name: "Ф.Скорына", tel: "375(94)752-18-31", icon: { icon: goldIcon }, cord: [52.396, 31.074], photos: ['img/auto1.jpg', 'img/auto2.jpg', 'img/beauty1.jpg', 'img/beauty2.jpg', 'img/build1.jpg', 'img/build2.jpg', 'img/fishing.jpg', 'img/handmade.png', 'img/Streetfood.jpg'], img: 'img/img/gomel.jpg', text: 'бетонные работы' },
        { id: "43", name: "Ф.Скорына", tel: "375(94)752-18-31", icon: { icon: greenIcon }, cord: [52.375, 31.009], photos: ['img/auto1.jpg', 'img/auto2.jpg', 'img/beauty1.jpg', 'img/beauty2.jpg', 'img/build1.jpg', 'img/build2.jpg', 'img/fishing.jpg', 'img/handmade.png', 'img/Streetfood.jpg'], img: 'img/img/gomel.jpg', text: 'сантехника' },
        { id: "2", name: "Ф.Скорына", tel: "375(94)752-18-31", icon: { icon: redIcon }, cord: [52.425, 30.999], photos: ['img/auto1.jpg', 'img/auto2.jpg', 'img/beauty1.jpg', 'img/beauty2.jpg', 'img/build1.jpg', 'img/build2.jpg', 'img/fishing.jpg', 'img/handmade.png', 'img/Streetfood.jpg'], img: 'img/img/gomel.jpg', text: 'прораб' },
        { id: "13", name: "Ф.Скорына", tel: "375(94)752-18-31", icon: { icon: greenIcon }, cord: [52.385, 30.884], photos: ['img/auto1.jpg', 'img/auto2.jpg', 'img/beauty1.jpg', 'img/beauty2.jpg', 'img/build1.jpg', 'img/build2.jpg', 'img/fishing.jpg', 'img/handmade.png', 'img/Streetfood.jpg'], img: 'img/img/gomel.jpg', text: 'электрика' },
        { id: "16", name: "Ф.Скорына", tel: "375(94)752-18-31", icon: { icon: goldIcon }, cord: [52.415, 30.947], photos: ['img/auto1.jpg', 'img/auto2.jpg', 'img/beauty1.jpg', 'img/beauty2.jpg', 'img/build1.jpg', 'img/build2.jpg', 'img/fishing.jpg', 'img/handmade.png', 'img/Streetfood.jpg'], img: 'img/img/gomel.jpg', text: 'кровля' },
        { id: "19", name: "Ф.Скорына", tel: "375(94)752-18-31", icon: { icon: blueIcon }, cord: [52.435, 30.964], photos: ['img/auto1.jpg', 'img/auto2.jpg', 'img/beauty1.jpg', 'img/beauty2.jpg', 'img/build1.jpg', 'img/build2.jpg', 'img/fishing.jpg', 'img/handmade.png', 'img/Streetfood.jpg'], img: 'img/img/gomel.jpg', text: 'молярные работы' }
    ],
    Car = [
        { id: "1", name: "Ф.Скорына", tel: "375(94)752-18-31", icon: { icon: redIcon }, cord: [52.425, 30.964], photos: ['img/auto1.jpg', 'img/auto2.jpg', 'img/beauty1.jpg', 'img/beauty2.jpg', 'img/build1.jpg', 'img/build2.jpg', 'img/fishing.jpg', 'img/handmade.png', 'img/Streetfood.jpg'], img: 'img/img/gomel.jpg', text: 'купить б/у авто' },
        { id: "41", name: "Ф.Скорына", tel: "375(94)752-18-31", icon: { icon: greenIcon }, cord: [52.405, 31.039], photos: ['img/auto1.jpg', 'img/auto2.jpg', 'img/beauty1.jpg', 'img/beauty2.jpg', 'img/build1.jpg', 'img/build2.jpg', 'img/fishing.jpg', 'img/handmade.png', 'img/Streetfood.jpg'], img: 'img/img/gomel.jpg', text: 'замена масла' },
        { id: "45", name: "Ф.Скорына", tel: "375(94)752-18-31", icon: { icon: redIcon }, cord: [52.351, 31.057], photos: ['img/auto1.jpg', 'img/auto2.jpg', 'img/beauty1.jpg', 'img/beauty2.jpg', 'img/build1.jpg', 'img/build2.jpg', 'img/fishing.jpg', 'img/handmade.png', 'img/Streetfood.jpg'], img: 'img/img/gomel.jpg', text: 'помощь в подборе авто' },
        { id: "18", name: "Ф.Скорына", tel: "375(94)752-18-31", icon: { icon: blueIcon }, cord: [52.445, 30.944], photos: ['img/auto1.jpg', 'img/auto2.jpg', 'img/beauty1.jpg', 'img/beauty2.jpg', 'img/build1.jpg', 'img/build2.jpg', 'img/fishing.jpg', 'img/handmade.png', 'img/Streetfood.jpg'], img: 'img/img/gomel.jpg', text: 'ремонт подвески' },
        { id: "20", name: "Ф.Скорына", tel: "375(94)752-18-31", icon: { icon: goldIcon }, cord: [52.415, 30.984], photos: ['img/auto1.jpg', 'img/auto2.jpg', 'img/beauty1.jpg', 'img/beauty2.jpg', 'img/build1.jpg', 'img/build2.jpg', 'img/fishing.jpg', 'img/handmade.png', 'img/Streetfood.jpg'], img: 'img/img/gomel.jpg', text: 'разборка микроавтобусов' }
    ],
    Beauty = [
        { id: "31", name: "Ф.Скорына", tel: "375(94)752-18-31", icon: { icon: blueIcon }, cord: [52.428, 31.077], photos: ['img/auto1.jpg', 'img/auto2.jpg', 'img/beauty1.jpg', 'img/beauty2.jpg', 'img/build1.jpg', 'img/build2.jpg', 'img/fishing.jpg', 'img/handmade.png', 'img/Streetfood.jpg'], img: 'img/img/gomel.jpg', text: 'стоматолог' },
        { id: "33", name: "Ф.Скорына", tel: "375(94)752-18-31", icon: { icon: redIcon }, cord: [52.432, 31.134], photos: ['img/auto1.jpg', 'img/auto2.jpg', 'img/beauty1.jpg', 'img/beauty2.jpg', 'img/build1.jpg', 'img/build2.jpg', 'img/fishing.jpg', 'img/handmade.png', 'img/Streetfood.jpg'], img: 'img/img/gomel.jpg', text: 'стилист' },
        { id: "42", name: "Ф.Скорына", tel: "375(94)752-18-31", icon: { icon: greenIcon }, cord: [52.385, 31.031], photos: ['img/auto1.jpg', 'img/auto2.jpg', 'img/beauty1.jpg', 'img/beauty2.jpg', 'img/build1.jpg', 'img/build2.jpg', 'img/fishing.jpg', 'img/handmade.png', 'img/Streetfood.jpg'], img: 'img/img/gomel.jpg', text: 'брови, ресницы' },
        { id: "9", name: "Ф.Скорына", tel: "375(94)752-18-31", icon: { icon: redIcon }, cord: [52.465, 31.034], photos: ['img/auto1.jpg', 'img/auto2.jpg', 'img/beauty1.jpg', 'img/beauty2.jpg', 'img/build1.jpg', 'img/build2.jpg', 'img/fishing.jpg', 'img/handmade.png', 'img/Streetfood.jpg'], img: 'img/img/gomel.jpg', text: 'стилист' },
        { id: "11", name: "Ф.Скорына", tel: "375(94)752-18-31", icon: { icon: goldIcon }, cord: [52.459, 30.954], photos: ['img/auto1.jpg', 'img/auto2.jpg', 'img/beauty1.jpg', 'img/beauty2.jpg', 'img/build1.jpg', 'img/build2.jpg', 'img/fishing.jpg', 'img/handmade.png', 'img/Streetfood.jpg'], img: 'img/img/gomel.jpg', text: 'фитнес' },
        { id: "15", name: "Ф.Скорына", tel: "375(94)752-18-31", icon: { icon: blueIcon }, cord: [52.405, 30.924], photos: ['img/auto1.jpg', 'img/auto2.jpg', 'img/beauty1.jpg', 'img/beauty2.jpg', 'img/build1.jpg', 'img/build2.jpg', 'img/fishing.jpg', 'img/handmade.png', 'img/Streetfood.jpg'], img: 'img/img/gomel.jpg', text: 'лечение ногтей' },
        { id: "17", name: "Ф.Скорына", tel: "375(94)752-18-31", icon: { icon: redIcon }, cord: [52.395, 30.960], photos: ['img/auto1.jpg', 'img/auto2.jpg', 'img/beauty1.jpg', 'img/beauty2.jpg', 'img/build1.jpg', 'img/build2.jpg', 'img/fishing.jpg', 'img/handmade.png', 'img/Streetfood.jpg'], img: 'img/img/gomel.jpg', text: 'стилист' }
    ],
    Travel = [
        { id: "12", name: "Ф.Скорына", tel: "375(94)752-18-31", icon: { icon: blueIcon }, cord: [52.465, 30.969], photos: ['img/auto1.jpg', 'img/auto2.jpg', 'img/beauty1.jpg', 'img/beauty2.jpg', 'img/build1.jpg', 'img/build2.jpg', 'img/fishing.jpg', 'img/handmade.png', 'img/Streetfood.jpg'], img: 'img/img/gomel.jpg', text: 'рыбалка' },
        { id: "14", name: "Ф.Скорына", tel: "375(94)752-18-31", icon: { icon: redIcon }, cord: [52.475, 30.924], photos: ['img/auto1.jpg', 'img/auto2.jpg', 'img/beauty1.jpg', 'img/beauty2.jpg', 'img/build1.jpg', 'img/build2.jpg', 'img/fishing.jpg', 'img/handmade.png', 'img/Streetfood.jpg'], img: 'img/img/gomel.jpg', text: 'необычное' },
        { id: "46", name: "Ф.Скорына", tel: "375(94)752-18-31", icon: { icon: greenIcon }, cord: [52.348, 30.989], photos: ['img/auto1.jpg', 'img/auto2.jpg', 'img/beauty1.jpg', 'img/beauty2.jpg', 'img/build1.jpg', 'img/build2.jpg', 'img/fishing.jpg', 'img/handmade.png', 'img/Streetfood.jpg'], img: 'img/img/gomel.jpg', text: 'шаурма' },
        { id: "3", name: "Ф.Скорына", tel: "375(94)752-18-31", icon: { icon: blueIcon }, cord: [52.445, 30.974], photos: ['img/auto1.jpg', 'img/auto2.jpg', 'img/beauty1.jpg', 'img/beauty2.jpg', 'img/build1.jpg', 'img/build2.jpg', 'img/fishing.jpg', 'img/handmade.png', 'img/Streetfood.jpg'], img: 'img/img/gomel.jpg', text: 'кемпинг' },
        { id: "6", name: "Ф.Скорына", tel: "375(94)752-18-31", icon: { icon: goldIcon }, cord: [52.489, 30.981], photos: ['img/auto1.jpg', 'img/auto2.jpg', 'img/beauty1.jpg', 'img/beauty2.jpg', 'img/build1.jpg', 'img/build2.jpg', 'img/fishing.jpg', 'img/handmade.png', 'img/Streetfood.jpg'], img: 'img/img/gomel.jpg', text: 'картинг' },
        { id: "10", name: "Ф.Скорына", tel: "375(94)752-18-31", icon: { icon: redIcon }, cord: [52.481, 31.014], photos: ['img/auto1.jpg', 'img/auto2.jpg', 'img/beauty1.jpg', 'img/beauty2.jpg', 'img/build1.jpg', 'img/build2.jpg', 'img/fishing.jpg', 'img/handmade.png', 'img/Streetfood.jpg'], img: 'img/img/gomel.jpg', text: 'туритстическое агенство' }
    ],
    Other = [
        { id: "5", name: "Ф.Скорына", tel: "375(94)752-18-31", icon: { icon: goldIcon }, cord: [52.465, 30.994], photos: ['img/auto1.jpg', 'img/auto2.jpg', 'img/beauty1.jpg', 'img/beauty2.jpg', 'img/build1.jpg', 'img/build2.jpg', 'img/fishing.jpg', 'img/handmade.png', 'img/Streetfood.jpg'], img: 'img/img/gomel.jpg', text: 'бухгалтер' },
        { id: "7", name: "Ф.Скорына", tel: "375(94)752-18-31", icon: { icon: redIcon }, cord: [52.445, 31.014], photos: ['img/auto1.jpg', 'img/auto2.jpg', 'img/beauty1.jpg', 'img/beauty2.jpg', 'img/build1.jpg', 'img/build2.jpg', 'img/fishing.jpg', 'img/handmade.png', 'img/Streetfood.jpg'], img: 'img/img/gomel.jpg', text: 'полет в космос' },
        { id: "4", name: "Ф.Скорына", tel: "375(94)752-18-31", icon: { icon: greenIcon }, cord: [52.445, 30.994], photos: ['img/auto1.jpg', 'img/auto2.jpg', 'img/beauty1.jpg', 'img/beauty2.jpg', 'img/build1.jpg', 'img/build2.jpg', 'img/fishing.jpg', 'img/handmade.png', 'img/Streetfood.jpg'], img: 'img/img/gomel.jpg', text: 'ремонт принтеров' },
        { id: "8", name: "Ф.Скорына", tel: "375(94)752-18-31", icon: { icon: blueIcon }, cord: [52.465, 31.014], photos: ['img/auto1.jpg', 'img/auto2.jpg', 'img/beauty1.jpg', 'img/beauty2.jpg', 'img/build1.jpg', 'img/build2.jpg', 'img/fishing.jpg', 'img/handmade.png', 'img/Streetfood.jpg'], img: 'img/img/gomel.jpg', text: 'нарды ручной работы' },
        { id: "44", name: "Ф.Скорына", tel: "375(94)752-18-31", icon: { icon: redIcon }, cord: [52.359, 31.019], photos: ['img/auto1.jpg', 'img/auto2.jpg', 'img/beauty1.jpg', 'img/beauty2.jpg', 'img/build1.jpg', 'img/build2.jpg', 'img/fishing.jpg', 'img/handmade.png', 'img/Streetfood.jpg'], img: 'img/img/gomel.jpg', text: 'няня' }
    ]
];
const pagesContent = [
    Build = [
        { id: "1", name: 'ОТДЕЛОЧНЫЕ' },
        { id: "2", name: 'СПЕЦИАЛЬНЫЕ' },
        { id: "3", name: 'ОБЩЕСТРОИТЕЛЬНЫЕ' },
        { id: "4", name: 'ДРУГОЕ' }
    ],
    Car = [
        { id: "1", name: 'РЕМОНТ' },
        { id: "2", name: 'ОБСЛУЖИВАНИЕ' },
        { id: "3", name: 'ЗАПЧАСТИ' },
        { id: "4", name: 'ДРУГОЕ' }
    ],
    Beauty = [
        { id: "1", name: 'МЕДИЦИНА' },
        { id: "2", name: 'КОСМЕТИЧЕСКИЕ УСЛУГИ' },
        { id: "3", name: 'СПОРТ' },
        { id: "4", name: 'ДРУГОЕ' }
    ],
    Travel = [
        { id: "1", name: 'ПРИРОДА' },
        { id: "2", name: 'ЕДА' },
        { id: "3", name: 'РАЗВЛЕЧЕНИЯ' },
        { id: "4", name: 'ДРУГОЕ' }
    ],
    Other = [
        { id: "1", name: 'ИСКУССТВО' },
        { id: "2", name: 'ТЕХНИКА' },
        { id: "3", name: 'ФИНАНСЫ' },
        { id: "4", name: 'ДРУГОЕ' }
    ]

];

const center = [52.4345, 30.9754];

const map = L.map('map').setView(center, 12);
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    minZoom: 6,
    maxZoom: 17,
    attribution: '© OpenStreetMap'
}).addTo(map);
const markerGroup = L.layerGroup().addTo(map);
const addMarkers = () => {
    let num = 0;
    for (element of coordinates) {
        
        for (mark of element) {
            L.marker(mark.cord, mark.icon)
                .addTo(markerGroup)
                .bindPopup(
                    `<section id="${mark.id}" class="${num}"> 
        <p class="pop__into">${mark.name}</p>
        <p>${mark.text}</p>
        <a href="tel:${mark.tel}">${mark.tel}</a>
        </section>`);
        }
        num ++;
    }
};
addMarkers();



const changePage = (num) => {
    header__subtitle.classList.add("active")
    let n = 0;
    for (page of sub__link) {
        page.innerHTML = pagesContent[num - 1][n].name;
        n++;
    }

}
const changeSubClass = (el) => {
    let num = el.target.id
    for (link of sub__link) {
        link.classList.remove("active")
    }
    sub__link[num].classList.add("active")
}
for (link of sub__link) {
    link.addEventListener('click', link => changeSubClass(link))
};
const moreInfo = (pag, sun) => {
    console.log(pag)
    console.log(sun)
    let obj = coordinates[pag].filter(el => el.id == sun)[0]
    console.log(obj)
    let n = 0;
    let photos = obj.photos
    person__data[0].innerHTML = obj.name;
    person__data[1].innerHTML = obj.text
    person__data[2].innerHTML = obj.tel;
    person__data[2].href = `tel:${obj.tel}`;
    person.classList.add('active')
    console.log(object__photo)
    for (photo of object__photo) {
        console.log(photo.src)
        photo.src = photos[n];
        n++
    };
    person.classList.add('active')
}

const changeClass = (el) => {
    markerGroup.clearLayers()
    let num = el.target.id
    if (num == 0) {
        header__subtitle.classList.remove("active")
        mainPages.classList.add('active')
        for (link of header__links) {
            link.classList.remove("active")
        };
        person.classList.remove('active')
        header__links[0].classList.add("active")
        addMarkers();
    } else {
        mainPages.classList.remove('active')
        for (link of header__links) {
            link.classList.remove("active")
        }
        header__links[num].classList.add("active")

        changePage(num);
        for (mark of coordinates[num - 1]) {
            L.marker(mark.cord, mark.icon)
                .addTo(markerGroup)
                // .on('click', markerOnClick(mark))
                .bindPopup(
                    `<section id="${mark.id}" class="${num - 1}"> 
                <p class="pop__into">${mark.name}</p>
                <p>${mark.text}</p>
                <a href="tel:${mark.tel}">${mark.tel}</a>
                </section>`);
        }
    }
    console.log(markerGroup)
}
var _bindPopupClick = function (e) {
    let sun = e.popup._wrapper.children[0].children[0].id;
    let pag = e.popup._wrapper.children[0].children[0].className;
    if (e.popup) {
        e.popup._wrapper.addEventListener('click', moreInfo(pag, sun));
    }
}
map.on('popupopen', _bindPopupClick)
for (link of header__links) {
    link.addEventListener('click', link => changeClass(link))
}