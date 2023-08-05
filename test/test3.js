/* eslint-disable no-restricted-syntax */
// Fungsi keanggotaan segitiga
function triangularMembership(x, a, b, c) {
  if (x <= a || x >= c) {
    return 0;
  } else if (x === b) {
    return 1;
  } else if (x > a && x < b) {
    return (x - a) / (b - a);
  } else if (x > b && x < c) {
    return (c - x) / (c - b);
  }
}

// Fuzzifikasi variabel input suhu ruangan
function fuzzifySuhuRuangan(x) {
  const rendah = triangularMembership(x, 18, 22, 26);
  const sedang = triangularMembership(x, 24, 28, 32);
  const tinggi = triangularMembership(x, 30, 34, 38);
  return { rendah, sedang, tinggi };
}

// Fuzzifikasi variabel input kelembapan
function fuzzifyKelembapan(x) {
  const rendah = triangularMembership(x, 40, 50, 60);
  const sedang = triangularMembership(x, 55, 65, 75);
  const tinggi = triangularMembership(x, 70, 80, 90);
  return { rendah, sedang, tinggi };
}

// Aturan-aturan fuzzy
function fuzzyRules(suhuRuangan, kelembapan) {
  const rules = [];

  // Rule 1: IF suhuRuangan is rendah AND kelembapan is rendah THEN suhuAC is tinggi
  const rule1 = Math.min(suhuRuangan.rendah, kelembapan.rendah);
  rules.push({ suhuAC: 'tinggi', value: rule1 });

  // Rule 2: IF suhuRuangan is sedang AND kelembapan is sedang THEN suhuAC is sedang
  const rule2 = Math.min(suhuRuangan.sedang, kelembapan.sedang);
  rules.push({ suhuAC: 'sedang', value: rule2 });

  // Rule 3: IF suhuRuangan is tinggi AND kelembapan is tinggi THEN suhuAC is rendah
  const rule3 = Math.min(suhuRuangan.tinggi, kelembapan.tinggi);
  rules.push({ suhuAC: 'rendah', value: rule3 });

  return rules;
}

// Fungsi untuk menghitung output fuzzy
function fuzzyTsukamoto(suhuRuanganInput, kelembapanInput) {
  // Fuzzifikasi input
  const suhuRuangan = fuzzifySuhuRuangan(suhuRuanganInput);
  const kelembapan = fuzzifyKelembapan(kelembapanInput);

  // Asumsikan ada 3 kemungkinan suhu AC: "rendah", "sedang", dan "tinggi"
  const output = {
    rendah: 0,
    sedang: 0,
    tinggi: 0,
  };

  // Mendapatkan aturan-aturan fuzzy
  const rules = fuzzyRules(suhuRuangan, kelembapan);

  // Menghitung nilai aksi fuzzy menggunakan metode Tsukamoto
  let defuzzified = 0;
  let totalValue = 0;

  for (const rule of rules) {
    const ruleOutput = output[rule.suhuAC];
    const newValue = Math.max(rule.value, ruleOutput);
    output[rule.suhuAC] = newValue;

    defuzzified += newValue * parseInt(rule.suhuAC);
    totalValue += newValue;
  }

  defuzzified /= totalValue;

  // Mengembalikan hasil defuzzifikasi
  return defuzzified;
}

// Contoh penggunaan fuzzyTsukamoto
const suhuRuanganInput = 25;
const kelembapanInput = 70;

const hasil = fuzzyTsukamoto(suhuRuanganInput, kelembapanInput);

console.log('Pengaturan Suhu AC:', hasil);
