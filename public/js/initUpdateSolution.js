/* eslint-disable */

export const initUpdateSolutionForm = (item) => {
  const manageSolutionForm = document.getElementById('manage-solution-form');
  manageSolutionForm.dataset.id = JSON.stringify(item._id);

  document.getElementById('title-solution').textContent = 'Perbarui Solusi';
  document.getElementById('btn-save-solution').textContent = 'Simpan';
  document.getElementById('solution-name').value = item.name;
  document.getElementById('solution-addiction-level').value =
    item.addictionLevel;
};

export const clearUpdateSolutionForm = (item) => {
  const manageSolutionForm = document.getElementById('manage-solution-form');
  manageSolutionForm.dataset.id = undefined;

  document.getElementById('title-solution').textContent = 'Tambah Solusi';
  document.getElementById('btn-save-solution').textContent = 'Tambah';
  document.getElementById('solution-name').value = '';
  document.getElementById('solution-addiction-level').value = '';
};
