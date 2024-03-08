const points = (a) =>
  a.reduce((r, e) => {
    const x = e[0];
    const y = e[2];
    return r + (x > y ? 3 : x < y ? 0 : 1);
  }, 0);

// I chose this solution because it's quite simple but not really hard to read and understand.
