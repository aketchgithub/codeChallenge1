//prompts the user to enter the student's marks in the input area.
function studentMarks() {
    const prompt= require("prompt-sync")();
    let marks = prompt("Please enter your marks");
    
    if (typeof marks !== "number"){
        text = "Enter your marks";
    }
// gets the value of the input text and assigns it to the variable marks;
if (marks>79 && marks<=100) {
    console.log( "YOUR GRADE IS A");
}//displays grade A if the value of marks is > 79 but <100
else if (marks >=60 &&marks <=79) {
    console.log("YOUR GRADE IS B");
}//displays grade B if the value of the marks is >=60 but <=79
else if (marks >=49 && marks<=59) {
    console.log ("YOUR GRADE IS C");
}//displays grade C if the value of the marks is >=49 but <=59
else if (marks >=40 &&marks<=49) {
    console.log("YOUR GRADE IS D");
}//Outputs grade C if the value of the marks is >=40 but <=49
else if (marks<40){
    console.log("YOUR GRADE IS E");
}//Outputs grade E if the input value of the marks <40
else if (marks >100) {
    console.log("Please enter a number between 0 and 100");
}//displays an invalid mark if the input mark value is > 100

} studentMarks();

