let word = prompt("please Enter The word:");

let charactersArray = word.split("");
let reversedCharacters = charactersArray.reverse();
let reversedWord = reversedCharacters.join("");

if (word === reversedWord) {
  alert("ارهر دو جهت به یک شکل خونده میشه");
} else {
  alert("ارهر دو جهت به یک شکل خونده نمیشه");
}