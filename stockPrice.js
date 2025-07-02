function solution(prices) {
  const answer = Array(prices.length).fill(1);
  const stack = []; // 가격이 떨어지지 않은 시간대의 index를 저장

  for (let i = 0; i < prices.length - 1; i++) {
    const currPrice = prices[i];

    while (stack.length > 0 && currPrice < prices[stack.at(-1)]) {
      const peek = stack.pop();
      answer[peek] = i - peek;
    }
    stack.push(i);
  }
  for (let i of stack) {
    answer[i] = prices.length - i - 1;
  }
  answer[answer.length - 1] = 0;
  return answer;
}

const prices = [1, 2, 3, 2, 3];

console.log(solution(prices));

/**
 * 가격이 떨어지지 않았다 == 현재 가격이 이전 가격보다 크다
 * 한 번 떨어지면 더 이상 체크할 필요 없음
 * 떨어지지 않은 것들을 스택에 넣는다.
 */
