// 홀수
function solution(arr) {
  let answer = [0, 100];
  for (let i of arr) {
    if (i % 2 !== 0) {
      answer[0] += i;
      answer[1] = Math.min(answer[1], i);
    }
  }
  return answer;
}

const arr = [12, 77, 38, 41, 53, 92, 85];
console.log(solution(arr));
