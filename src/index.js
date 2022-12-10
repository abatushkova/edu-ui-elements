const navbar = document.querySelector('#nav');
// const header = document.querySelector('#header');
// const topOfNavbar = navbar.offsetTop;
const sidebar = document.querySelector('#sidebar');
const openSidebarBtn = document.querySelector('#openSidebar');
const closeSidebarBtn = document.querySelector('#closeSidebar');
const modal = document.querySelector('#modal');
const openModalBtn = document.querySelector('#openModal');
const closeModalBtn = document.querySelector('#closeModal');
const anchorLinks = document.querySelectorAll('a[href^="#"]');
const tabs = document.querySelector('#tabs');
const tabsBtns = document.querySelectorAll('.ui__tabs-button');
const tabsItems = document.querySelectorAll('.ui__tabs-item');
let activeLink = null;

const highlightActiveLink = (link) => {
  if (activeLink) {
    activeLink.classList.remove('is-active');
  }

  activeLink = link;
  activeLink.classList.add('is-active');
};

const setActiveLink = (e) => {
  e.preventDefault();
  const target = e.target;

  if (target.tagName != 'A') return;

  highlightActiveLink(target);
};

// const toggleFixedNavbar = () => {
//   if (window.scrollY >= topOfNavbar) {
//     header.style.paddingBottom = `${navbar.offsetHeight}px`;
//     navbar.classList.add('is-fixed');
//   } else {
//     header.style.paddingBottom = 0;
//     navbar.classList.remove('is-fixed');
//   }
// };

const toggleOverlay = (e) => {
  const target = e.target.dataset.target;
  const overlay = document.getElementById(target);

  overlay.classList.toggle('is-open');
};

const closeOverlay = (e) => {
  const target = e.target;

  if (target === sidebar || target === modal) {
    target.classList.remove('is-open');
  }
};

const highlightActiveTab = (btn, id) => {
  tabsBtns.forEach(btn => btn.classList.remove('is-active'));
  tabsItems.forEach(item => item.classList.remove('is-active'));

  const item = document.getElementById(id);
  item.classList.add('is-active');
  btn.classList.add('is-active');
}

const setActiveTab = (e) => {
  const tabBtn = e.target;
  const tabId = tabBtn.dataset.id;

  if (!tabId) return;

  highlightActiveTab(tabBtn, tabId);
}

const scrollToTarget = (e) => {
  e.preventDefault();

  const hashId = e.target.getAttribute('href');
  const target = document.querySelector(hashId);

  target.scrollIntoView({
    behavior: 'smooth',
    block: 'start'
  });
  history.pushState(null, '', hashId);
};

anchorLinks.forEach(link => link.addEventListener('click', scrollToTarget));

tabs.addEventListener('click', setActiveTab);
navbar.addEventListener('click', setActiveLink);
// window.addEventListener('scroll', toggleFixedNavbar);
openSidebarBtn.addEventListener('click', toggleOverlay);
closeSidebarBtn.addEventListener('click', toggleOverlay);
openModalBtn.addEventListener('click', toggleOverlay);
closeModalBtn.addEventListener('click', toggleOverlay);
window.addEventListener('click', closeOverlay);
