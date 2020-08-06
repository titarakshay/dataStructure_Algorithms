function ham(x, y) {
  if (String(x).length != String(y).length) return "values length are not same";
  var xr = String(x).split("");
  var yr = String(y).split("");
  var list = [];
  xr.map((x, i) => {
    if (x != yr[i]) {
      list.push(x);
    }
  });
  return list.length;
}
