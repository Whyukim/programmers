function solution(a) {
  let answer = 0;
  for (let i of a) {
    if (i === "(") answer++;
    else answer--;
  }

  return answer ? "No" : "Yes";
}

const a = "(()(()))(()";
const b = "(()()))";
const c = "(())()";
console.log(solution(c));
