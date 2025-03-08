function solution(answers = [1, 2, 3, 4, 5]) {
  const patterns = [
    [1, 2, 3, 4, 5],
    [2, 1, 2, 3, 2, 4, 2, 5],
    [3, 3, 1, 1, 2, 2, 4, 4, 5, 5],
  ];
  const scores = answers.reduce(
    (acc, curr, answerIndex) => {
      patterns.forEach((pattern, patternIndex) => {
        if (curr === pattern[answerIndex % pattern.length]) {
          acc[patternIndex]++;
        }
      });
      return acc;
    },
    [0, 0, 0]
  );
  const maxScore = Math.max(...scores);

  return scores
    .reduce((acc, curr, index) => {
      if (curr === maxScore) acc.push(index + 1);
      return acc;
    }, [])
    .sort((a, b) => a > b);
}

console.log(solution());
