function solution(cap, n, deliveries, pickups) {
  let answer = 0;
  let remainingDeliveries = 0;
  let remainingPickups = 0;

  // 가장 먼 거리부터 체크
  for (let i = n - 1; i >= 0; i--) {
    remainingDeliveries += deliveries[i];
    remainingPickups += pickups[i];

    while (remainingDeliveries > 0 || remainingPickups > 0) {
      // 항상 cap 만큼 꽉 채워서 배달 및 수거하고 그 수치를 누적
      remainingDeliveries -= cap;
      remainingPickups -= cap;
      answer += (i + 1) * 2;
    }
  }

  return answer;
}

const cap = 4 // 실을 수 있는 택배 수
const n =	5 // 최대 거리
const deliveries = 	[1, 0, 3, 1, 2] // 배달 목록
const pickups = 	[0, 3, 0, 4, 0]	// 수거 목록
//16

console.log(solution(cap, n, deliveries, pickups));