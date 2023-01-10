import { setActiveLink } from './modules/navbar.js';
import { setActiveTab } from './modules/tab.js';
import { scrollToTarget } from './modules/scrollTo.js';
import { toggleOverlay, closeOverlay } from './modules/modal.js';

const navbar = document.querySelector('#nav');
const sidebar = document.querySelector('#sidebar');
const openSidebarBtn = document.querySelector('#openSidebar');
const closeSidebarBtn = document.querySelector('#closeSidebar');
const openModalBtn = document.querySelector('#openModal');
const closeModalBtn = document.querySelector('#closeModal');
const anchorLinks = document.querySelectorAll('a[href^="#"]');
const tabs = document.querySelector('#tabs');

anchorLinks.forEach(link => link.addEventListener('click', scrollToTarget));

navbar.addEventListener('click', setActiveLink);
sidebar.addEventListener('click', setActiveLink);
// window.addEventListener('scroll', toggleFixedNavbar);
openSidebarBtn.addEventListener('click', toggleOverlay);
closeSidebarBtn.addEventListener('click', toggleOverlay);
openModalBtn.addEventListener('click', toggleOverlay);
closeModalBtn.addEventListener('click', toggleOverlay);
window.addEventListener('click', closeOverlay);
tabs.addEventListener('click', setActiveTab);
