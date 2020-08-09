//gratest common divisor

function gcd(a, b) {
  var R;
  while (a % b > 0) {
    R = a % b;
    a = b;
    b = R;
  }
  return b;
}

// gcd using recursion method

function gcdr(a, b) {
  if (b == 0) {
    return a;
  } else {
    return gcdr(b, a % b);
  }
}
