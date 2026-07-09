
const stringParagraph: string = "Java is a popular programming language. Java is used for webdevelopment, mobile applications, and more.";
let count: number = 0;

let wordsArray: string[] = stringParagraph.split(" ");
for (let i: number = 0; i < wordsArray.length; i++) {
    if (wordsArray[i].toLowerCase() === "java") {
        console.log(`"Java" word index in the paragraph: ${i}`);
        count++;
    }
}
console.log(`The word "Java" appears ${count} times in the paragraph.`);
