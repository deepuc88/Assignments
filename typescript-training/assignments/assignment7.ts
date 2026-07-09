
const originalString: string = "Java programming is fun and challenging";
const wordsString: string[] = originalString.split(" ");
console.log(`Original sentence : ${originalString}`)

let wordCount: number = wordsString.length;
console.log(`Total number of words in the sentence : ${wordCount}`);

let revWords: string = "";
for (let i: number = wordCount - 1; i >= 0; i--) {
    revWords += wordsString[i] + " "
}

console.log(`Reverse order of sentence : ${revWords}`)

let upperCaseSentence: string = "";
for (const word of wordsString) {
    upperCaseSentence += word.substring(0, 1).toUpperCase() + word.substring(1) + " ";
}
console.log(`Uppercase sentence : ${upperCaseSentence}`)