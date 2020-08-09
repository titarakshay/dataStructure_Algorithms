```
factorial of a number which returns number of multiplication of that number upto 1
factorial n!=n*n-1*n-2*n-3*....*1
eg 5!=5*4*3*2*1=>120
```;

// factorial of a number

function factorial(x) {
  if (x === 0) {
    return 1;
  }
  return x * factorial(x - 1);
}

// factorial(5)=>120
