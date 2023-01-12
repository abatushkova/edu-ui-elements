import { themeToggler, iconDark, iconLight } from '../utils/constants.js';
const html = document.documentElement;

const setThemeIcon = (mode) => {
  if (mode === 'dark') {
    iconDark.classList.add('hide');
    iconLight.classList.remove('hide');
  } else {
    iconLight.classList.add('hide');
    iconDark.classList.remove('hide');
  }
};

export const setTheme = () => {
  if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
    html.setAttribute('data-theme', 'dark');
    setThemeIcon('dark');
    themeToggler.checked = true;
  } else {
    html.setAttribute('data-theme', 'light');
    setThemeIcon('light');
    themeToggler.checked = false;
  }
}

export const toggleTheme = (e) => {
  let mode = '';

  if (e.target.checked) {
    mode = 'dark';
    setThemeIcon('dark');
  } else {
    mode = 'light';
    setThemeIcon('light');
  }

  html.setAttribute('data-theme', mode);
}
