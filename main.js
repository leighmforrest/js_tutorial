let Phrase = require("leighmforrest-palindrome");

function palindromeTester(event) {
  event.preventDefault();

  let phrase = new Phrase(event.target.phrase.value);
  let palindromeResult = document.querySelector('#palindromeResult');
  let phraseHTML = `"<b>${phrase.content}"</b>`;

  if (phrase.palindrome()) {
    palindromeResult.innerHTML = (`${phraseHTML} is a palindrome!`);
  } else {
    palindromeResult(`${phraseHTML} is not a palindrome.`)
  }
}

document.addEventListener("DOMContentLoaded", ()=> {
  let button = document.querySelector("#palindromeTester");
  button.addEventListener("submit", palindromeTester);
  console.log("HAI!");
});
