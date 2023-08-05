/* eslint-disable */
const XLSX = require('xlsx');
import { Drawer } from 'flowbite';
import { setDataWeight } from './weightSetter';
const moment = require('moment');

//authentication
import { login, register, logout } from './authentication';
import { updateSettings } from './updateSettings';

//articles
import { manageArticles, deleteArticle } from './manageArticle';
import {
  initUpdateArticleForm,
  clearUpdateArticleForm,
} from './initUpdateArticle';

//symptom
import {
  manageSymptom,
  deleteSymptom,
  deleteAllSymptom,
} from './manageSymptom';
import {
  initUpdateSymptomForm,
  clearUpdateSymptomForm,
} from './initUpdateSymptom';

//solution
import {
  manageSolution,
  deleteSolution,
  deleteAllSolution,
} from './manageSolution';
import {
  initUpdateSolutionForm,
  clearUpdateSolutionForm,
} from './initUpdateSolution';

//history
import { deleteHistory, deletHistoryByUser } from './manageHistory';

//result
import { addDataResult } from './manageResult';

//default drawer
const confirmDrawer = document.getElementById('confirm-drawer');

//authentication
const loginDrawer = document.getElementById('login-drawer');
const registerDrawer = document.getElementById('register-drawer');
const settingAccountDrawer = document.getElementById('setting-account-drawer');
const settingPasswordDrawer = document.getElementById(
  'setting-password-drawer'
);
const btnSettingAccount = document.getElementById('btn-setting-account');
const btnSettingPassword = document.getElementById('btn-setting-password');
const btnLogin = document.getElementById('btn-login');
const btnRegister = document.getElementById('btn-register');
const loginForm = document.getElementById('login-form');
const registerForm = document.getElementById('register-form');
const btnLogOut = document.getElementById('btn-log-out');
const inputImgUpdate = document.getElementById('img-update-input');
const imgUpdate = document.getElementById('img-update');
const settingAccountForm = document.getElementById('setting-account-form');
const settingPasswordForm = document.getElementById('setting-password-form');

// article
const btnAddArticle = document.getElementById('btn-add-article');
const articleDrawer = document.getElementById('article-drawer');
const manageArticleForm = document.getElementById('manage-article-form');
const btnEditArticle = document.querySelectorAll('.btn-edit-article');
const btnDeleteArticle = document.querySelectorAll('.btn-delete-article');
const boxArticle = document.querySelectorAll('.box-article');
const viewArticleDrawer = document.getElementById('view-article-drawer');

//symptom
const btnAddSymptom = document.getElementById('btn-add-symptom');
const symptomDrawer = document.getElementById('symptom-drawer');
const manageSymptomForm = document.getElementById('manage-symptom-form');
const btnEditSymptom = document.querySelectorAll('.btn-edit-symptom');
const btnDeleteSymptom = document.querySelectorAll('.btn-delete-symptom');
const btnDeleteAllSymptoms = document.getElementById('btn-delete-all-symptoms');

//solution
const btnAddSolution = document.getElementById('btn-add-solution');
const solutionDrawer = document.getElementById('solution-drawer');
const manageSolutionForm = document.getElementById('manage-solution-form');
const btnEditSolution = document.querySelectorAll('.btn-edit-solution');
const btnDeleteSolution = document.querySelectorAll('.btn-delete-solution');
const btnDeleteAllSolutions = document.getElementById(
  'btn-delete-all-solutions'
);

//history
const selectFilterHistory = document.getElementById('select-filter-history');
const btnDeleteAllHistory = document.getElementById('btn-delete-all-results');
const btnDeleteHistory = document.querySelectorAll('.btn-delete-result');

//consultation
const consultationForm = document.getElementById('consult-form');
const selectAnswer = document.querySelectorAll('.select-answer');

// 1) START AUTHENTICATION
if (btnLogin && loginDrawer) {
  btnLogin.addEventListener('click', () => {
    const options = {
      placement: 'left',
      backdrop: true,
      bodyScrolling: false,
      edge: false,
      edgeOffset: '',
      backdropClasses:
        'bg-gray-900 bg-opacity-50 dark:bg-opacity-80 fixed inset-0 z-30',
    };
    const drawer = new Drawer(loginDrawer, options);
    drawer.show();

    const btnClose = document.getElementById('btn-close-login');
    btnClose.addEventListener('click', () => {
      drawer.hide();
    });
  });
}

