function solution(numbers) {
  const answer = Array(numbers.length).fill(-1);
  const stack = []; // 확인하려는 숫자의 인덱스를 저장

  /**
   * 현재 숫자의 뒷 큰수를 찾는다? X
   * 현재 순서의 값이 앞선 숫자(stack의 맨 윗 부분)의 뒷큰수 인지 확인한다.
   * 라고 생각해야 루프를 한 번만 돌 수 있음
   */
  for (let i = 0; i < numbers.length; i++) {
    while (stack.length && numbers[stack.at(-1)] < numbers[i]) {
      const idx = stack.pop();
      answer[idx] = numbers[i];
    }
    stack.push(i);
  }

  return answer;
}

const numbers = [2, 3, 3, 5];

console.log(solution(numbers));
