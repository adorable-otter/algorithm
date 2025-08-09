function solution(numbers) {
  const comb = getCombination(numbers);
  const primeChecker = getPrimeChecker(9999999);

  return comb.reduce((acc, curr) => {
    if (primeChecker[curr]) {
      return acc + 1;
    }
    return acc;
  }, 0);
}

const getCombination = (arr) => {
  const results = new Set();
  const used = new Array(arr.length).fill(false);

  function backtrack(path) {
    if (path.length > 0) {
      results.add(Number(path.join('')));
    }
    if (path.length === arr.length) return;
    for (let i = 0; i < arr.length; i++) {
      if (used[i]) continue;
      used[i] = true;
      path.push(arr[i]);
      backtrack(path);
      path.pop();
      used[i] = false;
    }
  }
  backtrack([]);
  return Array.from(results);
};

const getPrimeChecker = (n) => {
  const checker = new Array(n + 1).fill(true);

  checker[0] = checker[1] = false;
  for (let i = 2; i * i <= n; i++) {
    if (checker[i]) {
      for (let j = i * i; j <= n; j += i) {
        checker[j] = false;
      }
    }
  }
  return checker;
};

const numbers = [0, 1, 1];

console.log(getCombination(numbers));
console.log(solution(numbers));
