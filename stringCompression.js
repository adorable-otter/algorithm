function solution(s = 'werwerwsdgsdfsdfsdf') {
  // 최소 값을 찾을거니까.. 하고 무작정 infinity 넣었더니 s.length가 1인 경우 처리 못 함
  let result = s.length;

  for (let size = 1; size < s.length; size++) {
    const split = splitBy(size, s);
    const compressed = compress(split);
    if (compressed.length < result) {
      result = compressed.length;
    }
  }
  return result;
}

const compress = (strings) => {
  const result = [];
  let prev = '';
  let count = 1;

  for (let i = 0; i < strings.length; i++) {
    const s = strings[i];
    if (prev === s) {
      count++;
      if (i === strings.length - 1) {
        result.push(count === 1 ? prev : count + prev);
      }
    } else {
      result.push(count === 1 ? prev : count + prev);
      prev = s;
      count = 1;
      if (i === strings.length - 1) {
        result.push(count === 1 ? s : count + s);
      }
    }
  }
  return result.join('');
};

const splitBy = (size, string) => {
  const result = [];

  for (let i = 0; i < string.length; i += size) {
    result.push(string.slice(i, i + size));
  }
  return result;
};

console.log(solution());
