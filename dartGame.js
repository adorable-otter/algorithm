function solution(dartResult = '1D2S#10S') {
  const rexp = /(10|[0-9])[SDT][#*]?/g;
  const results = dartResult.match(rexp);

  return results
    .reduce((points, result) => {
      const basePoint = Number(result.match(/10|[0-9]/)[0]);
      const squared = square(basePoint, result);
      return applyOption(points, squared, result.at(-1));
    }, [])
    .reduce((acc, curr) => acc + curr, 0);
}

const square = (point, result) => {
  return result.split('').reduce((acc, curr) => {
    switch (curr) {
      case 'D':
        return acc ** 2;
      case 'T':
        return acc ** 3;
      default:
        return acc;
    }
  }, point);
};

const applyOption = (points, point, option) => {
  const newPoints = [...points];

  if (option === '*') {
    if (newPoints.length) {
      newPoints[newPoints.length - 1] *= 2;
    }
    point *= 2;
  } else if (option === '#') {
    point *= -1;
  }
  newPoints.push(point);
  return newPoints;
};

console.log(`result = ${solution()}`);
