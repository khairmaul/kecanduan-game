/* eslint-disable */
import axios from 'axios';
import { showAlert } from './alert';
import { showLoader, hideLoader } from './loader';

export const addDataResult = async (data, title) => {
  showLoader();
  try {
    const url = '/api/v1/results';
    const method = 'POST';

    const res = await axios({
      method,
      url,
      data,
    });

    if (res.data.status === 'success') {
      window.setTimeout(() => {
        hideLoader();
        location.assign(`/result?title=${title}&id=${res.data.data.data.id}`);
      }, 1000);
    }
  } catch (e) {
    hideLoader();
    showAlert('error', e.response.data.message);
  }
};
