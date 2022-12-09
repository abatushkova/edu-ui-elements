const navbar = document.querySelector('#nav');
// const header = document.querySelector('#header');
// const topOfNavbar = navbar.offsetTop;
const sidebar = document.querySelector('#sidebar');
const openSidebarBtn = document.querySelector('#openSidebar');
const closeSidebarBtn = document.querySelector('#closeSidebar');
const modal = document.querySelector('#modal');
const openModalBtn = document.querySelector('#openModal');
const closeModalBtn = document.querySelector('#closeModal');
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
}

navbar.addEventListener('click', setActiveLink);
// window.addEventListener('scroll', toggleFixedNavbar);
openSidebarBtn.addEventListener('click', toggleOverlay);
closeSidebarBtn.addEventListener('click', toggleOverlay);
openModalBtn.addEventListener('click', toggleOverlay);
closeModalBtn.addEventListener('click', toggleOverlay);
window.addEventListener('click', closeOverlay);
