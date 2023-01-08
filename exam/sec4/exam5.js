// K번째 큰 수
function test(a, b, arr) {
  const value = new Set();

  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      for (let k = j + 1; k < arr.length; k++) {
        value.add(arr[i] + arr[j] + arr[k]);
      }
    }
  }

  const answer = [...value].sort((a, b) => b - a);

  return answer[b - 1];
}

const arr = [13, 15, 34, 23, 45, 65, 33, 11, 26, 42];
console.log(solution(10, 3, arr));
