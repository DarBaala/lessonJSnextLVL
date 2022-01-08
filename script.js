"use strict";
let lang = "en";
if (lang === "ru") {
  console.log(
    "Понедельник",
    "Вторник",
    "Среда",
    "Четверг",
    "Пятница",
    "Суббота",
    "Воскресенье"
  );
} else if (lang === "en") {
  console.log(
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday"
  );
} else {
  console.log("Ты какой-то араб что-ли? TERRORIST WANTED");
}

switch (lang) {
  case "ru":
    console.log(
      "Понедельник",
      "Вторник",
      "Среда",
      "Четверг",
      "Пятница",
      "Суббота",
      "Воскресенье"
    );
    break;
  case "en":
    console.log(
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
      "Sunday"
    );
    break;
  default:
    console.log(
      "У себя в Махе будешь на этом чуркском языке изъясняться, понял?"
    );
}
let langKey = {
  ru: "Понедельник, Вторник, Среда, Четверг, Пятница, Суббота, Воскресенье",
  en: "Monda, Tuesday, Wednesday, Thursday, Friday, Saturday, Sunday",
};
console.log(langKey);

let namePerson = "Студент";
console.log(
  namePerson === "Артем"
    ? "Директор"
    : namePerson === "Максим"
    ? "Преподовадель"
    : "студент"
);
