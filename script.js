document.getElementById('highlightButton').addEventListener('click', highlightWord);
document.getElementById('refreshButton').addEventListener('click', refreshInput);

function highlightWord() {
  var inputBox = document.getElementById('inputBox');
  var selectedWord = window.getSelection().toString();
  var highlightedWord = randomizeAsterisks(selectedWord);
  var inputText = inputBox.value;
  var newInputText = inputText.replace(selectedWord, highlightedWord);
  inputBox.value = newInputText;
}

function randomizeAsterisks(word) {
  var wordLength = word.length;
  var asteriskPositions = [];

  for (var i = 1; i < wordLength; i++) {
    if (Math.random() < 0.5) {
      asteriskPositions.push(i);
    }
  }

  var highlightedWord = "";
  for (var j = 0; j < wordLength; j++) {
    highlightedWord += word.charAt(j);
    if (asteriskPositions.includes(j)) {
      highlightedWord += "*";
    }
  }

  return highlightedWord;
}

function refreshInput() {
  var inputBox = document.getElementById('inputBox');
  inputBox.value = "";
}
