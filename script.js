"use strict";

let openingString = "Какая-то строка";
function checkStr(checkMessage) {
  if (typeof checkMessage === "string") {
    let line = checkMessage.trim();
    if (line.length > 30) {
      openingString = line.substring(0, 30) + "...";
    } else {
      openingString = line;
      console.log("Передана не строка, ты втираешь мне какую-то дичь?");
    }
  }
  return openingString;
}
console.log("checkStr():", checkStr("Строка для проверки"));
