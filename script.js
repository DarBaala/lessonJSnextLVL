"use strict";

let openingString = "Какая-то строка";
function checkStr(checkMessage) {
  if (typeof checkMessage === "string") {
    if (checkMessage.trim().length > 30) {
      openingString = checkMessage.trim().substring(0, 30) + "...";
    }
  } else {
    console.log("Передана не строка, ты втираешь мне какую-то дичь?");
  }
  return openingString;
}
console.log("checkStr(): ", checkStr("Строка менее 30 символов"));
console.log(
  "checkStr(): ",
  checkStr(
    "Строка больше 30 символов символов символов символов символов символов символов символов"
  )
);
console.log("checkStr(): ", checkStr(303));
