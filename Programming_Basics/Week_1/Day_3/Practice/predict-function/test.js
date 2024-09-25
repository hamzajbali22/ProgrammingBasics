// Predict 1
function myBirthYearFunc(){
    console.log("I was born in" + 1980);
}
myBirthYearFunc();
// First line declares the function myBirthYearFunc
// Last line calls the function
// Print to the console "I was born in1980"

// Predict 2
function myBirthYearFunc(birthYearInput){
    console.log("I was born in" + birthYearInput);
}
myBirthYearFunc(1980);
// First line declares the function myBirthYearFunc and expects a parameter of birthYearInput
// Last line calls the function and puts in a value for birthYearInput of 1980
// var birthYearInput = 1980;
// Run the myBirthYearFunc
// Print to the console "I was born in1980"

// Predict 3
function add(num1, num2){
    console.log("Summing Numbers!");
    console.log("num1 is: " + num1);
    console.log("num2 is: " + num2);
    var sum = num1 + num2;
    console.log(sum);
}
add(10, 20);
// First line we declare a function called add, and it takes in 2 parameters: num1 and num2
// Last line calls the function add and passes in the values 10 and 20 for num1 and num2 respectively
// Run the add function with 10 and 20 as parameters
// First line inside the function is a console log that will print "Summing Numbers!"
// Second line inside the function is a console log that will print "num1 is: 10"
// Third line inside the function is a console log that will print "num2 is: 20"
// We create a variable called sum and set it equal to num1 + num2 (we know this is going to equal 30 in this case)
// Last line in the function is a console log that will print the value of sum (the value is 30)