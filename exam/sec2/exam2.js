// 보이는 학생
function solution(arr) {
  let temp = 0;
  let result = 0;

  for (let i of arr) {
    if (temp < i) {
      result++;
      temp = i;
    }
  }

  return result;
}

let arr = [130, 135, 148, 140, 145, 150, 150, 153];
console.log(solution(arr));
