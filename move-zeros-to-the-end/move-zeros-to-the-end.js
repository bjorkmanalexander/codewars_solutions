// Move all zeros in a given array to the end of the array.
// Example [1, 0, 2, 3, 2, 'a', 's', null, 'b', 0, '4', 0, 1, 'hello', true]

const moveZeros = arr => arr.filter(x => x !== 0).concat(arr.filter(x => x === 0));