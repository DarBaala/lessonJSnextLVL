"use strict";

let arr = ["3458", "456623", "9462953", "284673", "695863", "28758", "986453"];
for (let i = 0; i < arr.length; i++) {
  if (arr[i].startsWith("2") || arr[i].startsWith("4")) {
    console.log(arr[i]);
  }
}

let simply = function (el) {
  let arr = [];
  if (el !== 1) {
    arr.push(1);
    for (let s = 2; s * s <= el; s++) {
      if (el % s === 0) {
        arr.push(s);
      }
    }
  }
  arr.push(el);
  return arr;
};
for (let i = 1; i <= 100; i++) {
  let n = simply(i);
  if (n.length <= 2) {
    console.log(`${i}. Делители этого числа ${n.join(", ")}`);
  }
}
