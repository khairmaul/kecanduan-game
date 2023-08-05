// Fungsi keanggotaan segitiga
function triangularMembership(x, a, b, c) {
  if (x <= a || x >= c) {
    return 0;
  }
  if (x === b) {
    return 1;
  }
  if (x > a && x < b) {
    return (x - a) / (b - a);
  }
  if (x > b && x < c) {
    return (c - x) / (c - b);
  }
}

// Fuzzifikasi variabel input
function fuzzifyVariable(x, ringanRange, beratRange) {
  const ringan = triangularMembership(
    x,
    ringanRange[0],
    ringanRange[1],
    ringanRange[2]
  );
  const berat = triangularMembership(
    x,
    beratRange[0],
    beratRange[1],
    beratRange[2]
  );
  return { ringan, berat };
}

// Aturan-aturan fuzzy
function fuzzyRules(variables) {
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
}

// Fungsi untuk menghitung output fuzzy
function fuzzyTsukamoto(variables) {
  // Asumsikan ada 3 kemungkinan kecanduan: "ringan", "sedang", dan "berat"
  const output = {
    ringan: 0,
    sedang: 0,
    berat: 0,
  };

  // Mendapatkan aturan-aturan fuzzy
  const rules = fuzzyRules(variables);

  // Menghitung nilai aksi fuzzy menggunakan metode Tsukamoto
  let totalOutput = 0;
  let totalWeight = 0;

  rules.forEach((rule) => {
    const weight = rule.value;
    totalOutput += weight * output[rule.kecanduan];
    totalWeight += weight;
  });

  //   for (const rule of rules) {
  //     const weight = rule.value;
  //     totalOutput += weight * output[rule.kecanduan];
  //     totalWeight += weight;
  //   }

  const z = totalOutput / totalWeight;

  // Mengembalikan hasil
  return { z };
}

// Contoh penggunaan fuzzy Tsukamoto
const salienceInput = 0.6;
const moodInput = 0.6;
const toleranceInput = 0.7;
const withdrawalInput = 0.4;
const conflictInput = 0.3;
const relapseInput = 0;

const salienceRange = [0.5, 0.8, 1];
const moodRange = [0.4, 0.6, 0.8];
const toleranceRange = [0.5, 0.7, 1];
const withdrawalRange = [0.3, 0.5, 0.7];
const conflictRange = [0.2, 0.4, 0.6];
const relapseRange = [0, 0.2, 0.4];

const variables = {
  salience: fuzzifyVariable(salienceInput, salienceRange, salienceRange),
  mood: fuzzifyVariable(moodInput, moodRange, moodRange),
  tolerance: fuzzifyVariable(toleranceInput, toleranceRange, toleranceRange),
  withdrawal: fuzzifyVariable(
    withdrawalInput,
    withdrawalRange,
    withdrawalRange
  ),
  conflict: fuzzifyVariable(conflictInput, conflictRange, conflictRange),
  relapse: fuzzifyVariable(relapseInput, relapseRange, relapseRange),
};

console.log(variables);

const hasil = fuzzyTsukamoto(variables);

console.log('Pendeteksi Kecanduan Game:');
console.log('Nilai z:', hasil.z);
