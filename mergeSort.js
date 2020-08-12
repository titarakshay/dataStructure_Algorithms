```
merge sort is basically divide array into two parts
 it continue divide until single element get
 eg-> 2,6,9,8,7 => [2,6,9],[8,7] => [2,6],[9] , [8],[7] 
```;
function merge(arr1, arr2) {
  let result = []; // the array to hold results.
  let i = 0;
  let j = 0;

  // as the pseudo-code implies, we have to loop through the
  // arrays at the same time and it has to be done once.
  // note that if one array completes its iteration, we will
  // have to stop the while loop.

  while (i < arr1.length && j < arr2.length) {
    // compare the elements one at a time.
    if (arr1[i] > arr2[j]) {
      result.push(arr2[j]);
      j++;
    } else {
      result.push(arr1[i]);
      i++;
    }
  }

  // these other while loops checks if there's some item left
  // in the arrays so that we can push their elements in the result array.
  while (i < arr1.length) {
    result.push(arr1[i]);
    i++;
  }

  while (j < arr2.length) {
    result.push(arr2[j]);
    j++;
  }

  return result;
}

function mergeSort(arr) {
  // recursion base case
  // it checks if the array length is less than or equal to 1.
  // if that's the case return the arr else keep splicing.

  if (arr.length <= 1) return arr;
  // remember that we said merge sort uses divide and conquer
  // algorithm pattern

  // it firsts know the half point of the array.
  let halfPoint = Math.ceil(arr.length / 2);

  // and then splice the array from the beginning up to the half point.
  // but for the fact that merge sort needs the array to be of one element, it will keep splicing that half till it fulfills the condition of having one element array.

  let firstHalf = mergeSort(arr.splice(0, halfPoint));

  // second array from the half point up to the end of the array.
  let secondHalf = mergeSort(arr.splice(-halfPoint));

  // merge the array back and return the result.
  // note that we are using the helper function we created above.
  return merge(firstHalf, secondHalf);
}
