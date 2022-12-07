const navbar = document.querySelector('#nav');
// const header = document.querySelector('#header');
// const topOfNavbar = navbar.offsetTop;
const sidebar = document.querySelector('#sidebar');
const openSidebarBtn = document.querySelector('#openSidebar');
const closeSidebarBtn = document.querySelector('#closeSidebar');
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

const openSidebar = () => {
  sidebar.classList.add('is-open');
};

const closeSidebar = () => {
  sidebar.classList.remove('is-open');
}

const closeModal = (e) => {
  const target = e.target;

  if (target == sidebar) closeSidebar();
  if (target.closest('#closeSidebar')) closeSidebar();
};

navbar.addEventListener('click', setActiveLink);
// window.addEventListener('scroll', toggleFixedNavbar);
openSidebarBtn.addEventListener('click', openSidebar);
closeSidebarBtn.addEventListener('click', closeModal);
window.addEventListener('click', closeModal);
