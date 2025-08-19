function solution(bridge_length, weight, truck_weights) {
  const outTimes = [];
  let currWeight = 0;
  let answer = 0;
  let currBridgeLength = 0;
  let outTimesIndex = 0;
  let truckIndex = 0;

  while (answer === 0 || outTimesIndex < truck_weights.length) {
    answer++;
    if (outTimes[outTimesIndex] && answer >= outTimes[outTimesIndex].outTime) {
      currBridgeLength--;
      currWeight -= outTimes[outTimesIndex].weight;
      outTimesIndex++;
    }
    if (
      truckIndex < truck_weights.length &&
      currWeight + truck_weights[truckIndex] <= weight &&
      currBridgeLength + 1 <= bridge_length
    ) {
      currBridgeLength++;
      currWeight += truck_weights[truckIndex];
      outTimes.push({ outTime: answer + bridge_length, weight: truck_weights[truckIndex] });
      truckIndex++;
    }
  }
  return answer;
}

    /**
     * 시간을 증가시킨다.
     * 다리에 무게가 충분한지 확인한다.
     * 다리에 자리가 있는지 확인한다.
     * 둘 다 충분하다면 다음 트럭을 올린다.
     *  현재 트럭 길이 + 1
     *  다리 무게 + 1
     *  트럭이 나오는 시간 추가
     * 충분하지 않는다면 기다린다.
     * 큐의 앞부분을 확인한다.
     *  현재 시간이 종료 시간과 같으면 인덱스를 증가시킨다.
     *  현재 트럭의 길이를 감소시킨다.
     *  다리의 무게를 감소시킨다.
     * 큐가 비어있다면 반복문을 종료한다.
     */

const bridge_length = 2;
const weight = 10;
const truck_weights = [7, 4, 5, 6];

console.log(solution(bridge_length, weight, truck_weights));
