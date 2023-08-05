/* eslint-disable */
import axios from 'axios';
import { showAlert } from './alert';
import { showLoader, hideLoader } from './loader';

export const manageArticles = async (data, id) => {
  showLoader();
  try {
    const url = id ? `/api/v1/articles/${id}` : `/api/v1/articles`;
    const method = id ? 'PATCH' : 'POST';

    const res = await axios({
      method,
      url,
      data,
    });

    if (res.data.status === 'success') {
      window.setTimeout(() => {
        hideLoader();
        location.reload(true);
      }, 1000);
    }
  } catch (e) {
    hideLoader();
    showAlert('error', e.response.data.message);
  }
};

export const deleteArticle = async (id) => {
  showLoader();
  try {
    await axios({
      method: 'DELETE',
      url: `/api/v1/articles/${id}`,
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