if (btnRegister && registerDrawer) {
  btnRegister.addEventListener('click', () => {
    const options = {
      placement: 'left',
      backdrop: true,
      bodyScrolling: false,
      edge: false,
      edgeOffset: '',
      backdropClasses:
        'bg-gray-900 bg-opacity-50 dark:bg-opacity-80 fixed inset-0 z-30',
    };
    const drawer = new Drawer(registerDrawer, options);
    drawer.show();

    const btnClose = document.getElementById('btn-close-register');
    btnClose.addEventListener('click', () => {
      drawer.hide();
    });
  });
}

if (btnSettingAccount && settingAccountDrawer) {
  btnSettingAccount.addEventListener('click', () => {
    const options = {
      placement: 'left',
      backdrop: true,
      bodyScrolling: false,
      edge: false,
      edgeOffset: '',
      backdropClasses:
        'bg-gray-900 bg-opacity-50 dark:bg-opacity-80 fixed inset-0 z-30',
    };
    const drawer = new Drawer(settingAccountDrawer, options);
    drawer.show();

    const btnClose = document.getElementById('btn-close-setting-account');
    btnClose.addEventListener('click', () => {
      drawer.hide();
    });
  });
}

if (btnSettingPassword && settingPasswordDrawer) {
  btnSettingPassword.addEventListener('click', () => {
    const options = {
      placement: 'left',
      backdrop: true,
      bodyScrolling: false,
      edge: false,
      edgeOffset: '',
      backdropClasses:
        'bg-gray-900 bg-opacity-50 dark:bg-opacity-80 fixed inset-0 z-30',
    };
    const drawer = new Drawer(settingPasswordDrawer, options);
    drawer.show();

    const btnClose = document.getElementById('btn-close-setting-password');
    btnClose.addEventListener('click', () => {
      drawer.hide();
    });
  });
}

if (loginForm) {
  loginForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const email = document.getElementById('email-login').value;
    const password = document.getElementById('password-login').value;
    login(email, password);
  });
}

if (registerForm) {
  registerForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = document.getElementById('name-register').value;
    const email = document.getElementById('email-register').value;
    const password = document.getElementById('password-register').value;
    const passwordConfirm = document.getElementById(
      'password-confirm-register'
    ).value;
    register(name, email, password, passwordConfirm);
  });
}

if (btnLogOut && confirmDrawer) {
  btnLogOut.addEventListener('click', () => {
    const options = {
      placement: 'top',
      backdrop: true,
      bodyScrolling: false,
      edge: false,
      edgeOffset: '',
      backdropClasses:
        'bg-gray-900 bg-opacity-50 dark:bg-opacity-80 fixed inset-0 z-30',
    };
    const drawer = new Drawer(confirmDrawer, options);
    drawer.show();

    document.getElementById('message-confirm').textContent =
      'Anda yakin ingin keluar dari aplikasi?';
    const btnSave = document.getElementById('btn-positive-confirm');
    const btnClose = document.getElementById('btn-close-confirm');
    const btnBack = document.getElementById('btn-negative-confirm');
    btnClose.addEventListener('click', () => drawer.hide());
    btnBack.addEventListener('click', () => drawer.hide());
    btnSave.addEventListener('click', () => {
      drawer.hide();
      logout();
    });
  });
}

if (inputImgUpdate && imgUpdate) {
  inputImgUpdate.addEventListener('change', () => {
    const reader = new FileReader();

    reader.onload = function () {
      imgUpdate.src = reader.result;
    };

    if (inputImgUpdate.files[0]) reader.readAsDataURL(inputImgUpdate.files[0]);
  });
}

