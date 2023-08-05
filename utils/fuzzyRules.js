// const triangularMembershipOutput = (z) => {
//   //RINGAN
//   if (z <= 0 || z >= 100) return 1;

//   if (z > 0 && z < 50) {
//     return (50 - z) / (50 - 0);
//   }

//   if (z >= 50) return 0;

//   //SEDANG
//   if (z <= 50 || z >= 80) return 0;

//   if (z > 50 && z < 65) {
//     return (z - 50) / (65 - 50);
//   }

//   if (z >= 65 && z <= 80) {
//     return (80 - z) / (80 - 65);
//   }

//   //BERAT
//   if (z <= 80) return 0;
//   if (z > 80 && z < 100) {
//     return (z - 80) / (100 - 80);
//   }
// };

// const triangularMembershipOutput = (z) => 100 - z * (100 - 0);

// const triangularMembershipOutput = (z, selector) => {
//   if (selector === 'ringan') {
//     if (z <= 0) return 1;

//     if (z > 0 && z < 50) {
//       return (50 - z) / (50 - 0);
//     }

//     if (z >= 50) return 0;
//   } else if (selector === 'sedang') {
//     if (z <= 50 || z >= 80) return 0;

//     if (z > 50 && z < 65) {
//       return (z - 50) / (65 - 50);
//     }

//     if (z >= 65 && z <= 80) {
//       return (80 - z) / (80 - 65);
//     }
//   } else {
//     if (z <= 80) return 0;

//     if (z > 80 && z < 100) {
//       return (z - 80) / (100 - 80);
//     }

//     if (z >= 100) return 1;
//   }
// };

// const triangularMembershipOutputRingan = (z) => {
//   if (z <= 0) return 1;

//   if (z > 0 && z < 50) {
//     return (50 - z) / (50 - 0);
//   }

//   if (z >= 50) return 0;
// };

// const triangularMembershipOutputSedang = (z) => {
//   if (z <= 50 || z >= 80) return 0;

//   if (z > 50 && z < 65) {
//     return (z - 50) / (65 - 50);
//   }

//   if (z >= 65 && z <= 80) {
//     return (80 - z) / (80 - 65);
//   }
// };
// const triangularMembershipOutputBerat = (z) => {
//   if (z <= 80) return 0;

//   if (z > 80 && z < 100) {
//     return (z - 80) / (100 - 80);
//   }

//   if (z >= 100) return 1;
// };

const triangularMembershipOutput = (alpha, selector) => {
  if (selector === 'ringan') {
    return 50 - alpha * (50 - 0);
  }
  if (selector === 'sedang') {
    return 50 - alpha * (65 - 50);
  }
  return 80 - alpha * (100 - 80);
};

