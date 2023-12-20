function fibs(n) {
  if (n == 0) return [];
  if (n == 1) return [0];
  if (n == 2) return [0, 1];
  const fibArray = [0, 1];
  let i = 2;
  while (i < n) {
    fibArray.push(fibArray[i - 2] + fibArray[i - 1]);
    i++;
  }
  return fibArray;
}

console.log(fibs(8));

function fibsRec(n) {
  if (n == 0) return [];
  if (n == 1) return [0];
  if (n == 2) return [0, 1];
  const before = fibsRec(n - 1);
  const nthNumber = before[before.length - 2] + before[before.length - 1];
  before.push(nthNumber);
  return before;
}

console.log(fibsRec(8));
