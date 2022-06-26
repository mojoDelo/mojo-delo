const prev = document.getElementById('btn-prev'),
    next = document.getElementById('btn-next'),
    
    slides = document.querySelectorAll('.object__photo'),
    object = document.querySelector('.object.active'),
    objects = document.querySelectorAll('.object'),
    dots = document.querySelectorAll('.dot');

let number = 0;

const activeDot = el => {
    console.log(el.target.id)
    for(dot of dots) {
        dot.classList.remove('active');
    }
    el.target.classList.add('active');
    number = el.target.id;
    for(obj of objects) {
        obj.classList.remove('active');
        obj.id = "";
    }
    objects[number].classList.add('active');
    objects[number].id = "active";
}

for (dot of dots) {
    dot.addEventListener('click', dot => activeDot(dot))
};
let index = 0;

const activeSlide = n => {

    console.log((number*3 + n)) 
    console.log(n)
    console.log(number)
    for(let i=number*3; i<(number*3 + 3);i++) {
        slides[i].classList.remove('active');
    }
    slides[(number*3 + n)].classList.add('active');
    console.log(slides[(number*3 + n)]) 
}

const prepareCurrentSlide = ind => {
    activeSlide(ind);
}

const nextSlide = () => {
    if(index == objects.length - 1) {
        index = 0;
        prepareCurrentSlide(index);
    } else {
        index++;
        prepareCurrentSlide(index);
    }   
}

const prevSlide = () => {
    if(index == 0) {
        index = objects.length - 1;
        prepareCurrentSlide(index);
    } else {
        index--;
        prepareCurrentSlide(index);
    }   
} 
next.addEventListener('click', nextSlide);
prev.addEventListener('click', prevSlide);