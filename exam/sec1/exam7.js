// 10부제
function solution(num, arr) {
  return arr.filter((v) => v % 10 === num).length;
}

arr = [25, 23, 11, 47, 53, 17, 33];
console.log(solution(3, arr));
