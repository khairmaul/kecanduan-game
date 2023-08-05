const { getFuzzyRules } = require('./rules');

// const triangularMembership = (x, a, b, c) => {
//   if (x <= a || x >= c) {
//     return 0;
//   }
//   if (x === b) {
//     return 1;
//   }
//   if (x > a && x < b) {
//     return (x - a) / (b - a);
//   }
//   if (x > b && x < c) {
//     return (c - x) / (c - b);
//   }
// };

const triangularMembershipRingan = (x, a, b, c) => {
  // a adalah nilai awal yang pastinya 0 dan c adalah nilai akhir yang merupakan nilai tertinggi
  if (x <= a) {
    return 1;
  }
  if (x >= c) {
    return 0;
  }
  if (x >= a && x <= c) {
    return (c - x) / (c - a);
  }
};

const triangularMembershipBerat = (x, a, b, c) => {
  // a adalah nilai awal yang pastinya 0 dan c adalah nilai akhir yang merupakan nilai tertinggi
  if (x <= a) {
    return 1;
  }
  if (x >= c) {
    return 0;
  }
  if (x >= a && x <= c) {
    return (x - a) / (c - a);
  }
};

exports.fuzzifyVariable = (x, range) => {
  const ringan = triangularMembershipRingan(x, range[0], range[1], range[2]);
  const berat = triangularMembershipBerat(x, range[0], range[1], range[2]);
  // const ringan = triangularMembership(x, range[0], range[1], range[2]);
  // const berat = triangularMembership(x, range[0], range[1], range[2]);
  return { ringan, berat };
};

//fungsi untuk defuzzifikasi
exports.fuzzyTsukamoto = (variables) => {
  // Mendapatkan aturan-aturan fuzzy
  const rules = getFuzzyRules(variables);

  // Menghitung nilai aksi fuzzy menggunakan metode Tsukamoto
  let totalAlpha = 0;
  let totalAlphaMulti = 0;

  rules.forEach((rule) => {
    totalAlpha += rule[6];
    totalAlphaMulti += rule[8];
  });

  let z = totalAlphaMulti / totalAlpha;
  if (Number.isNaN(z)) z = 0;

  // Mengembalikan hasil
  return { totalAlphaMulti, totalAlpha, z };
};
