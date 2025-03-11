//	[1, 3]
function solution(
  today = '2022.05.19',
  terms = ['A 6', 'B 12', 'C 3'],
  privacies = ['2021.05.02 A', '2021.07.01 B', '2022.02.19 C', '2022.02.20 C']
) {
  const map = convertToMap(terms);
  return privacies
    .reduce((acc, curr, index) => {
      const [date, termString] = curr.split(' ');
      if (new Date(today) > expiredDate(date, map.get(termString))) {
        acc.push(index + 1);
      }
      return acc;
    }, [])
    .sort((a, b) => a - b);
}

const convertToMap = (terms) => {
  return terms.reduce((acc, curr) => {
    const [key, value] = curr.split(' ');
    acc.set(key, value);
    return acc;
  }, new Map());
};

const expiredDate = (targetDate, month) => {
  const date = new Date(targetDate);
  date.setMonth(date.getMonth() + +month);
  date.setDate(date.getDate() - 1);
  return date;
};

console.log(solution());
