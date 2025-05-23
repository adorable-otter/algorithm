const relation = [
  ['a', '1', 'aaa', 'c', 'ng'],
  ['a', '1', 'bbb', 'e', 'g'],
  ['c', '1', 'aaa', 'd', 'ng'],
  ['d', '2', 'bbb', 'd', 'ng'],
];

function solution(relation) {
  const col = relation.length;
  const row = relation[0].length;
  const candidateKeys = [];

  function getCombinations(arr, r) {
    const result = [];
    const tmp = [];

    function dfs(start) {
      if (tmp.length === r) {
        result.push([...tmp]);
        return;
      }
      for (let i = start; i < arr.length; i++) {
        tmp.push(arr[i]);
        dfs(i + 1);
        tmp.pop();
      }
    }
    dfs(0);
    return result;
  }

  function isUnique(columns) {
    const seen = new Set();
    for (let i = 0; i < col; i++) {
      const key = columns.map(idx => relation[i][idx]).join('');
      if (seen.has(key)) return false;
      seen.add(key);
    }
    return true;
  }

  function isMinimal(columns) {
    return !candidateKeys.some(existing =>
      existing.every(idx => columns.includes(idx))
    );
  }

  const indices = Array.from({ length: row }, (_, i) => i);

  for (let r = 1; r <= row; r++) {
    const combinations = getCombinations(indices, r);
    for (const comb of combinations) {
      if (isUnique(comb) && isMinimal(comb)) {
        candidateKeys.push(comb);
      }
    }
  }
  return candidateKeys.length;
}

console.log(solution(relation))

// const relation = [
//   ['a', '1', 'aaa', 'c', 'ng'],
//   ['a', '1', 'bbb', 'e', 'g'],
//   ['c', '1', 'aaa', 'd', 'ng'],
//   ['d', '2', 'bbb', 'd', 'ng'],
// ];

// const candidates = [];

// function solution(relation) {
//   const noSoloKeys = getNoSoloKeys(relation);
//   const newRelation = getNewRelation(relation, noSoloKeys);
//   let keyCount = relation[0].length - noSoloKeys.length;

//   for (let i = 0; i < noSoloKeys.length; i++) {
//     const base = [];
//     for (let row = 0; row < relation.length; row++) {
//       base.push(relation[row][noSoloKeys[i]]);
//     }
//     recursive(newRelation, base, i, i + 1);
//   }
//   console.log('🚀 ~ solution ~ candidates:', candidates);
//   const answer = candidates.filter((candidate) => {
//     for (let target of candidates) {
//       if (candidate !== target && target.indexOf(candidate) !== -1) return false;
//     }
//     return true;
//   });
//   console.log("🚀 ~ answer ~ answer:", answer)
//   return keyCount + answer.length;
// }

// const getNewRelation = (relation, keys) => {
//   const result = Array.from({ length: relation.length }, () => []);
//   for (let row = 0; row < relation.length; row++) {
//     for (let col = 0; col < keys.length; col++) {
//       result[row][col] = relation[row][keys[col]];
//     }
//   }
//   return result;
// };

// const recursive = (keys, base, baseIndex, currIndex) => {
//   console.log("🚀 ~ recursive ~ baseIndex, currIndex):", baseIndex, currIndex);
//   if (currIndex >= keys[0].length) {
//     return '';
//   }
//   const newBase = [];
//   const set = new Set();

//   for (let i = 0; i < keys.length; i++) {
//     const key = base[i] + keys[i][currIndex];
//     newBase.push(key);
//     set.add(key);
//   }
//   console.log('🚀 ~ recursive ~ newBase:', newBase);
//   if (newBase.length === set.size) {
//     candidates.push(baseIndex + '' + currIndex);
//   }
//   for (let i = 1; currIndex + i < keys[0].length; i++) {
//     recursive(keys, newBase, baseIndex, currIndex + i);
//   }
// };

// const getNoSoloKeys = (relation) => {
//   const noSoloKeys = [];

//   if (relation.length === 1) {
//     return relation.length;
//   }

//   for (let col = 0; col < relation[0].length; col++) {
//     const set = new Set();
//     for (let row = 0; row < relation.length; row++) {
//       set.add(relation[row][col]);
//     }
//     if (set.size !== relation.length) {
//       noSoloKeys.push(col);
//     }
//   }
//   return noSoloKeys;
// };

// // console.log(getNoSoloKeys(relation));
// console.log(solution(relation));

/**
 * 같은 인덱스를 가지는 요소들을 비교해서 중복되는 값이 있는지 확인한다.
 *  1. 중복되지 않으면 후보키
 *  2. 중복되면 다음 인덱스들을 순차적으로 붙여서 비교해본다.
 *    2-1 2개 조합, 3개 조합 차례로 늘린다
 *    2-2 후보키가 발견되면 더이상 늘리지 않고 다음 인덱스로 넘어간다.
 *   */

// 중복되는 값이 ㅇ
