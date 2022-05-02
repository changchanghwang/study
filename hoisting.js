// var는 선언과 동시에 undefined로 초기화 하기 때문에 Temporal Dead Zone(TDZ)에 속하지 않는 것처럼 동작한다.
console.log(typeof variable); // 출력: "undefined"

console.log(variable); // 출력: undefined

var variable = "Test";

// let, const는 선언 시 hoisting은 되지만 초기화 되지 않기 때문에 Temporal Dead Zone(TDZ)에 속하여 ReferenceError 가 난다.

fn(); // ReferenceError: Cannot access 'fn' before initialization

const fn = function () {
  console.log("hi");
};

fn(); // hi
