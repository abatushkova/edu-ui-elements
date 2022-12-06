const navbar = document.querySelector('#nav');
const header = document.querySelector('#header');
const topOfNavbar = navbar.offsetTop;
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

const toggleFixedNavbar = () => {
  if (window.scrollY >= topOfNavbar) {
    header.style.paddingBottom = `${navbar.offsetHeight}px`;
    navbar.classList.add('is-fixed');
  } else {
    header.style.paddingBottom = 0;
    navbar.classList.remove('is-fixed');
  }
};

navbar.addEventListener('click', setActiveLink);
window.addEventListener('scroll', toggleFixedNavbar);
