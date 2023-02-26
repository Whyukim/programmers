// 괄호문자제거
function solution(str) {
  let answer = 0;
  let result = "";
  for (let i of str) {
    if (i === "(") answer++;
    else if (i === ")") answer--;
    else if (answer === 0) result += i;
  }

  return result;
}

let str = "(A(BC)D)EF(G(H)(IJ)K)LM(N)";
console.log(solution(str));
