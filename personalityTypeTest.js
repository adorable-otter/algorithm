function solution(survey = ["RT", "RT", "RT"], choices = [7, 5, 2]) {
  // "TCJA"

  const types = [
    ['R', 'T'],
    ['C', 'F'],
    ['J', 'M'],
    ['A', 'N'],
  ];
  const totalScores = new Map('RTCFJMAN'.split('').map((char) => [char, 0]));
  const scores = [
    [0, 3],
    [0, 2],
    [0, 1],
    [0, 0],
    [1, 1],
    [1, 2],
    [1, 3],
  ];

  choices.forEach((choice, index) => {
    const type = survey[index][scores[choice - 1][0]];
    const score = scores[choice - 1][1];
    totalScores.set(type, totalScores.get(type) + score);
  });

  return types
    .map((typeList) => {
      return totalScores.get(typeList[0]) >= totalScores.get(typeList[1])
        ? typeList[0]
        : typeList[1];
    })
    .join('');
}

console.log(solution());
