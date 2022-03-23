'use strict';
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const closeButton = document.querySelector('.close-modal');
const btnsOpenModal = document.querySelectorAll('.show-modal');
const toggleHidden = () => {
  modal.classList.toggle('hidden');
  overlay.classList.toggle('hidden');
};
for (let i = 0; i < btnsOpenModal.length; i++) {
  btnsOpenModal[i].addEventListener('click', toggleHidden);
}
closeButton.addEventListener('click', toggleHidden);
document.addEventListener('keydown', e => {
  console.log(modal.classList.contains('hidden'));
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    toggleHidden();
  }
});
