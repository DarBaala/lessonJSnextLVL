"use strict";
let lang = "ru";
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
  console.log("Ты какойто араб что-ли? TERRORIST WANTED");
}
let namePerson = "Студент";
console.log(
  namePerson === "Артем"
    ? "Директор"
    : namePerson === "Максим"
    ? "Преподовадель"
    : "студент"
);
