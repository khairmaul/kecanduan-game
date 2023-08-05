/* eslint-disable */

export const hideLoader = () => {
  const el = document.querySelector('.loader');
  if (el) el.parentElement.removeChild(el);
};

export const showLoader = () => {
  hideLoader();
  const markup = `<div class="loader"></div>`;
  document.querySelector('body').insertAdjacentHTML('afterbegin', markup);
};
