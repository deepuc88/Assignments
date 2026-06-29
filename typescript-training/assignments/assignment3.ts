// Assignment -3 (Arrays/Datatypes/Operators)

let studentName: string[] = ["Suresh", "Mahesh", "Naresh"];
let studentMarks: number[] = [75, 80, 82];
let updatedMarks: number[] = [];
let totalMarks: number = 0;
let averageMarks: number = 0;

function updateMark():void {
    for (let i = 0; i < studentMarks.length; i++) {
        updatedMarks[i] = studentMarks[i] + 10;
        console.log(studentName[i], ":", updatedMarks[i]);
    }
}

function calculateAverage() {
    for (let i = 0; i < updatedMarks.length; i++) {
        totalMarks = totalMarks + updatedMarks[i];
    }
    console.log("Total Marks: ", totalMarks);
    averageMarks = totalMarks / updatedMarks.length;
    console.log("Average Marks: ", averageMarks);
}

console.log("Updated Marks:");
updateMark();
calculateAverage();