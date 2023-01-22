// 등수구하기
function solution(arr) {
  let length = arr.length;
  let result = Array.from({ length: length }, () => 1);

  for (let i = 0; i < length; i++) {
    for (let k = 0; k < length; k++) {
      if (arr[i] > arr[k]) result[k] += 1;
    }
  }

  return result;
}

let arr = [87, 89, 92, 100, 76];
console.log(solution(arr));
