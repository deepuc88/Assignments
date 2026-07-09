

const n: number = 5;

for (let i: number = 1; i <= n; i++) {
    let pattern: string = "";

    for (let j: number = i; j <= n; j++) {
        pattern += " ";
    }
    for (let j: number = 1; j <= i; j++) {
        pattern += "*";
    }
    console.log(pattern);
}