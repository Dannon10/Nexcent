'use strict'

const toggleBtn = document.querySelector('.toggle-btn');
const toggleBtnIcon = document.querySelector('.toggle-btn i');
const dropDownMenu = document.querySelector('.dropdown-menu');
const bodyBlur = document.querySelector('.body-blur')
const overlay = document.querySelector(".overlay");
const btnCloseModal = document.querySelector('.close-modal');



const closeModal = () => {
    modal.classList.add('hidden')
    overlay.classList.add('hidden')
};

btnCloseModal.addEventListener('click', closeModal)
overlay.addEventListener('click', closeModal)

toggleBtn.onclick = function() {
    dropDownMenu.classList.toggle('open')
    const isOpen = dropDownMenu.classList.contains('open')

    toggleBtnIcon.classList = isOpen ? 'fa-solid fa-xmark' : 'fa-solid fa-bars'
}