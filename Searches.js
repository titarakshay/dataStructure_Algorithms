var array = [1, 2, 3, 4, 5];

//liner search
function search(array, item) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] == item) {
      return i;
    }
  }
  return null;
}

//binary search
function binary(itmes, value) {
  var firstIndex = 0,
    lastIndex = itmes.length - 1,
    middleIndex = Math.floor((lastIndex + firstIndex) / 2);
  while (itmes[middleIndex] != value && firstIndex < lastIndex) {
    if (value < itmes[middleIndex]) {
      lastIndex = middleIndex - 1;
    } else if (value > itmes[middleIndex]) {
      firstIndex = middleIndex + 1;
    }
    middleIndex = Math.floor((lastIndex + firstIndex) / 2);
  }
  return itmes[middleIndex] != value ? -1 : middleIndex;
}
