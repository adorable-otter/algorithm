function solution(numbers) {
  return numbers.map(x => {
    if (x % 2 === 0) return x + 1;

    // 홀수일 때
    let binary = '0' + x.toString(2); // 1로만 이루어진 경우 '01'을 찾을 수 없음
    let idx = binary.lastIndexOf('01');
    
    // 01을 10으로 바꾼다
    binary = binary.substring(0, idx) + '10' + binary.substring(idx + 2);
    
    return parseInt(binary, 2);
  });
}

/** 
 * 2진수라서 특정 자리의 1에 1을 더해서 0으로 바꾸는 경우 왼쪽에 연속적으로 존재하는 1들이 모두 0으로 바뀜
 * 또한 앞자리에 있는 수가 변하게 될수록 변화 이후의 결과 값이 커짐
 * 연쇄 변화를 막으려면 변화시키려는 1 바로 앞에 0이 붙어 있으면 변화가 가장 적음
 * 찾으려는 01이 오른쪽에 있을 수록 결과 값이 작음
 */
console.log(solution([1]))