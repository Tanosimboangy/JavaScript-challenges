const meanSquareError = (a, b) =>
  a.reduce((sum, n, i) => sum + (n - b[i]) ** 2, 0) / a.length;

// I chose this solution owing to the use of reduce
