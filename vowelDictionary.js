/**
 * a, e, i, o, u 로만 이루어진 최대 5글자 사전
 * a, aa , aaa, aaaa, aaaaa, aaaae, aaaai, aaaao, aaaau, aeaaa, aeaae, aeaai ... 순
 * 각 요소가 중복 가능한 모든 조합
 * 알파벳 순, 길이 순 정렬
 */

function solution(word) {
  const lengthLimit = 5;
  const elements = ['A', 'E', 'I', 'O', 'U'];
  const results = new Map();
  let index = 1;

  const recursive = (curr) => {
    if (curr.length > 0) {
      results.set(curr.join(''), index);
      index++;
    }

    if (curr.length === lengthLimit) return;

    for (let element of elements) {
      recursive([...curr, element]);
    }
  };

  recursive([]);
  return results.get(word);
}

const word = 'AAAAE';

console.log(solution(word));
