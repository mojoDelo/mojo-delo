const modal = document.getElementById('wrapper-modal'),
  overlay = document.getElementById('overlay'),
  modal_img = document.getElementById('modal_img'),
  open_info = document.getElementById("open_info"),
  btnClose = document.getElementById('btn-close');

const openModal = (el) => {
  modal.classList.add('active');
  body.classList.add('lock');
}
function closeModal() {
  modal.classList.remove('active');
  body.classList.remove('lock');
}
open_info.addEventListener('click', openModal);
overlay.addEventListener('click', closeModal);
btnClose.addEventListener('click', closeModal);