if (settingAccountForm && inputImgUpdate && confirmDrawer) {
  settingAccountForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const form = new FormData();
    form.append('name', document.getElementById('name-auth').value);
    form.append('email', document.getElementById('email-auth').value);

    if (inputImgUpdate.files[0]) form.append('photo', inputImgUpdate.files[0]);

    const options = {
      placement: 'top',
      backdrop: true,
      bodyScrolling: false,
      edge: false,
      edgeOffset: '',
      backdropClasses:
        'bg-gray-900 bg-opacity-50 dark:bg-opacity-80 fixed inset-0 z-30',
    };
    const drawer = new Drawer(confirmDrawer, options);
    drawer.show();

    document.getElementById('message-confirm').textContent =
      'Anda yakin ingin memperbarui data akun?';
    const btnSave = document.getElementById('btn-positive-confirm');
    const btnClose = document.getElementById('btn-close-confirm');
    const btnBack = document.getElementById('btn-negative-confirm');
    btnClose.addEventListener('click', () => drawer.hide());
    btnBack.addEventListener('click', () => drawer.hide());
    btnSave.addEventListener('click', async () => {
      drawer.hide();
      updateSettings(form, 'data');
    });
  });
}

if (settingPasswordForm && confirmDrawer) {
  settingPasswordForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    const passwordCurrent = document.getElementById('password-current').value;
    const password = document.getElementById('password').value;
    const passwordConfirm = document.getElementById('password-confirm').value;

    const options = {
      placement: 'top',
      backdrop: true,
      bodyScrolling: false,
      edge: false,
      edgeOffset: '',
      backdropClasses:
        'bg-gray-900 bg-opacity-50 dark:bg-opacity-80 fixed inset-0 z-30',
    };
    const drawer = new Drawer(confirmDrawer, options);
    drawer.show();

    document.getElementById('message-confirm').textContent =
      'Anda yakin ingin memperbarui kata sandi?';
    const btnSave = document.getElementById('btn-positive-confirm');
    const btnClose = document.getElementById('btn-close-confirm');
    const btnBack = document.getElementById('btn-negative-confirm');
    btnClose.addEventListener('click', () => drawer.hide());
    btnBack.addEventListener('click', () => drawer.hide());
    btnSave.addEventListener('click', async () => {
      drawer.hide();
      await updateSettings(
        { passwordCurrent, password, passwordConfirm },
        'password'
      );

      document.getElementById('password-current').value = '';
      document.getElementById('password').value = '';
      document.getElementById('password-confirm').value = '';
    });
  });
}
// 1) END AUTHENTICATION

// 2) START ARTICLE
if (btnAddArticle && articleDrawer) {
  btnAddArticle.addEventListener('click', () => {
    const options = {
      placement: 'left',
      backdrop: true,
      bodyScrolling: false,
      edge: false,
      edgeOffset: '',
      backdropClasses:
        'bg-gray-900 bg-opacity-50 dark:bg-opacity-80 fixed inset-0 z-30',
    };
    const drawer = new Drawer(articleDrawer, options);
    drawer.show();

    const btnClose = document.getElementById('btn-close-article');
    btnClose.addEventListener('click', () => {
      drawer.hide();
    });
  });
}

if (manageArticleForm) {
  manageArticleForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const id = manageArticleForm.dataset.id
      ? JSON.parse(manageArticleForm.dataset.id)
      : undefined;

    const title = document.getElementById('title').value;
    const description = document.getElementById('description').value;

    manageArticles({ title, description }, id);
  });
}

if (btnEditArticle && btnEditArticle.length > 0 && articleDrawer) {
  btnEditArticle.forEach((btn) => {
    btn.addEventListener('click', () => {
      const item = btn.dataset.item ? JSON.parse(btn.dataset.item) : undefined;
      if (item) {
        initUpdateArticleForm(item);

        const options = {
          placement: 'left',
          backdrop: true,
          bodyScrolling: false,
          edge: false,
          edgeOffset: '',
          backdropClasses:
            'bg-gray-900 bg-opacity-50 dark:bg-opacity-80 fixed inset-0 z-30',
          onHide: () => clearUpdateArticleForm(),
        };
        const drawer = new Drawer(articleDrawer, options);
        drawer.show();

        const btnClose = document.getElementById('btn-close-article');
        btnClose.addEventListener('click', () => {
          drawer.hide();
        });
      }
    });
  });
}

