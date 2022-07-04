const object__photo = document.getElementsByClassName('object__photo');

const moreInfo = (pag, sun) => {
    console.log(pag)
    console.log(sun)
    let obj = {};    
    for (list of coordinates[pag]) {
        for (lis of list) {
            if(lis !== []) {
                if(lis.id == sun) {
                    obj = lis;
                }
            }
        }
    }
    let n = 0;
    let photos = obj.photos;
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

var _bindPopupClick = function (e) {
    console.log(e.popup._wrapper.children[0].children[0])
    let sun = e.popup._wrapper.children[0].children[0].id;
    let pag = e.popup._wrapper.children[0].children[0].className;

    if (e.popup) {
        e.popup._wrapper.addEventListener('click', moreInfo(pag, sun));
    }
}

map.on('popupopen', _bindPopupClick)