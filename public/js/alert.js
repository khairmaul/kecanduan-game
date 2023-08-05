/* eslint-disable */
export const hideAlert = () => {
  const el = document.querySelector('.alert');
  if (el) el.parentElement.removeChild(el);
};

//type is 'success' or 'error'
export const showAlert = (type, msg, time = 3) => {
  hideAlert();
  const mark = `<div class="alert fixed left-1/2 -translate-x-1/2 p-2">
    <div class="flex flex-col p-4 m-2 w-fit text-base ${
      type === 'success'
        ? 'text-green-800 bg-green-100'
        : 'text-red-800 bg-red-100'
    } rounded-lg">
      <div class="flex items-center">
        <span class="material-icons mr-3 ${
          type === 'success' ? 'text-green-800' : 'text-red-800'
        }">info</span>
        <h3 class="text-lg font-medium">${
          type === 'success' ? 'Success! ' : 'Error! '
        } ${msg} </h3>
      </div>
    </div>    
  </div>`;

  document.querySelector('body').insertAdjacentHTML('afterbegin', mark);
  window.setTimeout(hideAlert, time * 1000);
};
