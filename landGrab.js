function solution(land) {
  const memo = land.map((row) => [...row]);
  
  for (let row = 1; row < land.length; row++) {
    for (let col = 0; col < 4; col++) {
      const prevMax = getMax(memo, row - 1, col);
      memo[row][col] = prevMax + land[row][col];
    }
  }
  return Math.max(...memo.at(-1));
}

const getMax = (target, row, col) => {
  return target[row].reduce((acc, curr, idx) => {
    if (idx === col || curr <= acc) {
      return acc;
    }
    return curr;
  }, -1);
};

const land = [
  [1, 2, 3, 5],
  [5, 6, 7, 8],
  [4, 3, 2, 1],
];

/**
 * 각 값을 선택했을 때 구할 수 있는 최대 값을 계산해서 저장 해둔다.
 * 다음 행에서 해당 요소를 선택했을 때의 최대값 === 이전 행의 같은 열 값을 제외한 값들 중 최대값 + 해당 요소의 값
 */

console.log(solution(land));