if (btnDeleteArticle && btnDeleteArticle.length > 0 && confirmDrawer) {
  btnDeleteArticle.forEach((btn) => {
    btn.addEventListener('click', () => {
      const item = btn.dataset.item ? JSON.parse(btn.dataset.item) : undefined;
      if (item) {
        const options = {
          placement: 'top',
          backdrop: true,
          bodyScrolling: false,
          edge: false,
          edgeOffset: '',
          backdropClasses:
            'bg-gray-900 bg-opacity-50 dark:bg-opacity-80 fixed inset-0 z-30',
        };
        const drawer = new Drawer(confirmDrawer, options);
        drawer.show();

        document.getElementById(
          'message-confirm'
        ).textContent = `Anda yakin akan menghapus data artikel "${item.title}"?`;
        const btnSave = document.getElementById('btn-positive-confirm');
        const btnClose = document.getElementById('btn-close-confirm');
        const btnBack = document.getElementById('btn-negative-confirm');
        btnClose.addEventListener('click', () => drawer.hide());
        btnBack.addEventListener('click', () => drawer.hide());
        btnSave.addEventListener('click', async () => {
          drawer.hide();
          deleteArticle(item._id);
        });
      }
    });
  });
}

if (boxArticle && boxArticle.length > 0 && viewArticleDrawer) {
  boxArticle.forEach((box) => {
    box.addEventListener('click', () => {
      const item = box.dataset.item ? JSON.parse(box.dataset.item) : undefined;
      if (item) {
        const options = {
          placement: 'left',
          backdrop: true,
          bodyScrolling: false,
          edge: false,
          edgeOffset: '',
          backdropClasses:
            'bg-gray-900 bg-opacity-50 dark:bg-opacity-80 fixed inset-0 z-30',
        };
        const drawer = new Drawer(viewArticleDrawer, options);
        drawer.show();

        const title = document.getElementById('title-view-article');
        const description = document.getElementById('description-view-article');
        const btnClose = document.getElementById('btn-close-view-article');

        title.textContent = `${item.title}`;
        description.textContent = `${item.description}`;

        btnClose.addEventListener('click', () => {
          drawer.hide();
        });
      }
    });
  });
}
// 2) END ARTICLE

// 3) START SYMPTOM
if (btnAddSymptom && symptomDrawer) {
  btnAddSymptom.addEventListener('click', () => {
    const options = {
      placement: 'left',
      backdrop: true,
      bodyScrolling: false,
      edge: false,
      edgeOffset: '',
      backdropClasses:
        'bg-gray-900 bg-opacity-50 dark:bg-opacity-80 fixed inset-0 z-30',
    };
    const drawer = new Drawer(symptomDrawer, options);
    drawer.show();

    const btnClose = document.getElementById('btn-close-symptom');
    btnClose.addEventListener('click', () => {
      drawer.hide();
    });
  });
}

if (manageSymptomForm) {
  manageSymptomForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const id = manageSymptomForm.dataset.id
      ? JSON.parse(manageSymptomForm.dataset.id)
      : undefined;

    const name = document.getElementById('symptom-name').value;
    const factor = document.getElementById('symptom-factor').value;

    manageSymptom({ name, factor }, id);
  });
}

if (btnEditSymptom && btnEditSymptom.length > 0 && symptomDrawer) {
  btnEditSymptom.forEach((btn) => {
    btn.addEventListener('click', () => {
      const item = btn.dataset.item ? JSON.parse(btn.dataset.item) : undefined;
      if (item) {
        initUpdateSymptomForm(item);

        const options = {
          placement: 'left',
          backdrop: true,
          bodyScrolling: false,
          edge: false,
          edgeOffset: '',
          backdropClasses:
            'bg-gray-900 bg-opacity-50 dark:bg-opacity-80 fixed inset-0 z-30',
          onHide: () => clearUpdateSymptomForm(),
        };
        const drawer = new Drawer(symptomDrawer, options);
        drawer.show();

        const btnClose = document.getElementById('btn-close-symptom');
        btnClose.addEventListener('click', () => {
          drawer.hide();
        });
      }
    });
  });
}

