```
Fibonacci Number

fibonacci number means sum of number which is sum of number-1,number-2
Fibonacci number series= 0,1,1,2,3,5,8,13,21,34....
0
0+1=1
1+1=2
2+1=3
3+2=5

Fn=Fn-1+Fn-2
we have to find using fibonacci function which input a number
return a value which is at position of that number in a finbonacci number series
```;
function fibonacci(num) {
  if (num == 1) {
    return 0;
  }
  if (num == 2) {
    return 1;
  }
  return fibonacci(num - 1) + fibonacci(num - 2);
}

//  fibonacci(5)=>3 , fibonacci(8)=>13
