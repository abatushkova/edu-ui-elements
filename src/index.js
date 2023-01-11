import { setActiveLink } from './modules/navbar.js';
import { setActiveTab } from './modules/tab.js';
import { scrollToTarget } from './modules/scrollTo.js';
import { toggleOverlay, closeOverlay } from './modules/modal.js';
import { toggleAccordionItem } from './modules/accordion.js';
import { toggleTheme } from './modules/theme.js';

const navbar = document.querySelector('#navbar');
const openNavbarBtn = document.querySelector('#openNavbar');
const closeNavbarBtn = document.querySelector('#closeNavbar');
const openModalBtn = document.querySelector('#openModal');
const closeModalBtn = document.querySelector('#closeModal');
const anchorLinks = document.querySelectorAll('a[href^="#"]');
const tabs = document.querySelector('#tabs');
const accordion = document.querySelector('#accordion');
const themeToggler = document.querySelector('#themeToggler');

anchorLinks.forEach(link => link.addEventListener('click', scrollToTarget));
themeToggler.addEventListener('change', toggleTheme);
tabs.addEventListener('click', setActiveTab);
accordion.addEventListener('click', toggleAccordionItem);
navbar.addEventListener('click', setActiveLink);
openNavbarBtn.addEventListener('click', toggleOverlay);
closeNavbarBtn.addEventListener('click', toggleOverlay);
openModalBtn.addEventListener('click', toggleOverlay);
closeModalBtn.addEventListener('click', toggleOverlay);
window.addEventListener('click', closeOverlay);
// window.addEventListener('scroll', toggleFixedNavbar);
