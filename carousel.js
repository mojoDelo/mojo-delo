prevB = document.getElementById('animal__btn_prev'),
nextB = document.getElementById('animal__btn_next'),
carousel = document.getElementById('carousel'),

item_left = document.getElementById('item__left'),
item_right = document.getElementById('item__right'),
item_active = document.getElementById('item__active'),

imgs = document.getElementsByClassName('img'),
// slides = document.getElementsByClassName('animal'),
icons = document.getElementsByClassName('animal__about_img'),
from = document.getElementsByClassName('animal__about_from'),
names = document.getElementsByClassName('animal__about_name');
  
  const moveRight = () => {
    carousel.classList.add("transition_right");
    nextB.removeEventListener('click', moveRight);
    prevB.removeEventListener('click', moveLeft);
  }
  const moveLeft = () => {
    carousel.classList.add("transition_left");
    prevB.removeEventListener('click', moveLeft);
    nextB.removeEventListener('click', moveRight);
  }
  nextB.addEventListener('click', moveRight);
  prevB.addEventListener('click', moveLeft);
  let completedSlides = [];  
    
  carousel.addEventListener("animationend", (animationEvent) => { 
    prevB.addEventListener('click', moveLeft);
    nextB.addEventListener('click', moveRight); 
    let children_r = item_right.children;
    let children_a = item_active.children;
    let children_l = item_left.children;
    // console.log(children_r)
    if (animationEvent.animationName === "move_left") {    
      
      carousel.classList.remove("transition_left");
      completedSlides = [];

      let Random = () => {
        for (i = 0; i < children_a.length; i++) {
            children_a[i].innerHTML = children_l[i].innerHTML;
            children_a[i].id = children_l[i].id;
            children_r[i].innerHTML = children_a[i].innerHTML;
            children_r[i].id = children_a[i].id;          
        }
      }
      Random();
      
      for (i = 0; i < children_a.length; i++) {
        let newCards = () => {
            let randomNumber = Math.floor(Math.random() * coordinates.length);
            console.log(coordinates[randomNumber]);
            let randomNumber1 = Math.floor(Math.random() * coordinates[randomNumber].length);
            console.log(coordinates[randomNumber][randomNumber1]);
            console.log(randomNumber1);
            if (coordinates[randomNumber][randomNumber1].length == 0){
                newCards()   
            } else {
                let randomNumber2 = Math.floor(Math.random() * coordinates[randomNumber][randomNumber1].length);
                console.log(randomNumber2);
                console.log(coordinates[randomNumber][randomNumber1][randomNumber2]);
                if (!coordinates[randomNumber][randomNumber1][randomNumber2].name){
                    let randomNumber3 = Math.floor(Math.random() * coordinates[randomNumber][randomNumber1][randomNumber2].length);
                    console.log(coordinates[randomNumber][randomNumber1][randomNumber2][randomNumber3]);
                    alert(`bad gone ${i}`); 
                } else {
                    children_l[i].id = coordinates[randomNumber][randomNumber1][randomNumber2].id
                    children_l[i].children[0].children[0].src = coordinates[randomNumber][randomNumber1][randomNumber2].photos[0];
                    children_l[i].children[1].children[0].children[0].innerHTML = `${coordinates[randomNumber][randomNumber1][randomNumber2].name}, ${coordinates[randomNumber][randomNumber1][randomNumber2].loc}`;
                    children_l[i].children[1].children[0].children[1].innerHTML = coordinates[randomNumber][randomNumber1][randomNumber2].tel;
                    children_l[i].children[1].children[1].src = coordinates[randomNumber][randomNumber1][randomNumber2].ic;               
                    }
                }
        }  
        newCards();
    }     
    //   let newCards = () =>{
    //     for (i = 0; i < children_a.length; i++) {
    //         children_l[i].id = completedSlides[i].cardId
    //         children_l[i].children[0].children[0].src = completedSlides[i].img;
    //         children_l[i].children[1].children[0].children[0].innerHTML = completedSlides[i].name;
    //         children_l[i].children[1].children[0].children[1].innerHTML.innerHTML = completedSlides[i].from;
    //         children_l[i].children[1].children[1].src = completedSlides[i].icon;
    //     }
    //   }    
    //   newCards();
      console.log(children_l)
    } else {
      carousel.classList.remove("transition_right");
      completedSlides = [];
      let Random = () => {
        for (i = 0; i < children_a.length; i++) {
            
            children_l[i].innerHTML = children_a[i].innerHTML;
            children_l[i].id = children_a[i].id;
            children_a[i].innerHTML = children_r[i].innerHTML;
            children_a[i].id = children_r[i].id;
        }
      }
      Random();
  
      
        console.log(children_r)
        for (i = 0; i < children_a.length; i++) {
            let newCards = () => {
                let randomNumber = Math.floor(Math.random() * coordinates.length);
                console.log(coordinates[randomNumber]);
                let randomNumber1 = Math.floor(Math.random() * coordinates[randomNumber].length);
                console.log(coordinates[randomNumber][randomNumber1]);
                console.log(randomNumber1);
                if (coordinates[randomNumber][randomNumber1].length == 0){
                    newCards()   
                } else {
                    let randomNumber2 = Math.floor(Math.random() * coordinates[randomNumber][randomNumber1].length);
                    console.log(randomNumber2);
                    console.log(coordinates[randomNumber][randomNumber1][randomNumber2]);
                    if (!coordinates[randomNumber][randomNumber1][randomNumber2].name){
                        let randomNumber3 = Math.floor(Math.random() * coordinates[randomNumber][randomNumber1][randomNumber2].length);
                        console.log(coordinates[randomNumber][randomNumber1][randomNumber2][randomNumber3]);
                        alert(`bad gone ${i}`); 
                    } else {
                        children_r[i].id = coordinates[randomNumber][randomNumber1][randomNumber2].id
                        children_r[i].children[0].children[0].src = coordinates[randomNumber][randomNumber1][randomNumber2].photos[0];
                        children_r[i].children[1].children[0].children[0].innerHTML = `${coordinates[randomNumber][randomNumber1][randomNumber2].name}, ${coordinates[randomNumber][randomNumber1][randomNumber2].loc}`;
                        children_r[i].children[1].children[0].children[1].innerHTML = coordinates[randomNumber][randomNumber1][randomNumber2].tel;
                        children_r[i].children[1].children[1].src = coordinates[randomNumber][randomNumber1][randomNumber2].ic;               
                        }
                    }
            }  
            newCards();
        }    
      console.log(children_r)
    }
    // for (btn of btnOpen) {
    //   btn.addEventListener('click', e => openModal(e));
    // };
    
  })