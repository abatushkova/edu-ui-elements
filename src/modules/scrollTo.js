export const scrollToTarget = (e) => {
  e.preventDefault();

  const hashId = e.target.getAttribute('href');
  const target = document.querySelector(hashId);

  target.scrollIntoView({
    behavior: 'smooth',
    block: 'start'
  });
  history.pushState(null, '', hashId);
};
