// 큰 수 출력하기
function solution(arr) {
  let temp = 0;
  let result = "";

  for (let i of arr) {
    if (temp < i) result += i + " ";
    temp = i;
  }
  
  return result;
}

let arr = [7, 3, 9, 5, 6, 12];
console.log(solution(arr));
