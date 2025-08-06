function solution(arr) {
  const answer = [0, 0];

  const recursive = (start, length) => {
    const [row, col] = start;
    if (length <= 1 || canCompress(arr, start, length)) {
      return answer[arr[row][col]]++;
    }

    const newLength = length / 2;

    recursive([row, col], newLength);
    recursive([row, col + newLength], newLength);
    recursive([row + newLength, col], newLength);
    recursive([row + newLength, col + newLength], newLength);
  };

  recursive([0, 0], arr.length);
  return answer;
}

const canCompress = (arr, start, length) => {
  const [row, col] = start;
  const base = arr[row][col];

  for (let r = row; r <= row + length - 1; r++) {
    for (let c = col; c <= col + length - 1; c++) {
      if (arr[r][c] !== base) {
        return false;
      }
    }
  }
  return true;
};

const arr = [
  [1, 1, 1, 1, 1, 1, 1, 1],
  [0, 1, 1, 1, 1, 1, 1, 1],
  [0, 0, 0, 0, 1, 1, 1, 1],
  [0, 1, 0, 0, 1, 1, 1, 1],
  [0, 0, 0, 0, 0, 0, 1, 1],
  [0, 0, 0, 0, 0, 0, 0, 1],
  [0, 0, 0, 0, 1, 0, 0, 1],
  [0, 0, 0, 0, 1, 1, 1, 1],
];

// const arr = [
//   [0, 0, 0, 0],
//   [0, 0, 0, 0],
//   [0, 0, 0, 0],
//   [0, 0, 0, 1],
// ];

// console.log(canCompress(arr, [0, 0], 4));

console.log(solution(arr));
