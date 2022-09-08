var listVectors = [
  [1, 2],
  [3, 2],
  [5, 0],
  [0, 3],
];
function calcPs(v1, v2) {
  return v1[0] * v2[0] + v1[1] * v2[1];
}
for (var i = 0; i < listVectors.length; i++) {
  for (var j = i + 1; j < listVectors.length; j++) {
    var ps = calcPs(listVectors[i], listVectors[j]);
    if (ps === 0) {
      console.log(listVectors[i], listVectors[j], ' sont orthogonaux');
    }
  }
}
