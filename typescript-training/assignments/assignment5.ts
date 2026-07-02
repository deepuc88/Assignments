// check the given number is a Prime Number or not.

let n: number[] = [1, 7, 25];

for (let i: number = 0; i < n.length; i++) {
    let num = n[i];
    let output = true;
    if (num <= 1) {
        output = false

    }
    else {
        for (let j: number = 2; j < num; j++) {
            if (num % j == 0) {
                output = false;
                break;
            }
        }


    }

    console.log(`Input : n = ${num}`)
    console.log(`Output : ${output}`)
    if (num == 1) {

        console.log(`Explanation: ${num} has only one divisor (1 itself), which is not sufficient for it to be considered prime`)
    }
    else if (output) {

        console.log(`Explanation: ${num} has exactly two divisors: 1 and 7, making it a prime number.`)
    }
    else {

        console.log(`Explanation: ${num} has more than two divisors: 1, 5, and 25, so it is not a prime number.`)
    }
}





