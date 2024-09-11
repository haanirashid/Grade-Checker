console.log("testing");


var eng = +prompt("enter your English marks");
var urdu = +prompt("enter your Urdu marks");
var sci = +prompt("enter your Science marks");
var maths = +prompt("enter your Maths marks");
var pak = +prompt("enter your Pak Studies marks");
var totalMarks = eng + urdu + sci + maths + pak;
var percentage = totalMarks / 500 * 100;
var per = "Percentage: ";



if (eng <= 100 && urdu <= 100 || sci <= 100 && maths <= 100 && pak <= 100 && totalMarks <= 500 && percentage <= 100) {
    if (percentage <= 49 || eng <= 49 || urdu <= 49 || sci <= 49 || maths <= 49 || pak <= 49) {
        alert("You have Failed in your Examination!! " + per + percentage)
    }
    else if (percentage <= 100 && percentage >= 90) {
        alert("You have passed in your Exam with an A+ Grade " + per + percentage)
    }
    else if (percentage <= 89 && percentage >= 80) {
        alert("You have passed in your Exam with an A Grade " + per + percentage)
    }
    else if (percentage <= 79 && percentage >= 70) {
        alert("You have passed in your Exam with an B Grade " + per + percentage)
    }
    else if (percentage <= 69 && percentage >= 60) {
        alert("You have passed in your Exam with an C Grade " + per + percentage)
    }
    else if (percentage <= 59 || percentage >= 50) {
        alert("You have passed in your Exam with an D Grade " + per + percentage)
    }
    else {
        alert("error!")
    }
} else {
    alert("Enter Marks Below 100!")
}




