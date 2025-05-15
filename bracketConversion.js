function solution(p = '()))((()') {
  return convert(p);
}

const convert = (string) => {
  if (isValid(string)) {
    return string;
  }
  const [u, v] = splitByBalance(string);
  if (isValid(u)) {
    return u + convert(v);
  }
  return '(' + convert(v) + ')' + reverse(u.slice(1, u.length - 1));
};

const splitByBalance = (string) => {
  const result = [];
  let openCount = 0;
  let closeCount = 0;

  for (let i = 0; i < string.length; i++) {
    if (string[i] === '(') openCount++;
    if (string[i] === ')') closeCount++;
    if (openCount === closeCount) {
      result.push(string.slice(0, i + 1));
      if (i === string.length - 1) {
        result.push('');
      } else {
        result.push(string.slice(i + 1, string.length));
      }
      break;
    }
  }
  return result;
};

const isValid = (string) => {
  const stack = [];

  for (let char of string) {
    if (char === '(') {
      stack.push(char);
    } else {
      stack.pop();
    }
  }
  return stack.length === 0;
};

const reverse = (string) => {
  const result = [];

  for (let char of string) {
    if (char === '(') {
      result.push(')');
    } else {
      result.push('(');
    }
  }
  return result.join('');
};

console.log(solution());
