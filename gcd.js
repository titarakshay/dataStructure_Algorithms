```
Euclidean Algorithm for Greatest Common Divisor (GCD)

The GCD of two or more integers is the largest integer 
that divides each of the integers such that their remainder is zero.
 
Eg :252,105 => 21
```;

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

//eg gcd(252,105)
