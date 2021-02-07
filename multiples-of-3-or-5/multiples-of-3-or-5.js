// Find all numbers that are multiples of 3 or 5 in a given number.
// For instance 10 yields 3, 5, 6 and 9.

function solution(number){
    if (number < 0) { return 0 } 
    const numbers = [];
    for (let i = 1; i <= number; ++i) {
      if (i * 3 < number) {
        numbers.push(i * 3)
      }
      if (i * 5 < number) {
        numbers.push(i * 5)
      }
    }
    return numbers.length ? [...new Set(numbers)].reduce( (x, y) => {return x + y}) : 0;
  }