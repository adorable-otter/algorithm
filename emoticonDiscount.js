function solution(users, emoticons) {
  const answer = [0, 0];
  const cases = [10, 20, 30, 40];

  const allCases = getCombinations(cases, emoticons.length);

  for (const discountCase of allCases) {
    let totalPay = 0;
    let plusNum = 0;

    // 모든 유저에 대한 정보를 탐색
    for (const [rate, price] of users) {
      let pay = 0;
      
      // 현재 할인율 조합을 반영한 이모티콘 가격을 계산
      for (let i = 0; i < emoticons.length; i++) {
        if (discountCase[i] >= rate) {
          pay += emoticons[i] * (100 - discountCase[i]) / 100;
        }
      }

      // 유저의 가입 기준 가격을 체크해서 반영
      if (pay >= price) {
        plusNum += 1;
      } else {
        totalPay += pay;
      }
    }

    // 정답에 가까운 답이면 업데이트
    if (plusNum > answer[0]) {
      answer[0] = plusNum;
      answer[1] = totalPay;
    } else if (plusNum === answer[0] && totalPay > answer[1]) {
      answer[1] = totalPay;
    }
  }

  return answer;
}

// 이모티콘 길이만큼의 모든 할인율 조합
function getCombinations(arr, length) {
  const result = [];

  function backtrack(path) {
    if (path.length === length) {
      result.push([...path]);
      return;
    }
    for (let i = 0; i < arr.length; i++) {
      path.push(arr[i]);
      backtrack(path);
      path.pop();
    }
  }

  backtrack([]);
  return result;
}

const users = [
  [40, 10000],
  [25, 10000],
]; // 원하는 최소 할인율, 플러스 가입 기준 가격

const emoticons = [7000, 9000]; // 이모티콘 정가


console.log(solution(users, emoticons))

// const users = [
//   [40, 10000],
//   [25, 10000],
// ]; // 원하는 최소 할인율, 플러스 가입 기준 가격

// const emoticons = [7000, 9000]; // 이모티콘 정가

// // 최소 할인율로 플러스를 가입자를 최대한 확보한다.

// // 할인율을 모두 대입해본다.
// //  emotions에 특정 할인율을 적용한다
// //  할인된 가격의 총합이 users[i][1]을 넘겼는지 확인한다. 넘었으면 count++
// //  count들을 집계한 다음 최대 값을 찾는다.
// //  최대 값이 여럿이라면 판매 합이 가장 높은 것이 정답

// function solution(users, emoticons) {
//   const result = [0, 0];
//   // const rates = users.reduce((acc, curr) => acc.add(curr[0]), new Set());
//   const rates = [10, 20, 30, 40];
//   const discountedEmoticons = emoticons.map((emoticon) => {
//     const prices = [];
//     rates.forEach((rate) => {
//       prices.push(emoticon * (100 - rate) / 100);
//     })
//     return prices;
//   })

//   users.forEach((user) => {
//     // rates.forEach((rate, index) => {
//       // if (rate >= user[0]) {
//         // const price = discountedEmoticons[]
//       // }
//     // })
//   })

//   // discountedEmoticons.forEach(())

//   // emoticons.forEach(price => {

//   //   users.forEach(user => {
//   //     // if (user[0]
//   //     rates.forEach(rate => {
//   //       if (rate >= user[0]) {
          

//   //       }
        
//   //     });
//   //   })
//   // });


  
  


//   // rates.forEach((rate) => {
//     // const discounted = emoticons.reduce((acc, curr) => acc + (curr * (100 - rate)) / 100, 0);
//   // });
// }

// // console.log(getRates(users));

// console.log(solution(users, emoticons));
