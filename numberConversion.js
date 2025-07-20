function solution(x, y, n) {
  const memo = Array(y + 1).fill(Infinity);
  memo[x] = 0;

  for (let i = x + 1; i <= y; i++) {
    if (i - n > 0) {
      memo[i] = Math.min(memo[i], memo[i - n] + 1);
    }
    if (Number.isInteger(i / 2)) {
      memo[i] = Math.min(memo[i], memo[i / 2] + 1);
    }
    if (Number.isInteger(i / 3)) {
      memo[i] = Math.min(memo[i], memo[i / 3] + 1);
    }
  }

  return memo[y] === Infinity ? -1 : memo[y];
}


console.log(solution(10, 40, 5)); // 2