if (btnDeleteSymptom && btnDeleteSymptom.length > 0 && confirmDrawer) {
  btnDeleteSymptom.forEach((btn) => {
    btn.addEventListener('click', () => {
      const item = btn.dataset.item ? JSON.parse(btn.dataset.item) : undefined;
      if (item) {
        const options = {
          placement: 'top',
          backdrop: true,
          bodyScrolling: false,
          edge: false,
          edgeOffset: '',
          backdropClasses:
            'bg-gray-900 bg-opacity-50 dark:bg-opacity-80 fixed inset-0 z-30',
        };
        const drawer = new Drawer(confirmDrawer, options);
        drawer.show();

        document.getElementById(
          'message-confirm'
        ).textContent = `Anda yakin akan menghapus data gejala "${item.name}"?`;
        const btnSave = document.getElementById('btn-positive-confirm');
        const btnClose = document.getElementById('btn-close-confirm');
        const btnBack = document.getElementById('btn-negative-confirm');
        btnClose.addEventListener('click', () => drawer.hide());
        btnBack.addEventListener('click', () => drawer.hide());
        btnSave.addEventListener('click', async () => {
          drawer.hide();
          deleteSymptom(item._id);
        });
      }
    });
  });
}

if (btnDeleteAllSymptoms && confirmDrawer) {
  btnDeleteAllSymptoms.addEventListener('click', () => {
    const options = {
      placement: 'top',
      backdrop: true,
      bodyScrolling: false,
      edge: false,
      edgeOffset: '',
      backdropClasses:
        'bg-gray-900 bg-opacity-50 dark:bg-opacity-80 fixed inset-0 z-30',
    };
    const drawer = new Drawer(confirmDrawer, options);
    drawer.show();

    document.getElementById(
      'message-confirm'
    ).textContent = `Anda yakin akan menghapus semua data gejala? Tindakan ini tidak bisa dipulihkan!`;
    const btnSave = document.getElementById('btn-positive-confirm');
    const btnClose = document.getElementById('btn-close-confirm');
    const btnBack = document.getElementById('btn-negative-confirm');
    btnClose.addEventListener('click', () => drawer.hide());
    btnBack.addEventListener('click', () => drawer.hide());
    btnSave.addEventListener('click', async () => {
      drawer.hide();
      deleteAllSymptom();
    });
  });
}
// 3) END SYMPTOM

// 4) START SOLUTION
if (btnAddSolution && solutionDrawer) {
  btnAddSolution.addEventListener('click', () => {
    const options = {
      placement: 'left',
      backdrop: true,
      bodyScrolling: false,
      edge: false,
      edgeOffset: '',
      backdropClasses:
        'bg-gray-900 bg-opacity-50 dark:bg-opacity-80 fixed inset-0 z-30',
    };
    const drawer = new Drawer(solutionDrawer, options);
    drawer.show();

    const btnClose = document.getElementById('btn-close-solution');
    btnClose.addEventListener('click', () => {
      drawer.hide();
    });
  });
}

if (manageSolutionForm) {
  manageSolutionForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const id = manageSolutionForm.dataset.id
      ? JSON.parse(manageSolutionForm.dataset.id)
      : undefined;

    const name = document.getElementById('solution-name').value;
    const addictionLevel = document.getElementById(
      'solution-addiction-level'
    ).value;

    manageSolution({ name, addictionLevel }, id);
  });
}

if (btnEditSolution && btnEditSolution.length > 0 && solutionDrawer) {
  btnEditSolution.forEach((btn) => {
    btn.addEventListener('click', () => {
      const item = btn.dataset.item ? JSON.parse(btn.dataset.item) : undefined;
      if (item) {
        initUpdateSolutionForm(item);

        const options = {
          placement: 'left',
          backdrop: true,
          bodyScrolling: false,
          edge: false,
          edgeOffset: '',
          backdropClasses:
            'bg-gray-900 bg-opacity-50 dark:bg-opacity-80 fixed inset-0 z-30',
          onHide: () => clearUpdateSolutionForm(),
        };
        const drawer = new Drawer(solutionDrawer, options);
        drawer.show();

        const btnClose = document.getElementById('btn-close-solution');
        btnClose.addEventListener('click', () => {
          drawer.hide();
        });
      }
    });
  });
}

