"use strict";

let arr = ["3458", "456623", "9462953", "284673", "695863", "28758", "986453"];
arr.forEach((e) => {
  if (e[0] === "2" || e[0] === "4") {
    console.log(`${e}`);
  }
});

let x = 100;

nextNumber: for (let i = 2; i <= x; i++) {
  for (let j = 2; j < i; j++) {
    if (i % j === 0) {
      continue nextNumber;
    }
  }

  console.log(i + " Делители этого числа 1 и " + i);
}
