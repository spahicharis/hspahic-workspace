const caseCheck = (input: string, word: string) => {
  //Array of characters
  const newWord = word.split("");
  const inp: string = input;
  //loop through every character in inp
  [...inp].forEach((w, i) => {
    //if input character matches with character in word no need to change
    if (inp[i] == word[i]) {
      // continue;
    } else if (inp[i].toUpperCase() == word[i]) {
      //if inp[i] when converted to uppercase matches word[i] it means word[i] needs to be lowercase
      newWord.splice(i, 1, word[i].toLowerCase());
    } else {
      //word[i] needs to be uppercase
      newWord.splice(i, 1, word[i].toUpperCase());
    }
  });

  //array to string
  return newWord.join("");
}
export const getPrediction = (input: string, predictions: string[]) => {

  //Convert input value to regex since string.startsWith() is case sensitive
  let regex = new RegExp("^" + input, "i");
  //loop through words array
  for (let i in predictions) {
    //check if input matches with any word in words array
    if (regex.test(predictions[i]) && input != "") {
      //Change case of word in words array according to user input
      //display suggestion

      return caseCheck(input, predictions[i]);
    }
  }

  return "";
}
