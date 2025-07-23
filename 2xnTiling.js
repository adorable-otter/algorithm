function solution(n) {
  const memo = [1, 2];
  
  for (let curr = 3; curr <= n; curr++) {
    const result = memo[curr - 2] + memo[curr - 3]
    memo.push(result > 1000000007 ? result % 1000000007 : result);
  }
  return memo[n - 1];
}

const n = 20;
console.log(solution(n))