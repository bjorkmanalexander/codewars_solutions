// Given an array of many values.
// Find value that does not appear n times to the other values.

function findOdd(A) {
  const r = A.reduce((obj, key) => ({ ...obj, [key]: (obj[key] || 0) + 1}), {});
  return parseInt(Object.keys(r).filter(key => r[key] % 2)[0]);
}