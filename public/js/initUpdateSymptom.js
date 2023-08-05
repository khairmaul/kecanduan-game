/* eslint-disable */

export const initUpdateSymptomForm = (item) => {
  const manageSymptomForm = document.getElementById('manage-symptom-form');
  manageSymptomForm.dataset.id = JSON.stringify(item._id);

  document.getElementById('title-symptom').textContent = 'Perbarui Gejala';
  document.getElementById('btn-save-symptom').textContent = 'Simpan';
  document.getElementById('symptom-name').value = item.name;
  document.getElementById('symptom-factor').value = item.factor;
};

export const clearUpdateSymptomForm = () => {
  const manageSymptomForm = document.getElementById('manage-symptom-form');
  manageSymptomForm.dataset.id = undefined;

  document.getElementById('title-symptom').textContent = 'Tambah Gejala';
  document.getElementById('btn-save-symptom').textContent = 'Tambah';
  document.getElementById('symptom-name').value = '';
  document.getElementById('symptom-factor').value = '';
};
