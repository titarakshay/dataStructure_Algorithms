function quickSort(arr) {
  if (arr.length <= 1) {
    return arr;
  } else {
    let leftArr = [];
    let rightArr = [];
    let sortedArray = [];
    let pivot = arr.pop();
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] <= pivot) {
        leftArr.push(arr[i]);
      } else {
        rightArr.push(arr[i]);
      }
    }
    return sortedArray.concat(quickSort(leftArr), pivot, quickSort(rightArr));
  }
}
