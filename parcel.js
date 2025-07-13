function solution(order) {
  const stack = [];
  let answer = 0;
  let currOrder = 0;

  for (let number = 1; number <= order.length; number++) {
    if (order[currOrder] === number) {
      answer++;
      currOrder++;
      while (stack.length > 0 && order[currOrder] === stack.at(-1)) {
        stack.pop();
        answer++;
        currOrder++;
      }
    } else {
      stack.push(number);
    }
  }

  return answer;
}

/**
 *
 * 5 4 3 2 1
 *
 * stack
 * 1 2 3 4
 */

const order = [5, 4, 3, 2, 1];

console.log(solution(order));
