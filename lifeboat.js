function solution(people = [150, 120, 80, 80, 70, 40], limit = 150) {
  let answer = 0;
  people.sort((a, b) => b - a);
  let left = 0;
  let right = people.length - 1;

  while (left <= right) {
    if (people[left] + people[right] <= limit) {
      right--;
    }
    left++;
    answer++;
  }
  return answer;
}

console.log(solution());
