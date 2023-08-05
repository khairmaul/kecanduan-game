// Definisikan fungsi keanggotaan untuk variabel input
function fuzzyInput(x, a, b, c) {
  let u;
  if (x <= a) {
    u = 0;
  } else if (x > a && x < b) {
    u = (x - a) / (b - a);
  } else if (x >= b && x <= c) {
    u = (c - x) / (c - b);
  } else {
    u = 0;
  }
  return u;
}

// Definisikan fungsi keanggotaan untuk variabel output
// function fuzzyOutput(y, p, q, r) {
//   let v;
//   if (y <= p) {
//     v = 0;
//   } else if (y > p && y < q) {
//     v = (y - p) / (q - p);
//   } else if (y >= q && y <= r) {
//     v = (r - y) / (r - q);
//   } else {
//     v = 0;
//   }
//   return v;
// }

// Definisikan aturan-aturan fuzzy
function fuzzyRules(input1, input2) {
  const rules = [];

  // Rule 1: IF input1 is A AND input2 is P THEN output is X
  const rule1 = Math.min(input1.A, input2.P);
  rules.push({ output: 'X', value: rule1 });

  // Rule 2: IF input1 is B AND input2 is Q THEN output is Y
  const rule2 = Math.min(input1.B, input2.Q);
  rules.push({ output: 'Y', value: rule2 });

  // Rule 3: IF input1 is C AND input2 is R THEN output is Z
  const rule3 = Math.min(input1.C, input2.R);
  rules.push({ output: 'Z', value: rule3 });

  return rules;
}

// Definisikan fungsi untuk menghitung output fuzzy
function fuzzyTsukamoto(input1, input2) {
  // Lakukan fuzzifikasi pada input
  const fuzzyInput1 = {
    A: fuzzyInput(input1, 0, 10, 20),
    B: fuzzyInput(input1, 15, 25, 35),
    C: fuzzyInput(input1, 30, 40, 50),
  };

  const fuzzyInput2 = {
    P: fuzzyInput(input2, 0, 5, 10),
    Q: fuzzyInput(input2, 7, 10, 13),
    R: fuzzyInput(input2, 15, 20),
  };

  // Asumsikan ada 3 variabel output: X, Y, dan Z
  const output = {
    X: 0,
    Y: 0,
    Z: 0,
  };

  // Evaluasi aturan-aturan fuzzy
  const rules = fuzzyRules(fuzzyInput1, fuzzyInput2);
  rules.forEach((rule) => {
    if (rule.output === 'X') {
      output.X = Math.max(output.X, rule.value);
    } else if (rule.output === 'Y') {
      output.Y = Math.max(output.Y, rule.value);
    } else if (rule.output === 'Z') {
      output.Z = Math.max(output.Z, rule.value);
    }
  });

  // Definisikan fungsi keanggotaan untuk variabel output
  const outputResult = {
    P: 0,
    Q: 0,
    R: 0,
  };

  // Lakukan defuzzifikasi pada output
  outputResult.P =
    (output.X * 10 + output.Y * 7 + output.Z * 2) /
    (output.X + output.Y + output.Z);
  outputResult.Q =
    (output.X * 5 + output.Y * 10 + output.Z * 10) /
    (output.X + output.Y + output.Z);
  outputResult.R =
    (output.X * 2 + output.Y * 7 + output.Z * 13) /
    (output.X + output.Y + output.Z);

  return outputResult;
}

// Contoh penggunaan
const input1 = 25;
const input2 = 8;

const result = fuzzyTsukamoto(input1, input2);
console.log(result);
