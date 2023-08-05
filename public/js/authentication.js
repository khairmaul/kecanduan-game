/* eslint-disable */
import axios from 'axios';
import { showAlert } from './alert';
import { showLoader, hideLoader } from './loader';

export const login = async (email, password) => {
  showLoader();
  try {
    const res = await axios({
      method: 'POST',
      url: '/api/v1/users/login',
      data: {
        email,
        password,
      },
    });

    if (res.data.status === 'success') {
      hideLoader();
      window.setTimeout(() => {
        location.assign('/');
      }, 1000);
    }
  } catch (e) {
    hideLoader();
    showAlert('error', e.response.data.message);
  }
};

export const register = async (name, email, password, passwordConfirm) => {
  showLoader();
  try {
    const res = await axios({
      method: 'POST',
      url: '/api/v1/users/signup',
      data: {
        name,
        email,
        password,
        passwordConfirm,
      },
    });

    if (res.data.status === 'success') {
      hideLoader();
      window.setTimeout(() => {
        location.assign('/');
      }, 1000);
    }
  } catch (e) {
    hideLoader();
    showAlert('error', e.response.data.message);
  }
};

export const logout = async () => {
  showLoader();
  try {
    const res = await axios({
      method: 'GET',
      url: '/api/v1/users/logout',
    });

    if (res.data.status === 'success') {
      window.setTimeout(() => {
        hideLoader();
        location.assign('/');
      }, 1500);
    }
  } catch (e) {
    hideLoader();
    showAlert('error', 'There are some error, try again!');
  }
};
