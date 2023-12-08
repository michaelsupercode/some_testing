import { numbers, names } from "./data.js";

export function getFirstElement() {
  console.log("Only first:", numbers[0], names[0]);
}
export function getLastElement() {
  console.log(
    "Only Last:",
    numbers[numbers.length - 1],
    names[names.length - 1]
  );
}
export function getAllExceptFirstElement() {
  console.log("Slice first:", numbers.slice(1), names.slice(1));
}

export function getAllExceptLastElement() {
  console.log("Slice Last:", numbers.slice(0, -1), names.slice(0, -1));
}

export function getSum() {
  console.log(
    "Summe Number:",
    numbers.reduce((sum, num) => sum + num, 0)
  );
}

export function getRandomNumberInRange(min, max) {
  console.log(
    "Random Number:",
    Math.floor(Math.random() * (max - min + 1)) + min
  );
}

export function capitalizeFirstLetter(str) {
  console.log(
    "capital First Letter:",
    str.charAt(0).toUpperCase() + str.slice(1)
  );
}

export function capitalizeWholeString(str) {
  console.log("whole Capital:", str.toUpperCase());
}

export function checkLastLetterEquality(str1, str2) {
  console.log(
    "Check Last Letter:",
    str1.slice(-1).toLowerCase() === str2.toLowerCase()
  );
}
