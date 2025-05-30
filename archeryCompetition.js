function solution(n, info) {
  const combinations = getCombinations(n);

  const result = combinations.reduce(
    (acc, curr, index) => {
      const score = calculate(info, curr);
      if (score === -1) return acc;
      if (score > acc.score || (score === acc.score && isBetter(curr, combinations[acc.index]))) {
        return { score, index };
      }
      return acc;
    },
    { score: -1, index: -1 }
  );

  return result.score === -1 ? [-1] : combinations[result.index];
}

const calculate = (apeach, lion) => {
  let apeachScore = 0;
  let lionScore = 0;
  for (let i = 0; i < apeach.length; i++) {
    if (apeach[i] === 0 && lion[i] === 0) continue;
    if (apeach[i] > lion[i]) apeachScore += 10 - i;
    if (lion[i] > apeach[i]) lionScore += 10 - i;
  }
  // console.log('🚀 ~ calculate ~ lion:', lion);
  // console.log('🚀 ~ calculate ~ apeach:', apeach);
  // console.log('🚀 ~ calculate ~ apeachScore:', apeachScore);
  // console.log('🚀 ~ calculate ~ lionScore:', lionScore);
  // console.log('-----------');
  return lionScore > apeachScore ? lionScore - apeachScore : -1;
};

function getCombinations(arrowCount) {
  const result = [];
  const roundLimit = 11;

  function backtrack(scores, remainingArrows) {
    // 라운드 끝에 도달하면 종료
    if (scores.length === roundLimit - 1) {
      const finalScores = [...scores, remainingArrows];
      // 마지막 라운드인데 화살이 없는 경우는 결과에서 제외
      if (finalScores.reduce((acc, curr) => acc + curr, 0) === arrowCount) {
        result.push(finalScores);
      }
      return;
    }

    for (let used = remainingArrows; used >= 0; used--) {
      scores.push(used);
      backtrack(scores, remainingArrows - used);
      scores.pop();
    }
  }

  backtrack([], arrowCount);
  return result;
}

const n = 5;
const info = [2, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0];

// const n = 3;
// const info = [1, 0, 2];

console.log('🚀 ~ getCombinations ~ getCombinations:', getCombinations(n));
console.log(solution(n, info));

// n = 3, target = 3
// 3 0 0
// 2 1 0
// 2 0 1
// 1 2 0
// 1 1 1
// 1 0 2
// 0 3 0
// 0 2 1
// 0 1 2
// 0 0 3
