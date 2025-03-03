function solution(s = 'zzzz', skip = 'a', index = 5) {
  // happy
  const firstCode = 'a'.charCodeAt();
  const lastCode = 'z'.charCodeAt();
  const skipMap = new Map(
    skip.split('').map((char) => {
      return [char.charCodeAt(), true];
    })
  );

  return s
    .split('')
    .map((char) => {
      let code = char.charCodeAt();
      let count = index;
      while (count > 0) {
        code++;
        if (code > lastCode) {
          code = (code % lastCode) + firstCode - 1;
        }
        if (!skipMap.has(code)) count--;
      }
      return String.fromCharCode(code);
    })
    .join('');
}

console.log(solution());
