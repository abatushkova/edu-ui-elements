const html = document.documentElement;

if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
  html.setAttribute('data-theme', 'dark');
} else {
  html.setAttribute('data-theme', 'light');
}

export const toggleTheme = (e) => {
  html.setAttribute(
    'data-theme',
    e.target.checked ? 'dark' : 'light'
  );
};
