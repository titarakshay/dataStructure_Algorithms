function insertionSort(array) {
  var len = array.length;
  for (var i = 1; i < len; i++) {
    //Copy of the current element.
    var temp = array[i];
    /*Check through the sorted part and compare with the number in temp. If large, shift the number*/
    for (var j = i - 1; j >= 0 && array[j] > temp; j--) {
      //Shift the number
      array[j + 1] = array[j];
    }
    //Insert the copied number at the correct position in sorted part.
    array[j + 1] = temp;
  }
}
