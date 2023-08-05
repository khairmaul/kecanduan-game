/* eslint-disable */

export const initUpdateArticleForm = (item) => {
  const manegeArticleForm = document.getElementById('manage-article-form');
  manegeArticleForm.dataset.id = JSON.stringify(item._id);

  document.getElementById('drawer-label-article').textContent =
    'Perbarui Artikel';
  document.getElementById('btn-save-article').textContent = 'Simpan';
  document.getElementById('title').value = item.title;
  document.getElementById('description').value = item.description;
};

export const clearUpdateArticleForm = () => {
  const manegeArticleForm = document.getElementById('manage-article-form');
  manegeArticleForm.dataset.id = undefined;

  document.getElementById('drawer-label-article').textContent =
    'Tambah Artikel';
  document.getElementById('btn-save-article').textContent = 'Tambah';
  document.getElementById('title').value = '';
  document.getElementById('description').value = '';
};
