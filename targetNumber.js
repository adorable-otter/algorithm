function solution(numbers, target) {
  let answer = 0;

  const backtrack = (index, result) => {
    if (index === numbers.length) {
      answer += result === target ? 1 : 0;
      return;
    }
    backtrack(index + 1, result + numbers[index]);
    backtrack(index + 1, result - numbers[index]);
  };

  backtrack(0, 0);
  return answer;
}

// 주어진 모든 수를 더하거나 빼서 target이 될 수 있는 경우의 수

const numbers = [1, 1, 1, 1, 1];
const target = 3;
// 5

console.log(solution(numbers, target));
