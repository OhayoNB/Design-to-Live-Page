'use strict'

function toggleMenu(el) {
  document
    .querySelector('.main-nav-list')
    .classList.toggle('mobile-menu-height')

  el.classList.toggle('change')
}

function openModal() {
  document.querySelector('.modal').style.display = 'flex'
  document.querySelector('.main-screen').style.display = 'block'
}

function closeModal() {
  document.querySelector('.modal').style.display = 'none'
  document.querySelector('.main-screen').style.display = 'none'
}
