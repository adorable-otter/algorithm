// https://school.programmers.co.kr/learn/courses/30/lessons/17681?language=javascript

function solution(n = 5, arr1 = [9, 20, 28, 18, 11], arr2 = [30, 1, 21, 17, 28]) {
  // ["#####","# # #", "### #", "# ##", "#####"]

  return arr1.map((value, index) =>
    (value | arr2[index])
      .toString(2)
      .padStart(n, ' ')
      .replace(/[01]/g, (chat) => (chat === '1' ? '#' : ' '))
  );

  // 배열의 요소들을 이진수로 변환
  // 변환 시 n자리에 맞도록 앞에 패드 부여
  // 변환된 지도 두 개를 비교해서 지도 작성

  // const decodedMap1 = arr1.map((value) => value.toString(2).padStart(n, '0').split(''));
  // const decodedMap2 = arr2.map((value) => value.toString(2).padStart(n, '0').split(''));

  // return decodedMap1.map((value, index) => {
  //   return value
  //     .map((innerValue, innerIndex) => {
  //       const innerValue2 = decodedMap2[index][innerIndex];
  //       if (innerValue === '1' || innerValue2 === '1') return '#';
  //       return ' ';
  //     })
  //     .join('');
  // });
}

console.log(solution());

// const input = "1010101010101010101010".repeat(10000);

// console.time("replace");
// input.replace(/[01]/g, char => (char === '1' ? '#' : ' '));
// console.timeEnd("replace");

// console.time("replace-twice");
// input.replace(/1/g, '#').replace(/0/g, ' ');
// console.timeEnd("replace-twice");

// console.time("split-map-join");
// input.split('').map(char => (char === '1' ? '#' : ' ')).join('');
// console.timeEnd("split-map-join");
