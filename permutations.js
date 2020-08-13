function permutations(string) {
  var results = [];
  if (string.length === 1) {
    results.push(string);
    return results;
  }
  for (let i = 0; i < string.length; i++) {
    var firstChar = string[i];
    var leftChar = string.substring(0, i) + string.substring(i + 1);
    var innerPermutations = permutations(leftChar);
    for (let j = 0; j < innerPermutations.length; j++) {
      results.push(firstChar + innerPermutations[j]);
    }
  }
  return results;
}
