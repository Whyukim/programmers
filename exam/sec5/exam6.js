// 학급 회장(해쉬)
function solution(str) {
  let max = 0;
  let answer = "";
  let obj = new Map();

  for (let i of str) {
    if (obj.has(i)) obj.set(i, obj.get(i) + 1);
    else obj.set(i, 1);
  }

  for (let [key, value] of obj) {
    if (value > max) {
      max = value;
      answer = key;
    }
  }

  return answer;
}

let str = "BACBACCACCBDEDE";
console.log(solution(str));
