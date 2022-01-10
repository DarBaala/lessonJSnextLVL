function checkPrompt(checkMessage) {
  let openingString = "Какая-то строка";
  if (typeof checkMessage === "string") {
    let maxStrong = 30;
    let line = checkMessage.trim();
    if (line.length > maxStrong) {
      openingString = line.substring(0, maxStrong) + "...";
    } else {
      openingString = line;
    }
  }
  return openingString;
}
console.log("checkPrompt(checkMessage):", checkPrompt(checkMessage));