if (btnDeleteSolution && btnDeleteSolution.length > 0 && confirmDrawer) {
  btnDeleteSolution.forEach((btn) => {
    btn.addEventListener('click', () => {
      const item = btn.dataset.item ? JSON.parse(btn.dataset.item) : undefined;
      if (item) {
        const options = {
          placement: 'top',
          backdrop: true,
          bodyScrolling: false,
          edge: false,
          edgeOffset: '',
          backdropClasses:
            'bg-gray-900 bg-opacity-50 dark:bg-opacity-80 fixed inset-0 z-30',
        };
        const drawer = new Drawer(confirmDrawer, options);
        drawer.show();

        document.getElementById(
          'message-confirm'
        ).textContent = `Anda yakin akan menghapus data solusi pada tingkat kecanduan ${item.addictionLevel}?`;
        const btnSave = document.getElementById('btn-positive-confirm');
        const btnClose = document.getElementById('btn-close-confirm');
        const btnBack = document.getElementById('btn-negative-confirm');
        btnClose.addEventListener('click', () => drawer.hide());
        btnBack.addEventListener('click', () => drawer.hide());
        btnSave.addEventListener('click', async () => {
          drawer.hide();
          deleteSolution(item._id);
        });
      }
    });
  });
}

if (btnDeleteAllSolutions && confirmDrawer) {
  btnDeleteAllSolutions.addEventListener('click', () => {
    const options = {
      placement: 'top',
      backdrop: true,
      bodyScrolling: false,
      edge: false,
      edgeOffset: '',
      backdropClasses:
        'bg-gray-900 bg-opacity-50 dark:bg-opacity-80 fixed inset-0 z-30',
    };
    const drawer = new Drawer(confirmDrawer, options);
    drawer.show();

    document.getElementById(
      'message-confirm'
    ).textContent = `Anda yakin akan menghapus semua data solusi? Tindakan ini tidak bisa dipulihkan!`;
    const btnSave = document.getElementById('btn-positive-confirm');
    const btnClose = document.getElementById('btn-close-confirm');
    const btnBack = document.getElementById('btn-negative-confirm');
    btnClose.addEventListener('click', () => drawer.hide());
    btnBack.addEventListener('click', () => drawer.hide());
    btnSave.addEventListener('click', async () => {
      drawer.hide();
      deleteAllSolution();
    });
  });
}
// 4) END SOLUTION

// 5) START HISTORY
if (selectFilterHistory) {
  selectFilterHistory.addEventListener('change', (e) => {
    e.preventDefault();
    const url = new URL(location.href);
    const searchParams = url.searchParams;

    if (e.target.value) {
      const filter = e.target.value * 1;
      // location.assign(`/history?filter=${filter}`);
      searchParams.set('filter', filter);
    } else {
      // location.assign('/history');
      searchParams.delete('filter');
    }

    // Terapkan perubahan ke URL
    url.search = searchParams.toString();

    // Dapatkan URL yang sudah diubah
    const modifiedUrl = url.href;

    // Gunakan modifiedUrl untuk penggunaan selanjutnya, misalnya untuk mengarahkan pengguna ke URL yang sudah diubah
    location.href = modifiedUrl;
  });
}

if (btnDeleteAllHistory && confirmDrawer) {
  btnDeleteAllHistory.addEventListener('click', () => {
    const userId = btnDeleteAllHistory.dataset.user;
    if (!userId) {
      return;
    }
    const options = {
      placement: 'top',
      backdrop: true,
      bodyScrolling: false,
      edge: false,
      edgeOffset: '',
      backdropClasses:
        'bg-gray-900 bg-opacity-50 dark:bg-opacity-80 fixed inset-0 z-30',
    };
    const drawer = new Drawer(confirmDrawer, options);
    drawer.show();

    document.getElementById(
      'message-confirm'
    ).textContent = `Anda yakin akan menghapus semua data riwayat? Tindakan ini tidak bisa dipulihkan!`;
    const btnSave = document.getElementById('btn-positive-confirm');
    const btnClose = document.getElementById('btn-close-confirm');
    const btnBack = document.getElementById('btn-negative-confirm');
    btnClose.addEventListener('click', () => drawer.hide());
    btnBack.addEventListener('click', () => drawer.hide());
    btnSave.addEventListener('click', async () => {
      drawer.hide();
      deletHistoryByUser(userId);
    });
  });
}

