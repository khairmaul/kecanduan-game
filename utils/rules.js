const triangularMembershipOutput = (alpha, selector) => {
  if (selector === 'ringan') {
    return 46 - alpha * (46 - 20);
  }
  if (selector === 'sedang') {
    return 50 + alpha * (50 - 46);
  }
  return 73 + alpha * (73 - 50);
};

exports.getFuzzyRules = (variables) => {
  const rules = [];

  // RULE 1v
  const r1 = Math.min(
    variables.salience.ringan,
    variables.mood.ringan,
    variables.tolerance.ringan,
    variables.withdrawal.ringan,
    variables.conflict.ringan,
    variables.relapse.ringan
  );
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

  // RULE 2v
  const r2 = Math.min(
    variables.salience.ringan,
    variables.mood.ringan,
    variables.tolerance.ringan,
    variables.withdrawal.ringan,
    variables.conflict.ringan,
    variables.relapse.berat
  );

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

  // RULE 3v
  const r3 = Math.min(
    variables.salience.ringan,
    variables.mood.ringan,
    variables.tolerance.ringan,
    variables.withdrawal.ringan,
    variables.conflict.berat,
    variables.relapse.ringan
  );

  const z3 = triangularMembershipOutput(r3, 'ringan');
  rules.push([
    variables.salience.ringan,
    variables.mood.ringan,
    variables.tolerance.ringan,
    variables.withdrawal.ringan,
    variables.conflict.berat,
    variables.relapse.ringan,
    r3,
    z3,
    r3 * z3,
  ]);

  // RULE 4v
  const r4 = Math.min(
    variables.salience.ringan,
    variables.mood.ringan,
    variables.tolerance.ringan,
    variables.withdrawal.ringan,
    variables.conflict.berat,
    variables.relapse.berat
  );

  const z4 = triangularMembershipOutput(r4, 'ringan');
  rules.push([
    variables.salience.ringan,
    variables.mood.ringan,
    variables.tolerance.ringan,
    variables.withdrawal.ringan,
    variables.conflict.berat,
    variables.relapse.berat,
    r4,
    z4,
    r4 * z4,
  ]);

  // RULE 5v
  const r5 = Math.min(
    variables.salience.ringan,
    variables.mood.ringan,
    variables.tolerance.ringan,
    variables.withdrawal.berat,
    variables.conflict.ringan,
    variables.relapse.ringan
  );

  const z5 = triangularMembershipOutput(r5, 'ringan');
  rules.push([
    variables.salience.ringan,
    variables.mood.ringan,
    variables.tolerance.ringan,
    variables.withdrawal.berat,
    variables.conflict.ringan,
    variables.relapse.ringan,
    r5,
    z5,
    r5 * z5,
  ]);

  // RULE 6v
  const r6 = Math.min(
    variables.salience.ringan,
    variables.mood.ringan,
    variables.tolerance.ringan,
    variables.withdrawal.berat,
    variables.conflict.ringan,
    variables.relapse.berat
  );

  const z6 = triangularMembershipOutput(r6, 'ringan');
  rules.push([
    variables.salience.ringan,
    variables.mood.ringan,
    variables.tolerance.ringan,
    variables.withdrawal.berat,
    variables.conflict.ringan,
    variables.relapse.berat,
    r6,
    z6,
    r6 * z6,
  ]);

  // RULE 7v
  const r7 = Math.min(
    variables.salience.ringan,
    variables.mood.ringan,
    variables.tolerance.ringan,
    variables.withdrawal.berat,
    variables.conflict.berat,
    variables.relapse.ringan
  );

  const z7 = triangularMembershipOutput(r7, 'ringan');
  rules.push([
    variables.salience.ringan,
    variables.mood.ringan,
    variables.tolerance.ringan,
    variables.withdrawal.berat,
    variables.conflict.berat,
    variables.relapse.ringan,
    r7,
    z7,
    r7 * z7,
  ]);

  // RULE 8v
  const r8 = Math.min(
    variables.salience.ringan,
    variables.mood.ringan,
    variables.tolerance.ringan,
    variables.withdrawal.berat,
    variables.conflict.berat,
    variables.relapse.berat
  );

  const z8 = triangularMembershipOutput(r8, 'sedang');
  rules.push([
    variables.salience.ringan,
    variables.mood.ringan,
    variables.tolerance.ringan,
    variables.withdrawal.berat,
    variables.conflict.berat,
    variables.relapse.berat,
    r8,
    z8,
    r8 * z8,
  ]);

  // RULE 9v
  const r9 = Math.min(
    variables.salience.ringan,
    variables.mood.ringan,
    variables.tolerance.berat,
    variables.withdrawal.ringan,
    variables.conflict.ringan,
    variables.relapse.ringan
  );

  const z9 = triangularMembershipOutput(r9, 'ringan');
  rules.push([
    variables.salience.ringan,
    variables.mood.ringan,
    variables.tolerance.berat,
    variables.withdrawal.ringan,
    variables.conflict.ringan,
    variables.relapse.ringan,
    r9,
    z9,
    r9 * z9,
  ]);

  // RULE 10v
  const r10 = Math.min(
    variables.salience.ringan,
    variables.mood.ringan,
    variables.tolerance.berat,
    variables.withdrawal.ringan,
    variables.conflict.ringan,
    variables.relapse.berat
  );

  const z10 = triangularMembershipOutput(r10, 'ringan');
  rules.push([
    variables.salience.ringan,
    variables.mood.ringan,
    variables.tolerance.berat,
    variables.withdrawal.ringan,
    variables.conflict.ringan,
    variables.relapse.berat,
    r10,
    z10,
    r10 * z10,
  ]);

  // RULE 11v
  const r11 = Math.min(
    variables.salience.ringan,
    variables.mood.ringan,
    variables.tolerance.berat,
    variables.withdrawal.ringan,
    variables.conflict.berat,
    variables.relapse.ringan
  );

  const z11 = triangularMembershipOutput(r11, 'ringan');
  rules.push([
    variables.salience.ringan,
    variables.mood.ringan,
    variables.tolerance.berat,
    variables.withdrawal.ringan,
    variables.conflict.berat,
    variables.relapse.ringan,
    r11,
    z11,
    r11 * z11,
  ]);

  // RULE 12v
  const r12 = Math.min(
    variables.salience.ringan,
    variables.mood.ringan,
    variables.tolerance.berat,
    variables.withdrawal.ringan,
    variables.conflict.berat,
    variables.relapse.berat
  );

  const z12 = triangularMembershipOutput(r12, 'sedang');
  rules.push([
    variables.salience.ringan,
    variables.mood.ringan,
    variables.tolerance.berat,
    variables.withdrawal.ringan,
    variables.conflict.berat,
    variables.relapse.berat,
    r12,
    z12,
    r12 * z12,
  ]);

  // RULE 13v
  const r13 = Math.min(
    variables.salience.ringan,
    variables.mood.ringan,
    variables.tolerance.berat,
    variables.withdrawal.berat,
    variables.conflict.ringan,
    variables.relapse.ringan
  );

  const z13 = triangularMembershipOutput(r13, 'ringan');
  rules.push([
    variables.salience.ringan,
    variables.mood.ringan,
    variables.tolerance.berat,
    variables.withdrawal.berat,
    variables.conflict.ringan,
    variables.relapse.ringan,
    r13,
    z13,
    r13 * z13,
  ]);

  // RULE 14v
  const r14 = Math.min(
    variables.salience.ringan,
    variables.mood.ringan,
    variables.tolerance.berat,
    variables.withdrawal.berat,
    variables.conflict.ringan,
    variables.relapse.berat
  );

  const z14 = triangularMembershipOutput(r14, 'sedang');
  rules.push([
    variables.salience.ringan,
    variables.mood.ringan,
    variables.tolerance.berat,
    variables.withdrawal.berat,
    variables.conflict.ringan,
    variables.relapse.berat,
    r14,
    z14,
    r14 * z14,
  ]);

  // RULE 15v
  const r15 = Math.min(
    variables.salience.ringan,
    variables.mood.ringan,
    variables.tolerance.berat,
    variables.withdrawal.berat,
    variables.conflict.berat,
    variables.relapse.ringan
  );

  const z15 = triangularMembershipOutput(r15, 'sedang');
  rules.push([
    variables.salience.ringan,
    variables.mood.ringan,
    variables.tolerance.berat,
    variables.withdrawal.berat,
    variables.conflict.berat,
    variables.relapse.ringan,
    r15,
    z15,
    r15 * z15,
  ]);

  // RULE 16v
  const r16 = Math.min(
    variables.salience.ringan,
    variables.mood.ringan,
    variables.tolerance.berat,
    variables.withdrawal.berat,
    variables.conflict.berat,
    variables.relapse.berat
  );

  const z16 = triangularMembershipOutput(r16, 'sedang');
  rules.push([
    variables.salience.ringan,
    variables.mood.ringan,
    variables.tolerance.berat,
    variables.withdrawal.berat,
    variables.conflict.berat,
    variables.relapse.berat,
    r16,
    z16,
    r16 * z16,
  ]);

  // RULE 17v
  const r17 = Math.min(
    variables.salience.ringan,
    variables.mood.berat,
    variables.tolerance.ringan,
    variables.withdrawal.ringan,
    variables.conflict.ringan,
    variables.relapse.ringan
  );

  const z17 = triangularMembershipOutput(r17, 'ringan');
  rules.push([
    variables.salience.ringan,
    variables.mood.berat,
    variables.tolerance.ringan,
    variables.withdrawal.ringan,
    variables.conflict.ringan,
    variables.relapse.ringan,
    r17,
    z17,
    r17 * z17,
  ]);

  // RULE 18v
  const r18 = Math.min(
    variables.salience.ringan,
    variables.mood.berat,
    variables.tolerance.ringan,
    variables.withdrawal.ringan,
    variables.conflict.ringan,
    variables.relapse.berat
  );

  const z18 = triangularMembershipOutput(r18, 'ringan');
  rules.push([
    variables.salience.ringan,
    variables.mood.berat,
    variables.tolerance.ringan,
    variables.withdrawal.ringan,
    variables.conflict.ringan,
    variables.relapse.berat,
    r18,
    z18,
    r18 * z18,
  ]);

  // RULE 19v
  const r19 = Math.min(
    variables.salience.ringan,
    variables.mood.berat,
    variables.tolerance.ringan,
    variables.withdrawal.ringan,
    variables.conflict.berat,
    variables.relapse.ringan
  );

  const z19 = triangularMembershipOutput(r19, 'ringan');
  rules.push([
    variables.salience.ringan,
    variables.mood.berat,
    variables.tolerance.ringan,
    variables.withdrawal.ringan,
    variables.conflict.berat,
    variables.relapse.ringan,
    r19,
    z19,
    r19 * z19,
  ]);

  // RULE 20v
  const r20 = Math.min(
    variables.salience.ringan,
    variables.mood.berat,
    variables.tolerance.ringan,
    variables.withdrawal.ringan,
    variables.conflict.berat,
    variables.relapse.berat
  );

  const z20 = triangularMembershipOutput(r20, 'sedang');
  rules.push([
    variables.salience.ringan,
    variables.mood.berat,
    variables.tolerance.ringan,
    variables.withdrawal.ringan,
    variables.conflict.berat,
    variables.relapse.berat,
    r20,
    z20,
    r20 * z20,
  ]);

  // RULE 21v
  const r21 = Math.min(
    variables.salience.ringan,
    variables.mood.berat,
    variables.tolerance.ringan,
    variables.withdrawal.berat,
    variables.conflict.ringan,
    variables.relapse.ringan
  );

  const z21 = triangularMembershipOutput(r21, 'ringan');
  rules.push([
    variables.salience.ringan,
    variables.mood.berat,
    variables.tolerance.ringan,
    variables.withdrawal.berat,
    variables.conflict.ringan,
    variables.relapse.ringan,
    r21,
    z21,
    r21 * z21,
  ]);

  // RULE 22v
  const r22 = Math.min(
    variables.salience.ringan,
    variables.mood.berat,
    variables.tolerance.ringan,
    variables.withdrawal.berat,
    variables.conflict.ringan,
    variables.relapse.berat
  );

  const z22 = triangularMembershipOutput(r22, 'sedang');
  rules.push([
    variables.salience.ringan,
    variables.mood.berat,
    variables.tolerance.ringan,
    variables.withdrawal.berat,
    variables.conflict.ringan,
    variables.relapse.berat,
    r22,
    z22,
    r22 * z22,
  ]);

  // RULE 23v
  const r23 = Math.min(
    variables.salience.ringan,
    variables.mood.berat,
    variables.tolerance.ringan,
    variables.withdrawal.berat,
    variables.conflict.berat,
    variables.relapse.ringan
  );

  const z23 = triangularMembershipOutput(r23, 'sedang');
  rules.push([
    variables.salience.ringan,
    variables.mood.berat,
    variables.tolerance.ringan,
    variables.withdrawal.berat,
    variables.conflict.berat,
    variables.relapse.ringan,
    r23,
    z23,
    r23 * z23,
  ]);

  // RULE 24v
  const r24 = Math.min(
    variables.salience.ringan,
    variables.mood.berat,
    variables.tolerance.ringan,
    variables.withdrawal.berat,
    variables.conflict.berat,
    variables.relapse.berat
  );

  const z24 = triangularMembershipOutput(r24, 'sedang');
  rules.push([
    variables.salience.ringan,
    variables.mood.berat,
    variables.tolerance.ringan,
    variables.withdrawal.berat,
    variables.conflict.berat,
    variables.relapse.berat,
    r24,
    z24,
    r24 * z24,
  ]);

  // RULE 25v
  const r25 = Math.min(
    variables.salience.ringan,
    variables.mood.berat,
    variables.tolerance.berat,
    variables.withdrawal.ringan,
    variables.conflict.ringan,
    variables.relapse.ringan
  );

  const z25 = triangularMembershipOutput(r25, 'ringan');
  rules.push([
    variables.salience.ringan,
    variables.mood.berat,
    variables.tolerance.berat,
    variables.withdrawal.ringan,
    variables.conflict.ringan,
    variables.relapse.ringan,
    r25,
    z25,
    r25 * z25,
  ]);

  // RULE 26v
  const r26 = Math.min(
    variables.salience.ringan,
    variables.mood.berat,
    variables.tolerance.berat,
    variables.withdrawal.ringan,
    variables.conflict.ringan,
    variables.relapse.berat
  );

  const z26 = triangularMembershipOutput(r26, 'sedang');
  rules.push([
    variables.salience.ringan,
    variables.mood.berat,
    variables.tolerance.berat,
    variables.withdrawal.ringan,
    variables.conflict.ringan,
    variables.relapse.berat,
    r26,
    z26,
    r26 * z26,
  ]);

  // RULE 27v
  const r27 = Math.min(
    variables.salience.ringan,
    variables.mood.berat,
    variables.tolerance.berat,
    variables.withdrawal.ringan,
    variables.conflict.berat,
    variables.relapse.ringan
  );

  const z27 = triangularMembershipOutput(r27, 'sedang');
  rules.push([
    variables.salience.ringan,
    variables.mood.berat,
    variables.tolerance.berat,
    variables.withdrawal.ringan,
    variables.conflict.berat,
    variables.relapse.ringan,
    r27,
    z27,
    r27 * z27,
  ]);

  // RULE 28v
  const r28 = Math.min(
    variables.salience.ringan,
    variables.mood.berat,
    variables.tolerance.berat,
    variables.withdrawal.ringan,
    variables.conflict.berat,
    variables.relapse.berat
  );

  const z28 = triangularMembershipOutput(r28, 'sedang');
  rules.push([
    variables.salience.ringan,
    variables.mood.berat,
    variables.tolerance.berat,
    variables.withdrawal.ringan,
    variables.conflict.berat,
    variables.relapse.berat,
    r28,
    z28,
    r28 * z28,
  ]);

  // RULE 29v
  const r29 = Math.min(
    variables.salience.ringan,
    variables.mood.berat,
    variables.tolerance.berat,
    variables.withdrawal.berat,
    variables.conflict.ringan,
    variables.relapse.ringan
  );

  const z29 = triangularMembershipOutput(r29, 'sedang');
  rules.push([
    variables.salience.ringan,
    variables.mood.berat,
    variables.tolerance.berat,
    variables.withdrawal.berat,
    variables.conflict.ringan,
    variables.relapse.ringan,
    r29,
    z29,
    r29 * z29,
  ]);

  // RULE 30v
  const r30 = Math.min(
    variables.salience.ringan,
    variables.mood.berat,
    variables.tolerance.berat,
    variables.withdrawal.berat,
    variables.conflict.ringan,
    variables.relapse.berat
  );

  const z30 = triangularMembershipOutput(r30, 'sedang');
  rules.push([
    variables.salience.ringan,
    variables.mood.berat,
    variables.tolerance.berat,
    variables.withdrawal.berat,
    variables.conflict.ringan,
    variables.relapse.berat,
    r30,
    z30,
    r30 * z30,
  ]);

  // RULE 31v
  const r31 = Math.min(
    variables.salience.ringan,
    variables.mood.berat,
    variables.tolerance.berat,
    variables.withdrawal.berat,
    variables.conflict.berat,
    variables.relapse.ringan
  );

  const z31 = triangularMembershipOutput(r31, 'sedang');
  rules.push([
    variables.salience.ringan,
    variables.mood.berat,
    variables.tolerance.berat,
    variables.withdrawal.berat,
    variables.conflict.berat,
    variables.relapse.ringan,
    r31,
    z31,
    r31 * z31,
  ]);

  // RULE 32v
  const r32 = Math.min(
    variables.salience.ringan,
    variables.mood.berat,
    variables.tolerance.berat,
    variables.withdrawal.berat,
    variables.conflict.berat,
    variables.relapse.berat
  );

  const z32 = triangularMembershipOutput(r32, 'berat');
  rules.push([
    variables.salience.ringan,
    variables.mood.berat,
    variables.tolerance.berat,
    variables.withdrawal.berat,
    variables.conflict.berat,
    variables.relapse.berat,
    r32,
    z32,
    r32 * z32,
  ]);

  // RULE 33v
  const r33 = Math.min(
    variables.salience.berat,
    variables.mood.ringan,
    variables.tolerance.ringan,
    variables.withdrawal.ringan,
    variables.conflict.ringan,
    variables.relapse.ringan
  );

  const z33 = triangularMembershipOutput(r33, 'ringan');
  rules.push([
    variables.salience.berat,
    variables.mood.ringan,
    variables.tolerance.ringan,
    variables.withdrawal.ringan,
    variables.conflict.ringan,
    variables.relapse.ringan,
    r33,
    z33,
    r33 * z33,
  ]);

  // RULE 34v
  const r34 = Math.min(
    variables.salience.berat,
    variables.mood.ringan,
    variables.tolerance.ringan,
    variables.withdrawal.ringan,
    variables.conflict.ringan,
    variables.relapse.berat
  );

  const z34 = triangularMembershipOutput(r34, 'ringan');
  rules.push([
    variables.salience.berat,
    variables.mood.ringan,
    variables.tolerance.ringan,
    variables.withdrawal.ringan,
    variables.conflict.ringan,
    variables.relapse.berat,
    r34,
    z34,
    r34 * z34,
  ]);

  // RULE 35v
  const r35 = Math.min(
    variables.salience.berat,
    variables.mood.ringan,
    variables.tolerance.ringan,
    variables.withdrawal.ringan,
    variables.conflict.berat,
    variables.relapse.ringan
  );

  const z35 = triangularMembershipOutput(r35, 'ringan');
  rules.push([
    variables.salience.berat,
    variables.mood.ringan,
    variables.tolerance.ringan,
    variables.withdrawal.ringan,
    variables.conflict.berat,
    variables.relapse.ringan,
    r35,
    z35,
    r35 * z35,
  ]);

  // RULE 36v
  const r36 = Math.min(
    variables.salience.berat,
    variables.mood.ringan,
    variables.tolerance.ringan,
    variables.withdrawal.ringan,
    variables.conflict.berat,
    variables.relapse.berat
  );

  const z36 = triangularMembershipOutput(r36, 'sedang');
  rules.push([
    variables.salience.berat,
    variables.mood.ringan,
    variables.tolerance.ringan,
    variables.withdrawal.ringan,
    variables.conflict.berat,
    variables.relapse.berat,
    r36,
    z36,
    r36 * z36,
  ]);

  // RULE 37v
  const r37 = Math.min(
    variables.salience.berat,
    variables.mood.ringan,
    variables.tolerance.ringan,
    variables.withdrawal.berat,
    variables.conflict.ringan,
    variables.relapse.ringan
  );

  const z37 = triangularMembershipOutput(r37, 'ringan');
  rules.push([
    variables.salience.berat,
    variables.mood.ringan,
    variables.tolerance.ringan,
    variables.withdrawal.berat,
    variables.conflict.ringan,
    variables.relapse.ringan,
    r37,
    z37,
    r37 * z37,
  ]);

  // RULE 38v
  const r38 = Math.min(
    variables.salience.berat,
    variables.mood.ringan,
    variables.tolerance.ringan,
    variables.withdrawal.berat,
    variables.conflict.ringan,
    variables.relapse.berat
  );

  const z38 = triangularMembershipOutput(r38, 'sedang');
  rules.push([
    variables.salience.berat,
    variables.mood.ringan,
    variables.tolerance.ringan,
    variables.withdrawal.berat,
    variables.conflict.ringan,
    variables.relapse.berat,
    r38,
    z38,
    r38 * z38,
  ]);

  // RULE 39v
  const r39 = Math.min(
    variables.salience.berat,
    variables.mood.ringan,
    variables.tolerance.ringan,
    variables.withdrawal.berat,
    variables.conflict.berat,
    variables.relapse.ringan
  );

  const z39 = triangularMembershipOutput(r39, 'sedang');
  rules.push([
    variables.salience.berat,
    variables.mood.ringan,
    variables.tolerance.ringan,
    variables.withdrawal.berat,
    variables.conflict.berat,
    variables.relapse.ringan,
    r39,
    z39,
    r39 * z39,
  ]);

  // RULE 40v
  const r40 = Math.min(
    variables.salience.berat,
    variables.mood.ringan,
    variables.tolerance.ringan,
    variables.withdrawal.berat,
    variables.conflict.berat,
    variables.relapse.berat
  );

  const z40 = triangularMembershipOutput(r40, 'sedang');
  rules.push([
    variables.salience.berat,
    variables.mood.ringan,
    variables.tolerance.ringan,
    variables.withdrawal.berat,
    variables.conflict.berat,
    variables.relapse.berat,
    r40,
    z40,
    r40 * z40,
  ]);

  // RULE 41v
  const r41 = Math.min(
    variables.salience.berat,
    variables.mood.ringan,
    variables.tolerance.berat,
    variables.withdrawal.ringan,
    variables.conflict.ringan,
    variables.relapse.ringan
  );

  const z41 = triangularMembershipOutput(r41, 'ringan');
  rules.push([
    variables.salience.berat,
    variables.mood.ringan,
    variables.tolerance.berat,
    variables.withdrawal.ringan,
    variables.conflict.ringan,
    variables.relapse.ringan,
    r41,
    z41,
    r41 * z41,
  ]);

  // RULE 42v
  const r42 = Math.min(
    variables.salience.berat,
    variables.mood.ringan,
    variables.tolerance.berat,
    variables.withdrawal.ringan,
    variables.conflict.ringan,
    variables.relapse.berat
  );

  const z42 = triangularMembershipOutput(r42, 'sedang');
  rules.push([
    variables.salience.berat,
    variables.mood.ringan,
    variables.tolerance.berat,
    variables.withdrawal.ringan,
    variables.conflict.ringan,
    variables.relapse.berat,
    r42,
    z42,
    r42 * z42,
  ]);

  // RULE 43v
  const r43 = Math.min(
    variables.salience.berat,
    variables.mood.ringan,
    variables.tolerance.berat,
    variables.withdrawal.ringan,
    variables.conflict.berat,
    variables.relapse.ringan
  );

  const z43 = triangularMembershipOutput(r43, 'sedang');
  rules.push([
    variables.salience.berat,
    variables.mood.ringan,
    variables.tolerance.berat,
    variables.withdrawal.ringan,
    variables.conflict.berat,
    variables.relapse.ringan,
    r43,
    z43,
    r43 * z43,
  ]);

  // RULE 44v
  const r44 = Math.min(
    variables.salience.berat,
    variables.mood.ringan,
    variables.tolerance.berat,
    variables.withdrawal.ringan,
    variables.conflict.berat,
    variables.relapse.berat
  );

  const z44 = triangularMembershipOutput(r44, 'sedang');
  rules.push([
    variables.salience.berat,
    variables.mood.ringan,
    variables.tolerance.berat,
    variables.withdrawal.ringan,
    variables.conflict.berat,
    variables.relapse.berat,
    r44,
    z44,
    r44 * z44,
  ]);

  // RULE 45v
  const r45 = Math.min(
    variables.salience.berat,
    variables.mood.ringan,
    variables.tolerance.berat,
    variables.withdrawal.berat,
    variables.conflict.ringan,
    variables.relapse.ringan
  );

  const z45 = triangularMembershipOutput(r45, 'sedang');
  rules.push([
    variables.salience.berat,
    variables.mood.ringan,
    variables.tolerance.berat,
    variables.withdrawal.berat,
    variables.conflict.ringan,
    variables.relapse.ringan,
    r45,
    z45,
    r45 * z45,
  ]);

  // RULE 46v
  const r46 = Math.min(
    variables.salience.berat,
    variables.mood.ringan,
    variables.tolerance.berat,
    variables.withdrawal.berat,
    variables.conflict.ringan,
    variables.relapse.berat
  );

  const z46 = triangularMembershipOutput(r46, 'sedang');
  rules.push([
    variables.salience.berat,
    variables.mood.ringan,
    variables.tolerance.berat,
    variables.withdrawal.berat,
    variables.conflict.ringan,
    variables.relapse.berat,
    r46,
    z46,
    r46 * z46,
  ]);

  // RULE 47v
  const r47 = Math.min(
    variables.salience.berat,
    variables.mood.ringan,
    variables.tolerance.berat,
    variables.withdrawal.berat,
    variables.conflict.berat,
    variables.relapse.ringan
  );

  const z47 = triangularMembershipOutput(r47, 'sedang');
  rules.push([
    variables.salience.berat,
    variables.mood.ringan,
    variables.tolerance.berat,
    variables.withdrawal.berat,
    variables.conflict.berat,
    variables.relapse.ringan,
    r47,
    z47,
    r47 * z47,
  ]);

  // RULE 48v
  const r48 = Math.min(
    variables.salience.berat,
    variables.mood.ringan,
    variables.tolerance.berat,
    variables.withdrawal.berat,
    variables.conflict.berat,
    variables.relapse.berat
  );

  const z48 = triangularMembershipOutput(r48, 'berat');
  rules.push([
    variables.salience.berat,
    variables.mood.ringan,
    variables.tolerance.berat,
    variables.withdrawal.berat,
    variables.conflict.berat,
    variables.relapse.berat,
    r48,
    z48,
    r48 * z48,
  ]);

  // RULE 49v
  const r49 = Math.min(
    variables.salience.berat,
    variables.mood.berat,
    variables.tolerance.ringan,
    variables.withdrawal.ringan,
    variables.conflict.ringan,
    variables.relapse.ringan
  );

  const z49 = triangularMembershipOutput(r49, 'ringan');
  rules.push([
    variables.salience.berat,
    variables.mood.berat,
    variables.tolerance.ringan,
    variables.withdrawal.ringan,
    variables.conflict.ringan,
    variables.relapse.ringan,
    r49,
    z49,
    r49 * z49,
  ]);

  // RULE 50v
  const r50 = Math.min(
    variables.salience.berat,
    variables.mood.berat,
    variables.tolerance.ringan,
    variables.withdrawal.ringan,
    variables.conflict.ringan,
    variables.relapse.berat
  );

  const z50 = triangularMembershipOutput(r50, 'sedang');
  rules.push([
    variables.salience.berat,
    variables.mood.berat,
    variables.tolerance.ringan,
    variables.withdrawal.ringan,
    variables.conflict.ringan,
    variables.relapse.berat,
    r50,
    z50,
    r50 * z50,
  ]);

  // RULE 51v
  const r51 = Math.min(
    variables.salience.berat,
    variables.mood.berat,
    variables.tolerance.ringan,
    variables.withdrawal.ringan,
    variables.conflict.berat,
    variables.relapse.ringan
  );

  const z51 = triangularMembershipOutput(r51, 'sedang');
  rules.push([
    variables.salience.berat,
    variables.mood.berat,
    variables.tolerance.ringan,
    variables.withdrawal.ringan,
    variables.conflict.berat,
    variables.relapse.ringan,
    r51,
    z51,
    r51 * z51,
  ]);

  // RULE 52v
  const r52 = Math.min(
    variables.salience.berat,
    variables.mood.berat,
    variables.tolerance.ringan,
    variables.withdrawal.ringan,
    variables.conflict.berat,
    variables.relapse.berat
  );

  const z52 = triangularMembershipOutput(r52, 'sedang');
  rules.push([
    variables.salience.berat,
    variables.mood.berat,
    variables.tolerance.ringan,
    variables.withdrawal.ringan,
    variables.conflict.berat,
    variables.relapse.berat,
    r52,
    z52,
    r52 * z52,
  ]);

  // RULE 53v
  const r53 = Math.min(
    variables.salience.berat,
    variables.mood.berat,
    variables.tolerance.ringan,
    variables.withdrawal.berat,
    variables.conflict.ringan,
    variables.relapse.ringan
  );

  const z53 = triangularMembershipOutput(r53, 'sedang');
  rules.push([
    variables.salience.berat,
    variables.mood.berat,
    variables.tolerance.ringan,
    variables.withdrawal.berat,
    variables.conflict.ringan,
    variables.relapse.ringan,
    r53,
    z53,
    r53 * z53,
  ]);

  // RULE 54v
  const r54 = Math.min(
    variables.salience.berat,
    variables.mood.berat,
    variables.tolerance.ringan,
    variables.withdrawal.berat,
    variables.conflict.ringan,
    variables.relapse.berat
  );

  const z54 = triangularMembershipOutput(r54, 'sedang');
  rules.push([
    variables.salience.berat,
    variables.mood.berat,
    variables.tolerance.ringan,
    variables.withdrawal.berat,
    variables.conflict.ringan,
    variables.relapse.berat,
    r54,
    z54,
    r54 * z54,
  ]);

  // RULE 55v
  const r55 = Math.min(
    variables.salience.berat,
    variables.mood.berat,
    variables.tolerance.ringan,
    variables.withdrawal.berat,
    variables.conflict.berat,
    variables.relapse.ringan
  );

  const z55 = triangularMembershipOutput(r55, 'sedang');
  rules.push([
    variables.salience.berat,
    variables.mood.berat,
    variables.tolerance.ringan,
    variables.withdrawal.berat,
    variables.conflict.berat,
    variables.relapse.ringan,
    r55,
    z55,
    r55 * z55,
  ]);

  // RULE 56v
  const r56 = Math.min(
    variables.salience.berat,
    variables.mood.berat,
    variables.tolerance.ringan,
    variables.withdrawal.berat,
    variables.conflict.berat,
    variables.relapse.berat
  );

  const z56 = triangularMembershipOutput(r56, 'berat');
  rules.push([
    variables.salience.berat,
    variables.mood.berat,
    variables.tolerance.ringan,
    variables.withdrawal.berat,
    variables.conflict.berat,
    variables.relapse.berat,
    r56,
    z56,
    r56 * z56,
  ]);

  // RULE 57v
  const r57 = Math.min(
    variables.salience.berat,
    variables.mood.berat,
    variables.tolerance.berat,
    variables.withdrawal.ringan,
    variables.conflict.ringan,
    variables.relapse.ringan
  );

  const z57 = triangularMembershipOutput(r57, 'sedang');
  rules.push([
    variables.salience.berat,
    variables.mood.berat,
    variables.tolerance.berat,
    variables.withdrawal.ringan,
    variables.conflict.ringan,
    variables.relapse.ringan,
    r57,
    z57,
    r57 * z57,
  ]);

  // RULE 58v
  const r58 = Math.min(
    variables.salience.berat,
    variables.mood.berat,
    variables.tolerance.berat,
    variables.withdrawal.ringan,
    variables.conflict.ringan,
    variables.relapse.berat
  );

  const z58 = triangularMembershipOutput(r58, 'sedang');
  rules.push([
    variables.salience.berat,
    variables.mood.berat,
    variables.tolerance.berat,
    variables.withdrawal.ringan,
    variables.conflict.ringan,
    variables.relapse.berat,
    r58,
    z58,
    r58 * z58,
  ]);

  // RULE 59v
  const r59 = Math.min(
    variables.salience.berat,
    variables.mood.berat,
    variables.tolerance.berat,
    variables.withdrawal.ringan,
    variables.conflict.berat,
    variables.relapse.ringan
  );

  const z59 = triangularMembershipOutput(r59, 'sedang');
  rules.push([
    variables.salience.berat,
    variables.mood.berat,
    variables.tolerance.berat,
    variables.withdrawal.ringan,
    variables.conflict.berat,
    variables.relapse.ringan,
    r59,
    z59,
    r59 * z59,
  ]);

  // RULE 60v
  const r60 = Math.min(
    variables.salience.berat,
    variables.mood.berat,
    variables.tolerance.berat,
    variables.withdrawal.ringan,
    variables.conflict.berat,
    variables.relapse.berat
  );

  const z60 = triangularMembershipOutput(r60, 'berat');
  rules.push([
    variables.salience.berat,
    variables.mood.berat,
    variables.tolerance.berat,
    variables.withdrawal.ringan,
    variables.conflict.berat,
    variables.relapse.berat,
    r60,
    z60,
    r60 * z60,
  ]);

  // RULE 61v
  const r61 = Math.min(
    variables.salience.berat,
    variables.mood.berat,
    variables.tolerance.berat,
    variables.withdrawal.berat,
    variables.conflict.ringan,
    variables.relapse.ringan
  );

  const z61 = triangularMembershipOutput(r61, 'sedang');
  rules.push([
    variables.salience.berat,
    variables.mood.berat,
    variables.tolerance.berat,
    variables.withdrawal.berat,
    variables.conflict.ringan,
    variables.relapse.ringan,
    r61,
    z61,
    r61 * z61,
  ]);

  // RULE 62v
  const r62 = Math.min(
    variables.salience.berat,
    variables.mood.berat,
    variables.tolerance.berat,
    variables.withdrawal.berat,
    variables.conflict.ringan,
    variables.relapse.berat
  );

  const z62 = triangularMembershipOutput(r62, 'berat');
  rules.push([
    variables.salience.berat,
    variables.mood.berat,
    variables.tolerance.berat,
    variables.withdrawal.berat,
    variables.conflict.ringan,
    variables.relapse.berat,
    r62,
    z62,
    r62 * z62,
  ]);

  // RULE 63v
  const r63 = Math.min(
    variables.salience.berat,
    variables.mood.berat,
    variables.tolerance.berat,
    variables.withdrawal.berat,
    variables.conflict.berat,
    variables.relapse.ringan
  );

  const z63 = triangularMembershipOutput(r63, 'berat');
  rules.push([
    variables.salience.berat,
    variables.mood.berat,
    variables.tolerance.berat,
    variables.withdrawal.berat,
    variables.conflict.berat,
    variables.relapse.ringan,
    r63,
    z63,
    r63 * z63,
  ]);

  // RULE 64v
  const r64 = Math.min(
    variables.salience.berat,
    variables.mood.berat,
    variables.tolerance.berat,
    variables.withdrawal.berat,
    variables.conflict.berat,
    variables.relapse.berat
  );

  const z64 = triangularMembershipOutput(r64, 'berat');
  rules.push([
    variables.salience.berat,
    variables.mood.berat,
    variables.tolerance.berat,
    variables.withdrawal.berat,
    variables.conflict.berat,
    variables.relapse.berat,
    r64,
    z64,
    r64 * z64,
  ]);

  return rules;
};
