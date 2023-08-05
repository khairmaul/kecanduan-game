//fungsi untuk mencari derajat keanggotaan
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

exports.fuzzifyVariable = (x, ringanRange, beratRange) => {
  const ringan = triangularMembershipRingan(
    x,
    ringanRange[0],
    ringanRange[1],
    ringanRange[2]
  );
  const berat = triangularMembershipBerat(
    x,
    beratRange[0],
    beratRange[1],
    beratRange[2]
  );
  return { ringan, berat };
};

// fungsi untuk sistem inferensi
const fuzzyRules = (variables) => {
  const rules = [];

  // Rule 1: IF salience is berat OR mood is berat THEN kecanduan is berat
  const rule1 = Math.max(variables.salience.berat, variables.mood.berat);
  rules.push({ kecanduan: 'berat', value: rule1 });

  // Rule 2: IF tolerance is berat THEN kecanduan is berat
  const rule2 = variables.tolerance.berat;
  rules.push({ kecanduan: 'berat', value: rule2 });

  // Rule 3: IF withdrawal is berat OR conflict is berat THEN kecanduan is berat
  const rule3 = Math.max(variables.withdrawal.berat, variables.conflict.berat);
  rules.push({ kecanduan: 'berat', value: rule3 });

  // Rule 4: IF salience is ringan AND mood is ringan AND tolerance is ringan AND withdrawal is ringan AND conflict is ringan AND relapse is ringan THEN kecanduan is ringan
  const rule4 = Math.min(
    variables.salience.ringan,
    variables.mood.ringan,
    variables.tolerance.ringan,
    variables.withdrawal.ringan,
    variables.conflict.ringan,
    variables.relapse.ringan
  );
  rules.push({ kecanduan: 'ringan', value: rule4 });

  return rules;
};

//fungsi untuk defuzzifikasi
exports.fuzzyTsukamoto = (variables) => {
  // Asumsikan ada 3 kemungkinan kecanduan: "ringan", "sedang", dan "berat"
  const output = {
    ringan: 0,
    sedang: 0,
    berat: 0,
  };

  // Mendapatkan aturan-aturan fuzzy
  const rules = fuzzyRules(variables);
  console.log(rules);

  // Menghitung nilai aksi fuzzy menggunakan metode Tsukamoto
  let totalOutput = 0;
  let totalWeight = 0;

  rules.forEach((rule) => {
    output[rule.kecanduan] = rule.value;
    const weight = rule.value;
    totalOutput += weight * output[rule.kecanduan];
    totalWeight += weight;
  });

  const z = totalOutput / totalWeight;

  // Mengembalikan hasil
  return { z, output };
};
