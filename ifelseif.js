let totalMarks = 180;
let grade = "";
let percent = totalMarks*100/500;

console.log(percent);

if (percent >= 90) {
    grade = "A+";
} else if (percent >=80) {
    grade = "A";
} else if (percent >=70) {
    grade = "B+";
} else if (percent >=60) {
    grade = "B";
} else if (percent >=50) {
    grade = "C+";
} else if (percent >=40) {
    grade = "C";
} else {
    grade = "D";
}

console.log("Your grade is " + grade);


switch (grade) {
    case "A+":
        console.log("Your scored distinction");
        break;
     case "A":
        console.log("Your scored first class with distinction");
        break;
    case "B+":
        console.log("Your scored first class");
        break;
    case "B":
        console.log("Your scored second class");
        break;
    case "C":
        console.log("Your scored third class");
        break;    
    default:
        console.log("Your failed!");
        break;
}





