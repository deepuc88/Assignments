

let employeeName: string[] = ["Alice Johnson", "Bob Smith", "Carol Davis", "David Brown", "Eva Green"];
let baseSalary: number[] = [75000.0, 68000.0, 82000.0, 90000.0, 60000.0]
let experience: number[] = [5.1, 3.2, 7.1, 10.2, 2.4]
let rating: number[] = [4.2, 3.8, 4.5, 2.5, 3.5]
let variablePay: number = 0;
let bonus: number = 0;
let hike: number = 0;
let reward: number = 5000;
let percentage: number = 0;
let hikePercentage = new Map();


for (let i = 0; i < employeeName.length; i++) {

    if (rating[i] >= 4.0) {
        variablePay = (baseSalary[i] * 15.0) / 100;
        bonus = 1500;
        console.log(`Employee ${employeeName[i]} variable pay : ${variablePay}`)
    }
    else if (rating[i] >= 3.0) {
        variablePay = (baseSalary[i] * 10.0) / 100;
        bonus = 1200;
        console.log(`Employee ${employeeName[i]} variable pay : ${variablePay}`)
    }
    else {
        variablePay = (baseSalary[i] * 3.0) / 100;
        bonus = 300;
        console.log(`Employee ${employeeName[i]} variable pay : ${variablePay}`)
    }

    if (experience[i] >= 5) {
        hike = baseSalary[i] + variablePay + bonus + reward
        console.log(`New salary of ${employeeName[i]} : ${hike} (Reward 5000 added)`)
    }
    else {
        hike = baseSalary[i] + variablePay + bonus
        console.log(`New salary of ${employeeName[i]} : ${hike}`)
    }

    percentage = hike / baseSalary[i]

    hikePercentage.set(employeeName[i], percentage)
    //console.log(`Employee hike percentage`)

}
console.log(hikePercentage)