exports.getFuzzyRules = (variables) => {
  // const resultRange = [0, 100];
  const rules = [];

  // RULE 1
  const r1 = Math.min(
    variables.salience.ringan,
    variables.mood.ringan,
    variables.tolerance.ringan,
    variables.withdrawal.ringan,
    variables.conflict.ringan,
    variables.relapse.ringan
  );
  // const z1 = resultRange[1] - r1 * (resultRange[1] - resultRange[0]);
  const z1 = triangularMembershipOutput(r1, 'ringan');
  rules.push([
    variables.salience.ringan,
    variables.mood.ringan,
    variables.tolerance.ringan,
    variables.withdrawal.ringan,
    variables.conflict.ringan,
    variables.relapse.ringan,
    r1,
    z1,
    r1 * z1,
  ]);

  // RULE 2
  const r2 = Math.min(
    variables.salience.ringan,
    variables.mood.ringan,
    variables.tolerance.ringan,
    variables.withdrawal.ringan,
    variables.conflict.ringan,
    variables.relapse.berat
  );
  // const z2 = resultRange[1] - r2 * (resultRange[1] - resultRange[0]);
  const z2 = triangularMembershipOutput(r2, 'ringan');
  rules.push([
    variables.salience.ringan,
    variables.mood.ringan,
    variables.tolerance.ringan,
    variables.withdrawal.ringan,
    variables.conflict.ringan,
    variables.relapse.berat,
    r2,
    z2,
    r2 * z2,
  ]);

  // RULE 3
  const r3 = Math.min(
    variables.salience.ringan,
    variables.mood.ringan,
    variables.tolerance.ringan,
    variables.withdrawal.berat,
    variables.conflict.ringan,
    variables.relapse.ringan
  );
  // const z3 = resultRange[1] - r3 * (resultRange[1] - resultRange[0]);
  const z3 = triangularMembershipOutput(r3, 'ringan');
  rules.push([
    variables.salience.ringan,
    variables.mood.ringan,
    variables.tolerance.ringan,
    variables.withdrawal.berat,
    variables.conflict.ringan,
    variables.relapse.ringan,
    r3,
    z3,
    r3 * z3,
  ]);

  // RULE 4
  const r4 = Math.min(
    variables.salience.ringan,
    variables.mood.ringan,
    variables.tolerance.ringan,
    variables.withdrawal.berat,
    variables.conflict.ringan,
    variables.relapse.berat
  );
  // const z4 = resultRange[1] - r4 * (resultRange[1] - resultRange[0]);
  const z4 = triangularMembershipOutput(r4, 'ringan');
  rules.push([
    variables.salience.ringan,
    variables.mood.ringan,
    variables.tolerance.ringan,
    variables.withdrawal.berat,
    variables.conflict.ringan,
    variables.relapse.berat,
    r4,
    z4,
    r4 * z4,
  ]);

  // RULE 5
  const r5 = Math.min(
    variables.salience.ringan,
    variables.mood.ringan,
    variables.tolerance.berat,
    variables.withdrawal.ringan,
    variables.conflict.ringan,
    variables.relapse.ringan
  );
  // const z5 = resultRange[1] - r5 * (resultRange[1] - resultRange[0]);
  const z5 = triangularMembershipOutput(r5, 'ringan');
  rules.push([
    variables.salience.ringan,
    variables.mood.ringan,
    variables.tolerance.berat,
    variables.withdrawal.ringan,
    variables.conflict.ringan,
    variables.relapse.ringan,
    r5,
    z5,
    r5 * z5,
  ]);

  // RULE 6
  const r6 = Math.min(
    variables.salience.ringan,
    variables.mood.ringan,
    variables.tolerance.berat,
    variables.withdrawal.ringan,
    variables.conflict.ringan,
    variables.relapse.berat
  );
  // const z6 = resultRange[1] - r6 * (resultRange[1] - resultRange[0]);
  const z6 = triangularMembershipOutput(r6, 'ringan');
  rules.push([
    variables.salience.ringan,
    variables.mood.ringan,
    variables.tolerance.berat,
    variables.withdrawal.ringan,
    variables.conflict.ringan,
    variables.relapse.berat,
    r6,
    z6,
    r6 * z6,
  ]);

  // RULE 7
  const r7 = Math.min(
    variables.salience.ringan,
    variables.mood.ringan,
    variables.tolerance.berat,
    variables.withdrawal.berat,
    variables.conflict.ringan,
    variables.relapse.ringan
  );
  // const z7 = resultRange[1] - r7 * (resultRange[1] - resultRange[0]);
  const z7 = triangularMembershipOutput(r7, 'ringan');
  rules.push([
    variables.salience.ringan,
    variables.mood.ringan,
    variables.tolerance.berat,
    variables.withdrawal.berat,
    variables.conflict.ringan,
    variables.relapse.ringan,
    r7,
    z7,
    r7 * z7,
  ]);

  // RULE 8
  const r8 = Math.min(
    variables.salience.ringan,
    variables.mood.ringan,
    variables.tolerance.berat,
    variables.withdrawal.berat,
    variables.conflict.ringan,
    variables.relapse.berat
  );
  // const z8 = resultRange[1] - r8 * (resultRange[1] - resultRange[0]);
  const z8 = triangularMembershipOutput(r8, 'sedang');
  rules.push([
    variables.salience.ringan,
    variables.mood.ringan,
    variables.tolerance.berat,
    variables.withdrawal.berat,
    variables.conflict.ringan,
    variables.relapse.berat,
    r8,
    z8,
    r8 * z8,
  ]);

  // RULE 9
  const r9 = Math.min(
    variables.salience.ringan,
    variables.mood.berat,
    variables.tolerance.ringan,
    variables.withdrawal.ringan,
    variables.conflict.ringan,
    variables.relapse.ringan
  );
  // const z9 = resultRange[1] - r9 * (resultRange[1] - resultRange[0]);
  const z9 = triangularMembershipOutput(r9, 'ringan');
  rules.push([
    variables.salience.ringan,
    variables.mood.berat,
    variables.tolerance.ringan,
    variables.withdrawal.ringan,
    variables.conflict.ringan,
    variables.relapse.ringan,
    r9,
    z9,
    r9 * z9,
  ]);

  // RULE 10
  const r10 = Math.min(
    variables.salience.ringan,
    variables.mood.berat,
    variables.tolerance.ringan,
    variables.withdrawal.ringan,
    variables.conflict.ringan,
    variables.relapse.berat
  );
  // const z10 = resultRange[1] - r10 * (resultRange[1] - resultRange[0]);
  const z10 = triangularMembershipOutput(r10, 'ringan');
  rules.push([
    variables.salience.ringan,
    variables.mood.berat,
    variables.tolerance.ringan,
    variables.withdrawal.ringan,
    variables.conflict.ringan,
    variables.relapse.berat,
    r10,
    z10,
    r10 * z10,
  ]);

  // RULE 11
  const r11 = Math.min(
    variables.salience.ringan,
    variables.mood.berat,
    variables.tolerance.ringan,
    variables.withdrawal.ringan,
    variables.conflict.berat,
    variables.relapse.ringan
  );
  // const z11 = resultRange[1] - r11 * (resultRange[1] - resultRange[0]);
  const z11 = triangularMembershipOutput(r11, 'ringan');
  rules.push([
    variables.salience.ringan,
    variables.mood.berat,
    variables.tolerance.ringan,
    variables.withdrawal.ringan,
    variables.conflict.berat,
    variables.relapse.ringan,
    r11,
    z11,
    r11 * z11,
  ]);

  // RULE 12
  const r12 = Math.min(
    variables.salience.ringan,
    variables.mood.berat,
    variables.tolerance.ringan,
    variables.withdrawal.ringan,
    variables.conflict.berat,
    variables.relapse.berat
  );
  // const z12 = resultRange[1] - r12 * (resultRange[1] - resultRange[0]);
  const z12 = triangularMembershipOutput(r12, 'sedang');
  rules.push([
    variables.salience.ringan,
    variables.mood.berat,
    variables.tolerance.ringan,
    variables.withdrawal.ringan,
    variables.conflict.berat,
    variables.relapse.berat,
    r12,
    z12,
    r12 * z12,
  ]);

  // RULE 13
  const r13 = Math.min(
    variables.salience.ringan,
    variables.mood.berat,
    variables.tolerance.berat,
    variables.withdrawal.ringan,
    variables.conflict.ringan,
    variables.relapse.ringan
  );
  // const z13 = resultRange[1] - r13 * (resultRange[1] - resultRange[0]);
  const z13 = triangularMembershipOutput(r13, 'ringan');
  rules.push([
    variables.salience.ringan,
    variables.mood.berat,
    variables.tolerance.berat,
    variables.withdrawal.ringan,
    variables.conflict.ringan,
    variables.relapse.ringan,
    r13,
    z13,
    r13 * z13,
  ]);

  // RULE 14
  const r14 = Math.min(
    variables.salience.ringan,
    variables.mood.berat,
    variables.tolerance.berat,
    variables.withdrawal.ringan,
    variables.conflict.ringan,
    variables.relapse.berat
  );
  // const z14 = resultRange[1] - r14 * (resultRange[1] - resultRange[0]);
  const z14 = triangularMembershipOutput(r14, 'sedang');
  rules.push([
    variables.salience.ringan,
    variables.mood.berat,
    variables.tolerance.berat,
    variables.withdrawal.ringan,
    variables.conflict.ringan,
    variables.relapse.berat,
    r14,
    z14,
    r14 * z14,
  ]);

  // RULE 15
  const r15 = Math.min(
    variables.salience.ringan,
    variables.mood.berat,
    variables.tolerance.berat,
    variables.withdrawal.ringan,
    variables.conflict.berat,
    variables.relapse.ringan
  );
  // const z15 = resultRange[1] - r15 * (resultRange[1] - resultRange[0]);
  const z15 = triangularMembershipOutput(r15, 'sedang');
  rules.push([
    variables.salience.ringan,
    variables.mood.berat,
    variables.tolerance.berat,
    variables.withdrawal.ringan,
    variables.conflict.berat,
    variables.relapse.ringan,
    r15,
    z15,
    r15 * z15,
  ]);

  // RULE 16
  const r16 = Math.min(
    variables.salience.ringan,
    variables.mood.berat,
    variables.tolerance.berat,
    variables.withdrawal.ringan,
    variables.conflict.berat,
    variables.relapse.berat
  );
  // const z16 = resultRange[1] - r16 * (resultRange[1] - resultRange[0]);
  const z16 = triangularMembershipOutput(r16, 'sedang');
  rules.push([
    variables.salience.ringan,
    variables.mood.berat,
    variables.tolerance.berat,
    variables.withdrawal.ringan,
    variables.conflict.berat,
    variables.relapse.berat,
    r16,
    z16,
    r16 * z16,
  ]);

  // RULE 17
  const r17 = Math.min(
    variables.salience.ringan,
    variables.mood.berat,
    variables.tolerance.ringan,
    variables.withdrawal.berat,
    variables.conflict.ringan,
    variables.relapse.ringan
  );
  // const z17 = resultRange[1] - r17 * (resultRange[1] - resultRange[0]);
  const z17 = triangularMembershipOutput(r17, 'ringan');
  rules.push([
    variables.salience.ringan,
    variables.mood.berat,
    variables.tolerance.ringan,
    variables.withdrawal.berat,
    variables.conflict.ringan,
    variables.relapse.ringan,
    r17,
    z17,
    r17 * z17,
  ]);

  // RULE 18
  const r18 = Math.min(
    variables.salience.ringan,
    variables.mood.berat,
    variables.tolerance.ringan,
    variables.withdrawal.berat,
    variables.conflict.ringan,
    variables.relapse.berat
  );
  // const z18 = resultRange[1] - r18 * (resultRange[1] - resultRange[0]);
  const z18 = triangularMembershipOutput(r18, 'ringan');
  rules.push([
    variables.salience.ringan,
    variables.mood.berat,
    variables.tolerance.ringan,
    variables.withdrawal.berat,
    variables.conflict.ringan,
    variables.relapse.berat,
    r18,
    z18,
    r18 * z18,
  ]);

  // RULE 19
  const r19 = Math.min(
    variables.salience.ringan,
    variables.mood.berat,
    variables.tolerance.ringan,
    variables.withdrawal.berat,
    variables.conflict.berat,
    variables.relapse.ringan
  );
  // const z19 = resultRange[1] - r19 * (resultRange[1] - resultRange[0]);
  const z19 = triangularMembershipOutput(r19, 'ringan');
  rules.push([
    variables.salience.ringan,
    variables.mood.berat,
    variables.tolerance.ringan,
    variables.withdrawal.berat,
    variables.conflict.berat,
    variables.relapse.ringan,
    r19,
    z19,
    r19 * z19,
  ]);

  // RULE 20
  const r20 = Math.min(
    variables.salience.ringan,
    variables.mood.berat,
    variables.tolerance.ringan,
    variables.withdrawal.berat,
    variables.conflict.berat,
    variables.relapse.berat
  );
  // const z20 = resultRange[1] - r20 * (resultRange[1] - resultRange[0]);
  const z20 = triangularMembershipOutput(r20, 'sedang');
  rules.push([
    variables.salience.ringan,
    variables.mood.berat,
    variables.tolerance.ringan,
    variables.withdrawal.berat,
    variables.conflict.berat,
    variables.relapse.berat,
    r20,
    z20,
    r20 * z20,
  ]);

  // RULE 21
  const r21 = Math.min(
    variables.salience.berat,
    variables.mood.ringan,
    variables.tolerance.ringan,
    variables.withdrawal.ringan,
    variables.conflict.ringan,
    variables.relapse.ringan
  );
  // const z21 = resultRange[1] - r21 * (resultRange[1] - resultRange[0]);
  const z21 = triangularMembershipOutput(r21, 'ringan');
  rules.push([
    variables.salience.berat,
    variables.mood.ringan,
    variables.tolerance.ringan,
    variables.withdrawal.ringan,
    variables.conflict.ringan,
    variables.relapse.ringan,
    r21,
    z21,
    r21 * z21,
  ]);

  // RULE 22
  const r22 = Math.min(
    variables.salience.berat,
    variables.mood.ringan,
    variables.tolerance.ringan,
    variables.withdrawal.ringan,
    variables.conflict.berat,
    variables.relapse.berat
  );
  // const z22 = resultRange[1] - r22 * (resultRange[1] - resultRange[0]);
  const z22 = triangularMembershipOutput(r22, 'sedang');
  rules.push([
    variables.salience.berat,
    variables.mood.ringan,
    variables.tolerance.ringan,
    variables.withdrawal.ringan,
    variables.conflict.berat,
    variables.relapse.berat,
    r22,
    z22,
    r22 * z22,
  ]);

  // RULE 23
  const r23 = Math.min(
    variables.salience.berat,
    variables.mood.ringan,
    variables.tolerance.ringan,
    variables.withdrawal.berat,
    variables.conflict.ringan,
    variables.relapse.ringan
  );
  // const z23 = resultRange[1] - r23 * (resultRange[1] - resultRange[0]);
  const z23 = triangularMembershipOutput(r23, 'sedang');
  rules.push([
    variables.salience.berat,
    variables.mood.ringan,
    variables.tolerance.ringan,
    variables.withdrawal.berat,
    variables.conflict.ringan,
    variables.relapse.ringan,
    r23,
    z23,
    r23 * z23,
  ]);

  // RULE 24
  const r24 = Math.min(
    variables.salience.berat,
    variables.mood.ringan,
    variables.tolerance.ringan,
    variables.withdrawal.berat,
    variables.conflict.ringan,
    variables.relapse.berat
  );
  // const z24 = resultRange[1] - r24 * (resultRange[1] - resultRange[0]);
  const z24 = triangularMembershipOutput(r24, 'sedang');
  rules.push([
    variables.salience.berat,
    variables.mood.ringan,
    variables.tolerance.ringan,
    variables.withdrawal.berat,
    variables.conflict.ringan,
    variables.relapse.berat,
    r24,
    z24,
    r24 * z24,
  ]);

  // RULE 25
  const r25 = Math.min(
    variables.salience.berat,
    variables.mood.ringan,
    variables.tolerance.ringan,
    variables.withdrawal.berat,
    variables.conflict.berat,
    variables.relapse.ringan
  );
  // const z25 = resultRange[1] - r25 * (resultRange[1] - resultRange[0]);
  const z25 = triangularMembershipOutput(r25, 'ringan');
  rules.push([
    variables.salience.berat,
    variables.mood.ringan,
    variables.tolerance.ringan,
    variables.withdrawal.berat,
    variables.conflict.berat,
    variables.relapse.ringan,
    r25,
    z25,

    r25 * z25,
  ]);

  // RULE 26
  const r26 = Math.min(
    variables.salience.berat,
    variables.mood.ringan,
    variables.tolerance.berat,
    variables.withdrawal.ringan,
    variables.conflict.ringan,
    variables.relapse.ringan
  );
  // const z26 = resultRange[1] - r26 * (resultRange[1] - resultRange[0]);
  const z26 = triangularMembershipOutput(r26, 'sedang');
  rules.push([
    variables.salience.berat,
    variables.mood.ringan,
    variables.tolerance.berat,
    variables.withdrawal.ringan,
    variables.conflict.ringan,
    variables.relapse.ringan,
    r26,
    z26,
    r26 * z26,
  ]);

  // RULE 27
  const r27 = Math.min(
    variables.salience.berat,
    variables.mood.ringan,
    variables.tolerance.berat,
    variables.withdrawal.ringan,
    variables.conflict.berat,
    variables.relapse.berat
  );
  // const z27 = resultRange[1] - r27 * (resultRange[1] - resultRange[0]);
  const z27 = triangularMembershipOutput(r27, 'sedang');
  rules.push([
    variables.salience.berat,
    variables.mood.ringan,
    variables.tolerance.berat,
    variables.withdrawal.ringan,
    variables.conflict.berat,
    variables.relapse.berat,
    r27,
    z27,
    r27 * z27,
  ]);

  // RULE 28
  const r28 = Math.min(
    variables.salience.berat,
    variables.mood.ringan,
    variables.tolerance.berat,
    variables.withdrawal.berat,
    variables.conflict.ringan,
    variables.relapse.ringan
  );
  // const z28 = resultRange[1] - r28 * (resultRange[1] - resultRange[0]);
  const z28 = triangularMembershipOutput(r28, 'sedang');
  rules.push([
    variables.salience.berat,
    variables.mood.ringan,
    variables.tolerance.berat,
    variables.withdrawal.berat,
    variables.conflict.ringan,
    variables.relapse.ringan,
    r28,
    z28,
    r28 * z28,
  ]);

  // RULE 29
  const r29 = Math.min(
    variables.salience.berat,
    variables.mood.ringan,
    variables.tolerance.berat,
    variables.withdrawal.berat,
    variables.conflict.ringan,
    variables.relapse.berat
  );
  // const z29 = resultRange[1] - r29 * (resultRange[1] - resultRange[0]);
  const z29 = triangularMembershipOutput(r29, 'sedang');
  rules.push([
    variables.salience.berat,
    variables.mood.ringan,
    variables.tolerance.berat,
    variables.withdrawal.berat,
    variables.conflict.ringan,
    variables.relapse.berat,
    r29,
    z29,
    r29 * z29,
  ]);

  // RULE 30
  const r30 = Math.min(
    variables.salience.berat,
    variables.mood.ringan,
    variables.tolerance.berat,
    variables.withdrawal.berat,
    variables.conflict.berat,
    variables.relapse.ringan
  );
  // const z30 = resultRange[1] - r30 * (resultRange[1] - resultRange[0]);
  const z30 = triangularMembershipOutput(r30, 'sedang');
  rules.push([
    variables.salience.berat,
    variables.mood.ringan,
    variables.tolerance.berat,
    variables.withdrawal.berat,
    variables.conflict.berat,
    variables.relapse.ringan,

    r30,
    z30,
    r30 * z30,
  ]);

  // RULE 31
  const r31 = Math.min(
    variables.salience.berat,
    variables.mood.ringan,
    variables.tolerance.berat,
    variables.withdrawal.berat,
    variables.conflict.berat,
    variables.relapse.berat
  );
  // const z31 = resultRange[1] - r31 * (resultRange[1] - resultRange[0]);
  const z31 = triangularMembershipOutput(r31, 'sedang');
  rules.push([
    variables.salience.berat,
    variables.mood.ringan,
    variables.tolerance.berat,
    variables.withdrawal.berat,
    variables.conflict.berat,
    variables.relapse.berat,
    r31,
    z31,
    r31 * z31,
  ]);

  // RULE 32
  const r32 = Math.min(
    variables.salience.berat,
    variables.mood.berat,
    variables.tolerance.ringan,
    variables.withdrawal.ringan,
    variables.conflict.ringan,
    variables.relapse.ringan
  );
  // const z32 = resultRange[1] - r32 * (resultRange[1] - resultRange[0]);
  const z32 = triangularMembershipOutput(r32, 'berat');
  rules.push([
    variables.salience.berat,
    variables.mood.berat,
    variables.tolerance.ringan,
    variables.withdrawal.ringan,
    variables.conflict.ringan,
    variables.relapse.ringan,
    r32,
    z32,
    r32 * z32,
  ]);

  // RULE 33
  const r33 = Math.min(
    variables.salience.berat,
    variables.mood.berat,
    variables.tolerance.ringan,
    variables.withdrawal.ringan,
    variables.conflict.ringan,
    variables.relapse.berat
  );
  // const z33 = resultRange[1] - r33 * (resultRange[1] - resultRange[0]);
  const z33 = triangularMembershipOutput(r33, 'ringan');
  rules.push([
    variables.salience.berat,
    variables.mood.berat,
    variables.tolerance.ringan,
    variables.withdrawal.ringan,
    variables.conflict.ringan,
    variables.relapse.berat,
    r33,
    z33,
    r33 * z33,
  ]);

  // RULE 34
  const r34 = Math.min(
    variables.salience.berat,
    variables.mood.berat,
    variables.tolerance.ringan,
    variables.withdrawal.ringan,
    variables.conflict.berat,
    variables.relapse.ringan
  );
  // const z34 = resultRange[1] - r34 * (resultRange[1] - resultRange[0]);
  const z34 = triangularMembershipOutput(r34, 'ringan');
  rules.push([
    variables.salience.berat,
    variables.mood.berat,
    variables.tolerance.ringan,
    variables.withdrawal.ringan,
    variables.conflict.berat,
    variables.relapse.ringan,
    r34,
    z34,
    r34 * z34,
  ]);

  // RULE 35
  const r35 = Math.min(
    variables.salience.berat,
    variables.mood.berat,
    variables.tolerance.ringan,
    variables.withdrawal.ringan,
    variables.conflict.berat,
    variables.relapse.berat
  );
  // const z35 = resultRange[1] - r35 * (resultRange[1] - resultRange[0]);
  const z35 = triangularMembershipOutput(r35, 'ringan');
  rules.push([
    variables.salience.berat,
    variables.mood.berat,
    variables.tolerance.ringan,
    variables.withdrawal.ringan,
    variables.conflict.berat,
    variables.relapse.berat,
    r35,
    z35,
    r35 * z35,
  ]);

  // RULE 36
  const r36 = Math.min(
    variables.salience.berat,
    variables.mood.berat,
    variables.tolerance.ringan,
    variables.withdrawal.berat,
    variables.conflict.ringan,
    variables.relapse.ringan
  );
  // const z36 = resultRange[1] - r36 * (resultRange[1] - resultRange[0]);
  const z36 = triangularMembershipOutput(r36, 'sedang');
  rules.push([
    variables.salience.berat,
    variables.mood.berat,
    variables.tolerance.ringan,
    variables.withdrawal.berat,
    variables.conflict.ringan,
    variables.relapse.ringan,
    r36,
    z36,
    r36 * z36,
  ]);

  // RULE 37
  const r37 = Math.min(
    variables.salience.berat,
    variables.mood.berat,
    variables.tolerance.ringan,
    variables.withdrawal.berat,
    variables.conflict.ringan,
    variables.relapse.berat
  );
  // const z37 = resultRange[1] - r37 * (resultRange[1] - resultRange[0]);
  const z37 = triangularMembershipOutput(r37, 'ringan');
  rules.push([
    variables.salience.berat,
    variables.mood.berat,
    variables.tolerance.ringan,
    variables.withdrawal.berat,
    variables.conflict.ringan,
    variables.relapse.berat,
    r37,
    z37,
    r37 * z37,
  ]);

  // RULE 38
  const r38 = Math.min(
    variables.salience.berat,
    variables.mood.berat,
    variables.tolerance.ringan,
    variables.withdrawal.berat,
    variables.conflict.berat,
    variables.relapse.ringan
  );
  // const z38 = resultRange[1] - r38 * (resultRange[1] - resultRange[0]);
  const z38 = triangularMembershipOutput(r38, 'sedang');
  rules.push([
    variables.salience.berat,
    variables.mood.berat,
    variables.tolerance.ringan,
    variables.withdrawal.berat,
    variables.conflict.berat,
    variables.relapse.ringan,
    r38,
    z38,
    r38 * z38,
  ]);

  // RULE 39
  const r39 = Math.min(
    variables.salience.berat,
    variables.mood.berat,
    variables.tolerance.ringan,
    variables.withdrawal.berat,
    variables.conflict.berat,
    variables.relapse.berat
  );
  // const z39 = resultRange[1] - r39 * (resultRange[1] - resultRange[0]);
  const z39 = triangularMembershipOutput(r39, 'sedang');
  rules.push([
    variables.salience.berat,
    variables.mood.berat,
    variables.tolerance.ringan,
    variables.withdrawal.berat,
    variables.conflict.berat,
    variables.relapse.berat,
    r39,
    z39,
    r39 * z39,
  ]);

  // RULE 40
  const r40 = Math.min(
    variables.salience.berat,
    variables.mood.berat,
    variables.tolerance.berat,
    variables.withdrawal.ringan,
    variables.conflict.ringan,
    variables.relapse.ringan
  );
  // const z40 = resultRange[1] - r40 * (resultRange[1] - resultRange[0]);
  const z40 = triangularMembershipOutput(r40, 'sedang');
  rules.push([
    variables.salience.berat,
    variables.mood.berat,
    variables.tolerance.berat,
    variables.withdrawal.ringan,
    variables.conflict.ringan,
    variables.relapse.ringan,
    r40,
    z40,
    r40 * z40,
  ]);

  // RULE 41
  const r41 = Math.min(
    variables.salience.berat,
    variables.mood.berat,
    variables.tolerance.berat,
    variables.withdrawal.ringan,
    variables.conflict.ringan,
    variables.relapse.berat
  );
  // const z41 = resultRange[1] - r41 * (resultRange[1] - resultRange[0]);
  const z41 = triangularMembershipOutput(r41, 'ringan');
  rules.push([
    variables.salience.berat,
    variables.mood.berat,
    variables.tolerance.berat,
    variables.withdrawal.ringan,
    variables.conflict.ringan,
    variables.relapse.berat,
    r41,
    z41,
    r41 * z41,
  ]);

  // RULE 42
  const r42 = Math.min(
    variables.salience.berat,
    variables.mood.berat,
    variables.tolerance.berat,
    variables.withdrawal.ringan,
    variables.conflict.berat,
    variables.relapse.ringan
  );
  // const z42 = resultRange[1] - r42 * (resultRange[1] - resultRange[0]);
  const z42 = triangularMembershipOutput(r42, 'sedang');
  rules.push([
    variables.salience.berat,
    variables.mood.berat,
    variables.tolerance.berat,
    variables.withdrawal.ringan,
    variables.conflict.berat,
    variables.relapse.ringan,
    r42,
    z42,
    r42 * z42,
  ]);

  // RULE 43
  const r43 = Math.min(
    variables.salience.berat,
    variables.mood.berat,
    variables.tolerance.berat,
    variables.withdrawal.ringan,
    variables.conflict.berat,
    variables.relapse.berat
  );
  // const z43 = resultRange[1] - r43 * (resultRange[1] - resultRange[0]);
  const z43 = triangularMembershipOutput(r43, 'sedang');
  rules.push([
    variables.salience.berat,
    variables.mood.berat,
    variables.tolerance.berat,
    variables.withdrawal.ringan,
    variables.conflict.berat,
    variables.relapse.berat,
    r43,
    z43,
    r43 * z43,
  ]);

  // RULE 44
  const r44 = Math.min(
    variables.salience.berat,
    variables.mood.berat,
    variables.tolerance.berat,
    variables.withdrawal.berat,
    variables.conflict.ringan,
    variables.relapse.ringan
  );
  // const z44 = resultRange[1] - r44 * (resultRange[1] - resultRange[0]);
  const z44 = triangularMembershipOutput(r44, 'sedang');
  rules.push([
    variables.salience.berat,
    variables.mood.berat,
    variables.tolerance.berat,
    variables.withdrawal.berat,
    variables.conflict.ringan,
    variables.relapse.ringan,
    r44,
    z44,
    r44 * z44,
  ]);

  // RULE 45
  const r45 = Math.min(
    variables.salience.berat,
    variables.mood.berat,
    variables.tolerance.berat,
    variables.withdrawal.berat,
    variables.conflict.ringan,
    variables.relapse.berat
  );
  // const z45 = resultRange[1] - r45 * (resultRange[1] - resultRange[0]);
  const z45 = triangularMembershipOutput(r45, 'sedang');
  rules.push([
    variables.salience.berat,
    variables.mood.berat,
    variables.tolerance.berat,
    variables.withdrawal.berat,
    variables.conflict.ringan,
    variables.relapse.berat,
    r45,
    z45,
    r45 * z45,
  ]);

  // RULE 46
  const r46 = Math.min(
    variables.salience.berat,
    variables.mood.berat,
    variables.tolerance.berat,
    variables.withdrawal.berat,
    variables.conflict.berat,
    variables.relapse.ringan
  );
  // const z46 = resultRange[1] - r46 * (resultRange[1] - resultRange[0]);
  const z46 = triangularMembershipOutput(r46, 'sedang');
  rules.push([
    variables.salience.berat,
    variables.mood.berat,
    variables.tolerance.berat,
    variables.withdrawal.berat,
    variables.conflict.berat,
    variables.relapse.ringan,
    r46,
    z46,
    r46 * z46,
  ]);

  // RULE 47
  const r47 = Math.min(
    variables.salience.berat,
    variables.mood.berat,
    variables.tolerance.berat,
    variables.withdrawal.berat,
    variables.conflict.berat,
    variables.relapse.berat
  );
  // const z47 = resultRange[1] - r47 * (resultRange[1] - resultRange[0]);
  const z47 = triangularMembershipOutput(r47, 'sedang');
  rules.push([
    variables.salience.berat,
    variables.mood.berat,
    variables.tolerance.berat,
    variables.withdrawal.berat,
    variables.conflict.berat,
    variables.relapse.berat,
    r47,
    z47,
    r47 * z47,
  ]);

  // RULE 48
  const r48 = Math.min(
    variables.salience.ringan,
    variables.mood.ringan,
    variables.tolerance.ringan,
    variables.withdrawal.ringan,
    variables.conflict.ringan,
    variables.relapse.ringan
  );
  // const z48 = resultRange[1] - r48 * (resultRange[1] - resultRange[0]);
  const z48 = triangularMembershipOutput(r48, 'berat');
  rules.push([
    variables.salience.ringan,
    variables.mood.ringan,
    variables.tolerance.ringan,
    variables.withdrawal.ringan,
    variables.conflict.ringan,
    variables.relapse.ringan,
    r48,
    z48,
    r48 * z48,
  ]);

  // RULE 49
  const r49 = Math.min(
    variables.salience.ringan,
    variables.mood.ringan,
    variables.tolerance.ringan,
    variables.withdrawal.ringan,
    variables.conflict.ringan,
    variables.relapse.berat
  );
  // const z49 = resultRange[1] - r49 * (resultRange[1] - resultRange[0]);
  const z49 = triangularMembershipOutput(r49, 'ringan');
  rules.push([
    variables.salience.ringan,
    variables.mood.ringan,
    variables.tolerance.ringan,
    variables.withdrawal.ringan,
    variables.conflict.ringan,
    variables.relapse.berat,
    r49,
    z49,
    r49 * z49,
  ]);

  // RULE 50
  const r50 = Math.min(
    variables.salience.ringan,
    variables.mood.ringan,
    variables.tolerance.ringan,
    variables.withdrawal.ringan,
    variables.conflict.berat,
    variables.relapse.ringan
  );
  // const z50 = resultRange[1] - r50 * (resultRange[1] - resultRange[0]);
  const z50 = triangularMembershipOutput(r50, 'sedang');
  rules.push([
    variables.salience.ringan,
    variables.mood.ringan,
    variables.tolerance.ringan,
    variables.withdrawal.ringan,
    variables.conflict.berat,
    variables.relapse.ringan,
    r50,
    z50,
    r50 * z50,
  ]);

  // RULE 51
  const r51 = Math.min(
    variables.salience.ringan,
    variables.mood.ringan,
    variables.tolerance.ringan,
    variables.withdrawal.ringan,
    variables.conflict.berat,
    variables.relapse.berat
  );
  // const z51 = resultRange[1] - r51 * (resultRange[1] - resultRange[0]);
  const z51 = triangularMembershipOutput(r51, 'sedang');
  rules.push([
    variables.salience.ringan,
    variables.mood.ringan,
    variables.tolerance.ringan,
    variables.withdrawal.ringan,
    variables.conflict.berat,
    variables.relapse.berat,
    r51,
    z51,
    r51 * z51,
  ]);

  // RULE 52
  const r52 = Math.min(
    variables.salience.ringan,
    variables.mood.ringan,
    variables.tolerance.ringan,
    variables.withdrawal.berat,
    variables.conflict.ringan,
    variables.relapse.ringan
  );
  // const z52 = resultRange[1] - r52 * (resultRange[1] - resultRange[0]);
  const z52 = triangularMembershipOutput(r52, 'sedang');
  rules.push([
    variables.salience.ringan,
    variables.mood.ringan,
    variables.tolerance.ringan,
    variables.withdrawal.berat,
    variables.conflict.ringan,
    variables.relapse.ringan,
    r52,
    z52,
    r52 * z52,
  ]);

  // RULE 53
  const r53 = Math.min(
    variables.salience.ringan,
    variables.mood.ringan,
    variables.tolerance.ringan,
    variables.withdrawal.berat,
    variables.conflict.ringan,
    variables.relapse.berat
  );
  // const z53 = resultRange[1] - r53 * (resultRange[1] - resultRange[0]);
  const z53 = triangularMembershipOutput(r53, 'sedang');
  rules.push([
    variables.salience.ringan,
    variables.mood.ringan,
    variables.tolerance.ringan,
    variables.withdrawal.berat,
    variables.conflict.ringan,
    variables.relapse.berat,
    r53,
    z53,
    r53 * z53,
  ]);

  // RULE 54
  const r54 = Math.min(
    variables.salience.ringan,
    variables.mood.ringan,
    variables.tolerance.ringan,
    variables.withdrawal.berat,
    variables.conflict.berat,
    variables.relapse.ringan
  );
  // const z54 = resultRange[1] - r54 * (resultRange[1] - resultRange[0]);
  const z54 = triangularMembershipOutput(r54, 'sedang');
  rules.push([
    variables.salience.ringan,
    variables.mood.ringan,
    variables.tolerance.ringan,
    variables.withdrawal.berat,
    variables.conflict.berat,
    variables.relapse.ringan,
    r54,
    z54,
    r54 * z54,
  ]);

  // RULE 55
  const r55 = Math.min(
    variables.salience.ringan,
    variables.mood.ringan,
    variables.tolerance.ringan,
    variables.withdrawal.berat,
    variables.conflict.berat,
    variables.relapse.berat
  );
  // const z55 = resultRange[1] - r55 * (resultRange[1] - resultRange[0]);
  const z55 = triangularMembershipOutput(r55, 'sedang');
  rules.push([
    variables.salience.ringan,
    variables.mood.ringan,

    variables.tolerance.ringan,
    variables.withdrawal.berat,
    variables.conflict.berat,
    variables.relapse.berat,
    r55,
    z55,
    r55 * z55,
  ]);

  // RULE 56
  const r56 = Math.min(
    variables.salience.ringan,
    variables.mood.ringan,
    variables.tolerance.berat,
    variables.withdrawal.ringan,
    variables.conflict.ringan,
    variables.relapse.ringan
  );
  // const z56 = resultRange[1] - r56 * (resultRange[1] - resultRange[0]);
  const z56 = triangularMembershipOutput(r56, 'berat');
  rules.push([
    variables.salience.ringan,
    variables.mood.ringan,
    variables.tolerance.berat,
    variables.withdrawal.ringan,
    variables.conflict.ringan,
    variables.relapse.ringan,
    r56,
    z56,
    r56 * z56,
  ]);

  // RULE 57
  const r57 = Math.min(
    variables.salience.ringan,
    variables.mood.ringan,
    variables.tolerance.berat,
    variables.withdrawal.ringan,
    variables.conflict.ringan,
    variables.relapse.berat
  );
  // const z57 = resultRange[1] - r57 * (resultRange[1] - resultRange[0]);
  const z57 = triangularMembershipOutput(r57, 'sedang');
  rules.push([
    variables.salience.ringan,
    variables.mood.ringan,
    variables.tolerance.berat,
    variables.withdrawal.ringan,
    variables.conflict.ringan,
    variables.relapse.berat,
    r57,
    z57,
    r57 * z57,
  ]);

  // RULE 58
  const r58 = Math.min(
    variables.salience.ringan,
    variables.mood.ringan,
    variables.tolerance.berat,
    variables.withdrawal.ringan,
    variables.conflict.berat,
    variables.relapse.ringan
  );
  // const z58 = resultRange[1] - r58 * (resultRange[1] - resultRange[0]);
  const z58 = triangularMembershipOutput(r58, 'sedang');
  rules.push([
    variables.salience.ringan,
    variables.mood.ringan,
    variables.tolerance.berat,
    variables.withdrawal.ringan,
    variables.conflict.berat,
    variables.relapse.ringan,
    r58,
    z58,
    r58 * z58,
  ]);

  // RULE 59
  const r59 = Math.min(
    variables.salience.ringan,
    variables.mood.ringan,
    variables.tolerance.berat,
    variables.withdrawal.ringan,
    variables.conflict.berat,
    variables.relapse.berat
  );
  // const z59 = resultRange[1] - r59 * (resultRange[1] - resultRange[0]);
  const z59 = triangularMembershipOutput(r59, 'sedang');
  rules.push([
    variables.salience.ringan,
    variables.mood.ringan,
    variables.tolerance.berat,
    variables.withdrawal.ringan,
    variables.conflict.berat,
    variables.relapse.berat,
    r59,
    z59,
    r59 * z59,
  ]);

  // RULE 60
  const r60 = Math.min(
    variables.salience.ringan,
    variables.mood.ringan,
    variables.tolerance.berat,
    variables.withdrawal.berat,
    variables.conflict.ringan,
    variables.relapse.ringan
  );
  // const z60 = resultRange[1] - r60 * (resultRange[1] - resultRange[0]);
  const z60 = triangularMembershipOutput(r60, 'berat');
  rules.push([
    variables.salience.ringan,

    variables.mood.ringan,
    variables.tolerance.berat,
    variables.withdrawal.berat,
    variables.conflict.ringan,
    variables.relapse.ringan,
    r60,
    z60,
    r60 * z60,
  ]);

  // RULE 61
  const r61 = Math.min(
    variables.salience.ringan,
    variables.mood.ringan,
    variables.tolerance.berat,
    variables.withdrawal.berat,
    variables.conflict.ringan,
    variables.relapse.berat
  );
  // const z61 = resultRange[1] - r61 * (resultRange[1] - resultRange[0]);
  const z61 = triangularMembershipOutput(r61, 'sedang');
  rules.push([
    variables.salience.ringan,
    variables.mood.ringan,
    variables.tolerance.berat,
    variables.withdrawal.berat,
    variables.conflict.ringan,
    variables.relapse.berat,
    r61,
    z61,
    r61 * z61,
  ]);

  // RULE 62
  const r62 = Math.min(
    variables.salience.ringan,
    variables.mood.ringan,
    variables.tolerance.berat,
    variables.withdrawal.berat,
    variables.conflict.berat,
    variables.relapse.ringan
  );
  // const z62 = resultRange[1] - r62 * (resultRange[1] - resultRange[0]);
  const z62 = triangularMembershipOutput(r62, 'berat');
  rules.push([
    variables.salience.ringan,
    variables.mood.ringan,
    variables.tolerance.berat,
    variables.withdrawal.berat,
    variables.conflict.berat,
    variables.relapse.ringan,
    r62,
    z62,
    r62 * z62,
  ]);

  // RULE 63
  const r63 = Math.min(
    variables.salience.ringan,
    variables.mood.ringan,
    variables.tolerance.berat,
    variables.withdrawal.berat,
    variables.conflict.berat,
    variables.relapse.berat
  );
  // const z63 = resultRange[1] - r63 * (resultRange[1] - resultRange[0]);
  const z63 = triangularMembershipOutput(r63, 'berat');
  rules.push([
    variables.salience.ringan,
    variables.mood.ringan,
    variables.tolerance.berat,
    variables.withdrawal.berat,
    variables.conflict.berat,
    variables.relapse.berat,
    r63,
    z63,
    r63 * z63,
  ]);

  // RULE 64
  const r64 = Math.min(
    variables.salience.berat,
    variables.mood.ringan,
    variables.tolerance.ringan,
    variables.withdrawal.ringan,
    variables.conflict.ringan,
    variables.relapse.ringan
  );
  // const z64 = resultRange[1] - r64 * (resultRange[1] - resultRange[0]);
  const z64 = triangularMembershipOutput(r64, 'berat');
  rules.push([
    variables.salience.berat,
    variables.mood.ringan,
    variables.tolerance.ringan,
    variables.withdrawal.ringan,
    variables.conflict.ringan,
    variables.relapse.ringan,
    r64,
    z64,
    r64 * z64,
  ]);

  return rules;
};
