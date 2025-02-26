// https://school.programmers.co.kr/learn/courses/30/lessons/42889

function solution(N = 5, stages = [2, 1, 2, 6, 2, 4, 3, 3]) {
  // [3,4,2,1,5]

  /**
   * 스테이지 N에 도달한 사람 = 최대 도달 스테이지 >= 스테이지 N
   * stageStats = { stageNumber : { failCount, arrivalCount } }
   * map -> 배열로 변환
   * sort
   * key만 추출
   */

  const stageStats = new Map(Array.from({ length: N }, (_, i) => [i + 1, { failCount: 0, arrivalCount: 0 }]));

  stages.forEach((stage) => {
    if (stage <= N) stageStats.get(stage).failCount++;
    for (let i = 1; i <= Math.min(stage, N); i++) {
      stageStats.get(i).arrivalCount++;
    }
  });

  return [...stageStats]
    .map(([stage, stats]) => [stage, stats.failCount / stats.arrivalCount])
    .sort((a, b) => b[1] - a[1])
    .map(([stage]) => stage);
}

console.log(solution());