if (btnDeleteHistory && btnDeleteHistory.length > 0 && confirmDrawer) {
  btnDeleteHistory.forEach((btn) => {
    btn.addEventListener('click', () => {
      const item = btn.dataset.item ? JSON.parse(btn.dataset.item) : undefined;
      if (item) {
        const options = {
          placement: 'top',
          backdrop: true,
          bodyScrolling: false,
          edge: false,
          edgeOffset: '',
          backdropClasses:
            'bg-gray-900 bg-opacity-50 dark:bg-opacity-80 fixed inset-0 z-30',
        };
        const drawer = new Drawer(confirmDrawer, options);
        drawer.show();

        const date = moment(item.createdAt).format('DD-MM-YYYY HH:mm');

        document.getElementById(
          'message-confirm'
        ).textContent = `Anda yakin akan menghapus data riwayat pada tanggal "${date}"?`;
        const btnSave = document.getElementById('btn-positive-confirm');
        const btnClose = document.getElementById('btn-close-confirm');
        const btnBack = document.getElementById('btn-negative-confirm');
        btnClose.addEventListener('click', () => drawer.hide());
        btnBack.addEventListener('click', () => drawer.hide());
        btnSave.addEventListener('click', async () => {
          drawer.hide();
          deleteHistory(item._id);
        });
      }
    });
  });
}
// 5) END HISTORY

// 6) START CONSULT
if (
  consultationForm &&
  selectAnswer &&
  selectAnswer.length > 0 &&
  confirmDrawer
) {
  consultationForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const { user, title } = consultationForm.dataset;
    if (!user || !title) {
      console.log('Data not found');
      return;
    }

    const dataSalience = [];
    const dataMoodModification = [];
    const dataTolerance = [];
    const withdrawalSymptom = [];
    const dataConflict = [];
    const dataRelapse = [];

    selectAnswer.forEach((selectAns) => {
      const factor = selectAns.dataset.factor;
      const value = setDataWeight(selectAns.value);
      if (factor && factor === 'salience') dataSalience.push(value);
      if (factor && factor === 'mood modification')
        dataMoodModification.push(value);
      if (factor && factor === 'tolerance') dataTolerance.push(value);
      if (factor && factor === 'withdrawal symptoms')
        withdrawalSymptom.push(value);
      if (factor && factor === 'conflict') dataConflict.push(value);
      if (factor && factor === 'relapse') dataRelapse.push(value);
    });

    // console.log({
    //   dataSalience,
    //   dataMoodModification,
    //   dataTolerance,
    //   withdrawalSymptom,
    //   dataConflict,
    //   dataRelapse,
    // });

    const masterData = [
      { name: 'salience', value: dataSalience.reduce((a, b) => a + b, 0) },
      {
        name: 'mood modification',
        value: dataMoodModification.reduce((a, b) => a + b, 0),
      },
      { name: 'tolerance', value: dataTolerance.reduce((a, b) => a + b, 0) },
      {
        name: 'withdrawal symptoms',
        value: withdrawalSymptom.reduce((a, b) => a + b, 0),
      },
      { name: 'conflict', value: dataConflict.reduce((a, b) => a + b, 0) },
      {
        name: 'relapse',
        value: dataRelapse.reduce((a, b) => a + b, 0),
      },
    ];

    // console.log(masterData);

    const options = {
      placement: 'top',
      backdrop: true,
      bodyScrolling: false,
      edge: false,
      edgeOffset: '',
      backdropClasses:
        'bg-gray-900 bg-opacity-50 dark:bg-opacity-80 fixed inset-0 z-30',
    };
    const drawer = new Drawer(confirmDrawer, options);
    drawer.show();

    document.getElementById(
      'message-confirm'
    ).textContent = `Anda yakin ingin melanjutkan?`;
    const btnSave = document.getElementById('btn-positive-confirm');
    const btnClose = document.getElementById('btn-close-confirm');
    const btnBack = document.getElementById('btn-negative-confirm');
    btnClose.addEventListener('click', () => drawer.hide());
    btnBack.addEventListener('click', () => drawer.hide());
    btnSave.addEventListener('click', async () => {
      drawer.hide();
      addDataResult({ user: user, weight: masterData }, title);
    });
  });
}
// 7) END CONSULT
