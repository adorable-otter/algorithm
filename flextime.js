function solution(
  schedules = [700, 800, 1100],
  timelogs = [
    [710, 2359, 1050, 700, 650, 631, 659],
    [800, 801, 805, 800, 759, 810, 809],
    [1105, 1001, 1002, 600, 1059, 1001, 1100],
  ],
  startday = 5
) {
  // 3
  /**
  희망 시각 + 10분
  토,일 영향 없음
  시 * 100 + 분
  */
  const scheduleMinutes = schedules.map((schedule) => convertMinutes(schedule) + 10);
  return timelogs
    .map((log, index) => {
      return log.map((time, logIndex) => {
        const weekDay = (startday + logIndex) % 7;
        if (weekDay === 6 || weekDay === 0) return true;
        return convertMinutes(time) <= scheduleMinutes[index];
      });
    })
    .reduce((acc, curr) => {
      return curr.find((value) => value === false) === undefined ? acc + 1 : acc;
    }, 0);
}

const convertMinutes = (schedule) => {
  return Math.floor(schedule / 100) * 60 + (schedule % 100);
};

console.log(solution());
