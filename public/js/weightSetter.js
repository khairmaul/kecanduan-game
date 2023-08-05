/* eslint-disable */
export const setDataWeight = (answer) => {
  if (answer === 'sangat tidak sesuai') {
    return 1;
  }
  if (answer === 'tidak sesuai') {
    return 2;
  }
  if (answer === 'cukup sesuai') {
    return 3;
  }
  if (answer === 'sesuai') {
    return 4;
  }
  if (answer === 'sangat sesuai') {
    return 5;
  }
};
