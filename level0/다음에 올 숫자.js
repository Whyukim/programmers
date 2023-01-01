function solution(num, total) {
  var answer = [];
  let a = 0;

  while (true) {
    let hap = 0;

    for (let i = a; i < a + num; i++) {
      answer.push(i);
      hap += i;
    }

    if (hap === total) {
      break;
    } else if (hap > total) {
      a--;
    } else {
      a++;
    }

    answer = [];
  }

  return answer;
}

console.log(solution(5, 5));
console.log(solution(4, 14));
