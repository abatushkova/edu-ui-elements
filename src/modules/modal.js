const modal = document.querySelector('#modal');
const sidebar = document.querySelector('#sidebar');

export const toggleOverlay = (e) => {
  const target = e.target.dataset.target;
  const overlay = document.getElementById(target);

  overlay.classList.toggle('is-open');
};

export const closeOverlay = (e) => {
  const target = e.target;

  if (target === sidebar || target === modal) {
    target.classList.remove('is-open');
  }
};
