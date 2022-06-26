const icon__info = document.querySelectorAll('.icon__info');

const changeClassInfo = (el) => {
    el.target.parentNode.children[1].classList.toggle("active")
    el.target.parentNode.children[2].classList.toggle("active")
}

for (btn of icon__info) {
    btn.addEventListener('click', btn => changeClassInfo(btn))
}