function solution(dirs) {
  const visited = new Map();
  let currentPoint = [0, 0];
  let answer = 0;

  // 이동 시작
  for (let dir of dirs) {
    const afterPoint = move(currentPoint, dir);

    if (!didMoved(currentPoint, afterPoint)) {
      continue;
    }

    const route = getRoute(currentPoint, afterPoint);
    const reverseRoute = getRoute(afterPoint, currentPoint);
    if (!visited.has(route) && !visited.has(reverseRoute)) {
      answer++;
      visited.set(route, true);
      visited.set(reverseRoute, true);
    }
    currentPoint = afterPoint;
  }
  return answer;
}

const didMoved = (curr, after) => {
  return curr[0] !== after[0] || curr[1] !== after[1]
}

const getRoute = (start, end) => {
  return '' + start[0] + start[1] + end[0] + end[1];
};

const move = (curr, dir) => {
  const result = [...curr];

  if (dir === 'U') {
    result[1]++;
  } else if (dir === 'D') {
    result[1]--;
  } else if (dir === 'R') {
    result[0]++;
  } else if (dir === 'L') {
    result[0]--;
  }

  if (result[0] > 5 || result[1] > 5 || result[0] < -5 || result[1] < -5) {
    return curr;
  }
  return result;
};

const dirs = 'LULLLLLLU';
// 7

/**
 * 처음 걸어 본 길의 길이 구하임
 * 길 == 시작 점의 좌표와 끝점의 좌표 사이
 * 이동할 수 있는지 확인 필요 (경계선)
 * 이동한 길 저장 시작점+끝점
 * 이동한 길인지 확인 후 count
 * 거꾸로 이동해도 왔던 길임
 */
console.log(solution(dirs));
