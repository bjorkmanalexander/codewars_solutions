// Given a positive number and returns its multiplicative persistence.
// For instance number 39 - 3*9 = 27, 2*7 = 14, 1*4 = 4
// persistence(39) === 3

function persistence(num) {
    let count = 0;
    function multiply(n) {
      return n.reduce((x, y) => { return x * y });
    }
    while (num.toString().length > 1) {
      num = num.toString().split('');
      num = multiply(num);
      count++;
    }
    return count;
  }