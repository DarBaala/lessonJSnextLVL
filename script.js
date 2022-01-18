"use strict";
const week = [
  "Понедельник",
  "Вторник",
  "Среда",
  "Четверг",
  "Пятница",
  "Суббота",
  "Воскресенье",
];
const day = new Date();
let numWeekDay = day.getDay();
if (numWeekDay === 0) {
  numWeekDay = 6;
} else {
  numWeekDay--;
}

week.forEach((day, i) => {
  let str = day;
  if (i === numWeekDay) {
    str = `<b>${day}</b>`;
  } else {
    str = `${day}`;
  }
  if (i === 5 || i === 6) {
    str = `<i>${str}</i>`;
  }
  document.body.insertAdjacentHTML("beforeend", `<div>${str}</div>`);
});
