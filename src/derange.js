export const derange = function (list) {
  const n = list.length;
  const mark = Array(n).fill(false);

  let i = n - 1;
  let u = n;

  while (u >= 2) {
    if (!mark[i]) {

      let j;

      do {
        j = getRandomInt(0, i);
      } while (mark[j]);

      const tmp = list[i];
      list[i] = list[j];
      list[j] = tmp;

      const p = getRandom();

      if (p < (u - 1) * D(u - 2) / D(u)) {
        mark[j] = true;
        u = u - 1;
      }

      u = u - 1;
    }

    i = i - 1;
  }
}

function D(u) {
  if (u == 0)
    return 1;

  if (u == 1)
    return 0;

  return (u - 1) * D(u - 1) + (u - 1) * D(u - 2);
}

// Returns a random integer between min (included) and max (excluded)
// Using Math.round() will give you a non-uniform distribution!
function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
}

// Returns a random number between 0 (inclusive) and 1 (exclusive)
function getRandom() {
  return Math.random();
}
