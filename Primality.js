```
prime is number start from 2 .
prime number is cannot formed by two smaller natural number except than one
eg 5 is only formed by 5*1 or 1*5 hence it is prime number
6 is formed by 2*3 or 3*2 two smaller natural number hence it is a composite number 
```;

function Isprime(num) {
  for (let i = 2; i < num; i++) {
    if (num % i === 0) return "Not a prime number";
  }
  return num > 1;
}
