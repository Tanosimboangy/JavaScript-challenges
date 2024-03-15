var solution = function (firstArray, secondArray) {
  var items = 0;
  for (let i = 0; i < firstArray.length; i++) {
    items += (secondArray[i] - firstArray[i]) ** 2;
  }
  return items / firstArray.length;
};
