const navbar = document.querySelector('#navbar');
const openNavbarBtn = document.querySelector('#openNavbar');
const closeNavbarBtn = document.querySelector('#closeNavbar');
const modal = document.querySelector('#modal');
const openModalBtn = document.querySelector('#openModal');
const closeModalBtn = document.querySelector('#closeModal');
const anchorLinks = document.querySelectorAll('a[href^="#"]');
const tabs = document.querySelector('#tabs');
const tabsBtns = document.querySelectorAll('.ui__tabs-button');
const tabsItems = document.querySelectorAll('.ui__tabs-item');
const accordion = document.querySelector('#accordion');
const themeToggler = document.querySelector('#themeToggler');
const iconDark = document.querySelector('#iconDark');
const iconLight = document.querySelector('#iconLight');
// const topOfNavbar = navbar.offsetTop;
// const header = document.querySelector('#header');

export {
  navbar,
  openNavbarBtn,
  closeNavbarBtn,
  modal,
  openModalBtn,
  closeModalBtn,
  anchorLinks,
  tabs,
  tabsBtns,
  tabsItems,
  accordion,
  themeToggler,
  iconDark,
  iconLight,
}
