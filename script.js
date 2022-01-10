"use strict";
function checkStr(checkMessage) {
  if (typeof checkMessage === "string") {
    if (checkMessage.trim().length > 30) {
      console.log(checkMessage.trim().substring(0, 30) + "...");
    } else {
      console.log(checkMessage.trim());
    }
  } else {
    console.log("Передана не строка, ты втираешь мне какую-то дичь?");
  }
}
checkStr("Строка менее 30 символов");
checkStr(
  "Строка больше 30 символов символов символов символов символов символов символов символов"
);
checkStr(303);
