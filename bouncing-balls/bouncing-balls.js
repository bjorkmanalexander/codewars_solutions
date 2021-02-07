// Variation 1 - while-loop
function bouncingBall(h,  bounce,  window) {
    if (h > 0 && (bounce > 0 && bounce < 1) && window < h) {
        let bounces = 1;
        let remaining = h * bounce;
        while (remaining > window) {
            remaining *= bounce;
            bounces += 2;
        }
        return bounces;
    }
    return -1;
}

// Variation 2 - recursion
function bouncingBall(h,  bounce,  window) {
  if (h > 0 && (bounce > 0 && bounce < 1) && window < h) {
    if (h < window) {
      return -1;
    }
    return 2 + bouncingBall( (h*bounce), bounce, window);
  }
  return -1;
}