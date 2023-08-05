/* eslint-disable */
import axios from 'axios';
import { showAlert } from './alert';
import { showLoader, hideLoader } from './loader';

export const deleteHistory = async (id) => {
  showLoader();
  try {
    await axios({
      method: 'DELETE',
      url: `/api/v1/results/${id}`,
    });

    window.setTimeout(() => {
      hideLoader();
      location.reload(true);
    }, 1000);
  } catch (e) {
    hideLoader();
    showAlert('error', e.response.data.message);
  }
};

export const deletHistoryByUser = async (userId) => {
  showLoader();
  try {
    await axios({
      method: 'DELETE',
      url: `/api/v1/results/delete-by-user/${userId}`,
    });

    window.setTimeout(() => {
      hideLoader();
      location.reload(true);
    }, 1000);
  } catch (e) {
    hideLoader();
    showAlert('error', e.response.data.message);
  }
};
