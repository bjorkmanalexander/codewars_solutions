// Calculate with functions.
// Using a helper to determine whether callback or value.

const helper = (f, n) => f ? f(n) : n;

function zero(f) {
  return helper(f, 0);
}
function one(f) {
  return helper(f, 1);
}
function two(f) {
  return helper(f, 2);
}
function three(f) {
  return helper(f, 3);
}
function four(f) {
  return helper(f, 4);
}
function five(f) {
  return helper(f, 5);
}
function six(f) {
  return helper(f, 6);
}
function seven(f) {
  return helper(f, 7);
}
function eight(f) {
  return helper(f, 8);
}
function nine(f) {
  return helper(f, 9);
}

function plus(f) {
  return function(n) {
    return Math.floor(n + f);
  }
}

function minus(f) {
  return function(n) {
    return Math.floor(n - f);
  }
}

function times(f) {
  return function(n) {
    return Math.floor(n * f);
  }
}

function dividedBy(f) {
  return function(n) {
    return Math.floor(n / f);
  }
}