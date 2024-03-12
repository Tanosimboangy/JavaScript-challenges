function reverseWords(str) {
  const items = str.split(" ");
  var reversedWords: Array<string> = [];

  for (let i = 0; i < items.length; i++) {
    if (items[i] !== "") {
      const reversedWord = items[i].split("");
      var it: Array<string> = [];
      for (let l = reversedWord.length - 1; l >= 0; l--) {
        it.push(reversedWord[l]);
      }
      reversedWords.push(it.join(""));
    } else {
      reversedWords.push(items[i]);
    }
  }
  return reversedWords.join(" ");
}
