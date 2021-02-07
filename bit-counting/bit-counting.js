// Sum bit value of a given string.

var countBits = function(n) {
    return (n >>> 0).toString(2).split('').map(x => { return parseInt(x) }).reduce((x, y) => { return x + y })
  };