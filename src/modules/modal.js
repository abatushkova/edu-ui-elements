const modal = document.querySelector('#modal');
const navbar = document.querySelector('#navbar');

export const toggleOverlay = (e) => {
  const target = e.target.dataset.target;
  const overlay = document.getElementById(target);

  overlay.classList.toggle('is-open');
};

export const closeOverlay = (e) => {
  const target = e.target;

  if (target === navbar || target === modal) {
    target.classList.remove('is-open');
  }
};
