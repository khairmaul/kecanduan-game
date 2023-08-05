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

  // Rule 1: IF salience is berat OR mood modification is berat THEN kecanduan is berat
  const rule1 = Math.max(
    variables.salience.berat,
    variables['mood modification'].berat
  );
  rules.push({ kecanduan: 'berat', value: rule1 });

  // Rule 2: IF tolerance is berat THEN kecanduan is berat
  const rule2 = variables.tolerance.berat;
  rules.push({ kecanduan: 'berat', value: rule2 });

  // Rule 3: IF withdrawal symptom is berat OR conflict is berat THEN kecanduan is berat
  const rule3 = Math.max(
    variables['withdrawal symptom'].berat,
    variables.conflict.berat
  );
  rules.push({ kecanduan: 'berat', value: rule3 });

  // Rule 4: IF salience is ringan AND mood modification is ringan AND tolerance is ringan AND withdrawal symptom is ringan AND conflict is ringan AND relapse is ringan THEN kecanduan is ringan
  const rule4 = Math.min(
    variables.salience.ringan,
    variables['mood modification'].ringan,
    variables.tolerance.ringan,
    variables['withdrawal symptom'].ringan,
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
  rules.forEach((rule) => {
    output[rule.kecanduan] = rule.value;
  });
  //   for (const rule of rules) {
  //     output[rule.kecanduan] = rule.value;
  //   }

  // Mengembalikan hasil
  return output;
}

// Contoh penggunaan fuzzyTsukamoto
const salienceInput = 0.8;
const moodModificationInput = 0.6;
const toleranceInput = 0.7;
const withdrawalSymptomInput = 0.5;
const conflictInput = 0.4;
const relapseInput = 0.2;

const salienceRange = [0.5, 0.8, 1];
const moodModificationRange = [0.4, 0.6, 0.8];
const toleranceRange = [0.5, 0.7, 1];
const withdrawalSymptomRange = [0.3, 0.5, 0.7];
const conflictRange = [0.2, 0.4, 0.6];
const relapseRange = [0, 0.2, 0.4];

const variables = {
  salience: fuzzifyVariable(salienceInput, salienceRange, salienceRange),
  'mood modification': fuzzifyVariable(
    moodModificationInput,
    moodModificationRange,
    moodModificationRange
  ),
  tolerance: fuzzifyVariable(toleranceInput, toleranceRange, toleranceRange),
  'withdrawal symptom': fuzzifyVariable(
    withdrawalSymptomInput,
    withdrawalSymptomRange,
    withdrawalSymptomRange
  ),
  conflict: fuzzifyVariable(conflictInput, conflictRange, conflictRange),
  relapse: fuzzifyVariable(relapseInput, relapseRange, relapseRange),
};

const hasil = fuzzyTsukamoto(variables);

console.log('Pendeteksi Kecanduan Game:');
console.log('Ringan:', hasil.ringan);
console.log('Sedang:', hasil.sedang);
console.log('Berat:', hasil.berat);