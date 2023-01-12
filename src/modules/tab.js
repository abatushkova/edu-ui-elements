import { tabsBtns, tabsItems } from "../utils/constants.js";

const highlightActiveTab = (btn, id) => {
  tabsBtns.forEach(btn => btn.classList.remove('is-active'));
  tabsItems.forEach(item => item.classList.remove('is-active'));

  const item = document.getElementById(id);
  item.classList.add('is-active');
  btn.classList.add('is-active');
};

export const setActiveTab = (e) => {
  const tabBtn = e.target;
  const tabId = tabBtn.dataset.id;

  if (!tabId) return;

  highlightActiveTab(tabBtn, tabId);
};
