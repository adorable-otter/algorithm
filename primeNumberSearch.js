function solution(numbers) {
  const comb = getCombination(numbers);
  const primeChecker = getPrimeChecker(Math.max(...comb));

  return comb.reduce((acc, curr) => {
    if (primeChecker[curr]) {
      return acc + 1;
    }
    return acc;
  }, 0);
}

/**
 * 각 요소를 중복 사용할 수 없는 순열
 * 같은 요소가 여러 개 들어있다면 여러 번 사용 가능
 * 
 * 순열: 주어진 원소들을 일정 개수만큼 골라 순서를 고려해 나열한 모든 경우
 *      같은 원소들을 사용하더라도 배치 순서가 다르면 서로 다른 경우로 취급
 */
const getCombination = (arr) => {
  const results = new Set();
  const used = new Array(arr.length).fill(false);

  function backtrack(path) {
    if (path.length > 0) {
      results.add(Number(path.join('')));
    }
    if (path.length === arr.length) return;
    // 요소의 사용 순서가 다른 경우도 만들어내야 하므로 used를 항상 처음부터 확인
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
      // i * i 부터 i의 배수들에 소수 아님 표시
      for (let j = i * i; j <= n; j += i) {
        checker[j] = false;
      }
    }
  }
  return checker;
};

const numbers = [1, 2, 3];

console.log(getCombination(numbers));
console.log(solution(numbers));
