function solution(skill = '', skillTrees) {
  let answer = 0;
  const skillList = skill.split('').reverse();
  const skillMap = new Map(skillList.map((s) => [s, true]));

  const isValid = (tree) => {
    const skills = [...skillList];

    for (let t of tree) {
      if (skillMap.get(t)) {
        if (skills.at(-1) !== t) {
          return false;
        }
        skills.pop();
      }
    }
    return true;
  };

  skillTrees.forEach((tree) => {
    answer += isValid(tree) ? 1 : 0;
  });

  return answer;
}

const skill = 'CBD';
const skillTrees = ['BACDE', 'CBADF', 'AECB', 'BDA']; // 2

/**
 * 순서를 지켜야하는 스킬인지 확인 (map)
 * 앞 순서의 스킬들을 배웠는지 확인 (stack)
 */
console.log(solution(skill, skillTrees));
