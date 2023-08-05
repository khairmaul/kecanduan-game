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
  const dingin = triangularMembership(x, 0, 10, 20);
  const sedang = triangularMembership(x, 10, 20, 30);
  const panas = triangularMembership(x, 20, 30, 40);
  return { dingin, sedang, panas };
}

// Fuzzifikasi variabel input kecepatan
function fuzzifyKecepatan(x) {
  const lambat = triangularMembership(x, 0, 20, 40);
  const sedang = triangularMembership(x, 30, 50, 70);
  const cepat = triangularMembership(x, 60, 80, 100);
  return { lambat, sedang, cepat };
}

// Aturan-aturan fuzzy
function fuzzyRules(suhu, kecepatan) {
  const rules = [];

  // Rule 1: IF suhu is dingin AND kecepatan is lambat THEN aksi is kurangi
  const rule1 = Math.min(suhu.dingin, kecepatan.lambat);
  rules.push({ aksi: 'kurangi', value: rule1 });

  // Rule 2: IF suhu is sedang AND kecepatan is sedang THEN aksi is pertahankan
  const rule2 = Math.min(suhu.sedang, kecepatan.sedang);
  rules.push({ aksi: 'pertahankan', value: rule2 });

  // Rule 3: IF suhu is panas AND kecepatan is cepat THEN aksi is tingkatkan
  const rule3 = Math.min(suhu.panas, kecepatan.cepat);
  rules.push({ aksi: 'tingkatkan', value: rule3 });

  return rules;
}

// Fungsi untuk menghitung output fuzzy
function fuzzyTsukamoto(suhuInput, kecepatanInput) {
  // Fuzzifikasi input
  const suhu = fuzzifySuhu(suhuInput);
  const kecepatan = fuzzifyKecepatan(kecepatanInput);

  // Asumsikan ada 3 kemungkinan aksi: "kurangi", "pertahankan", dan "tingkatkan"
  const output = {
    kurangi: 0,
    pertahankan: 0,
    tingkatkan: 0,
  };

  // Mendapatkan aturan-aturan fuzzy
  const rules = fuzzyRules(suhu, kecepatan);

  // Menghitung nilai aksi fuzzy menggunakan metode Tsukamoto
  rules.forEach((rule) => {
    output[rule.aksi] += rule.value;
  });
  // for (const rule of rules) {
  //   output[rule.aksi] += rule.value;
  // }

  // Defuzzifikasi output menggunakan metode Tsukamoto
  let defuzzified = 0;
  let totalValue = 0;

  Object.keys(output).forEach((key) => {
    defuzzified += key * output[key];
    totalValue += output[key];
  });

  // for (const key in output) {
  //   // eslint-disable-next-line radix
  //   defuzzified += parseInt(key) * output[key];
  //   totalValue += output[key];
  // }

  defuzzified /= totalValue;

  // Mengembalikan hasil defuzzifikasi
  return defuzzified;
}

// Contoh penggunaan fuzzyTsukamoto
const suhuInput = 25;
const kecepatanInput = 60;

const hasil = fuzzyTsukamoto(suhuInput, kecepatanInput);

console.log('Hasil Pengendalian Kecepatan Mesin:', hasil);
