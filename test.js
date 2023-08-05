const triangularMembershipOutput = (alpha, selector) => {
  if (selector === 'ringan') {
    return 50 - alpha * (50 - 0);
  }
  if (selector === 'sedang') {
    return 50 - alpha * (65 - 50);
  }
  return 80 - alpha * (100 - 80);
};

const data = triangularMembershipOutput(0.4, 'sedang');
console.log(data);
