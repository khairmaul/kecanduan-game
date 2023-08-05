/* eslint-disable no-restricted-syntax */
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

// Fuzzifikasi variabel input suhu
function fuzzifySuhu(x) {
  const rendah = triangularMembership(x, 20, 25, 30);
  const sedang = triangularMembership(x, 28, 33, 38);
  const tinggi = triangularMembership(x, 36, 41, 46);
  return { rendah, sedang, tinggi };
}

// Aturan-aturan fuzzy
function fuzzyRules(suhu) {
  const rules = [];

  // Rule 1: IF suhu is rendah THEN kecepatan is lambat
  const rule1 = suhu.rendah;
  rules.push({ kecepatan: 'lambat', value: rule1 });

  // Rule 2: IF suhu is sedang THEN kecepatan is sedang
  const rule2 = suhu.sedang;
  rules.push({ kecepatan: 'sedang', value: rule2 });

  // Rule 3: IF suhu is tinggi THEN kecepatan is cepat
  const rule3 = suhu.tinggi;
  rules.push({ kecepatan: 'cepat', value: rule3 });

  return rules;
}

// Fungsi untuk menghitung output fuzzy
function fuzzyTsukamoto(suhuInput) {
  // Fuzzifikasi input
  const suhu = fuzzifySuhu(suhuInput);

  // Asumsikan ada 3 kemungkinan kecepatan: "lambat", "sedang", dan "cepat"
  const output = {
    lambat: 0,
    sedang: 0,
    cepat: 0,
  };

  // Mendapatkan aturan-aturan fuzzy
  const rules = fuzzyRules(suhu);

  // Menghitung nilai aksi fuzzy menggunakan metode Tsukamoto
  for (const rule of rules) {
    output[rule.kecepatan] = rule.value;
  }

  // Mengembalikan hasil
  return output;
}

// Contoh penggunaan fuzzyTsukamoto
const suhuInput = 30;

const hasil = fuzzyTsukamoto(suhuInput);

console.log('Pengaturan Kecepatan Mesin:');
console.log('Lambat:', hasil.lambat);
console.log('Sedang:', hasil.sedang);
console.log('Cepat:', hasil.cepat);
