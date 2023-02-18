// 아나그램(해쉬)
function solution(a, b) {
  const obj = new Map();
  for (let x of a) {
    if (obj.has(x)) obj.set(x, obj.get(x) + 1);
    else obj.set(x, 1);
  }
  for (let y of b) {
    if (!obj.has(y) || obj.get(y) === 0) return "NO";
    else obj.set(y, obj.get(y) - 1);
  }

  return "YES";
}

let a = "AbaAeCe";
let b = "baeeACA";
console.log(solution(a, b));
