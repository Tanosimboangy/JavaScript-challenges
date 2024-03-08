function totalAmountOfpoints(games) {
  var point = 0;
  for (let i = 0; i < games.length; i++) {
    var [a, b] = games[i].split(":");
    if (a > b) {
      point += 3;
    } else if (a < b) {
      point = point;
    } else if ((a = b)) {
      point = point + 1;
    }
  }
  return point;
}
