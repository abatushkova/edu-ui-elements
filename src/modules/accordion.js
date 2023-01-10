export const toggleAccordionItem = (e) => {
  const target = e.target;
  if (target.className !== 'accordion__toggler') return;

  target.closest('.accordion__item').classList.toggle('is-active');
};
