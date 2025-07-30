function solution(numbers) {
  const strings = numbers.map(String).sort((a, b) => {
    const ab = a + b;
    const ba = b + a;
    if (ab === ba) return 0;
    return ab > ba ? -1 : 1;
  });

  return strings[0] === '0' ? '0' : strings.join('');
}

const numbers = [6, 10, 2];

console.log(solution(numbers));
