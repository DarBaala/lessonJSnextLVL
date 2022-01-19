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
const date = new Date();
let numWeekDay = date.getDay();
if (numWeekDay === 0) {
  numWeekDay = 6;
} else {
  numWeekDay--;
}

week.forEach((date, i) => {
  let str = date;
  if (i === numWeekDay) {
    str = `<b>${date}</b>`;
  } else {
    str = `${date}`;
  }
  if (i === 5 || i === 6) {
    str = `<i>${str}</i>`;
  }
  document.body.insertAdjacentHTML("beforeend", `<div>${str}</div>`);
});
