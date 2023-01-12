import { setActiveLink } from './modules/navbar.js';
import { setActiveTab } from './modules/tab.js';
import { scrollToTarget } from './modules/scrollTo.js';
import { toggleOverlay, closeOverlay } from './modules/modal.js';
import { toggleAccordionItem } from './modules/accordion.js';
import { toggleTheme, setTheme } from './modules/theme.js';
import {
  navbar,
  openNavbarBtn,
  closeNavbarBtn,
  openModalBtn,
  closeModalBtn,
  anchorLinks,
  tabs,
  accordion,
  themeToggler
} from './utils/constants.js';

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
document.addEventListener('DOMContentLoaded', setTheme);
