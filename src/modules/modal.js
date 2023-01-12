import { navbar, modal } from "../utils/constants.js";

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
