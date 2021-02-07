// Get sum of all integers between two given values.
// Values can be negative and can appear on either left or right.
// Shifting the lowest value to left will be required.

function getSum(a, b) {
  let c = a < b ? a : b;
  let d = b < a ? a : b;
  const numbers = [c, d];
  for (let i = c; i < d; ++i) { numbers.push(i); }
  return [...new Set(numbers)].reduce((x, y) => { return x + y });
}