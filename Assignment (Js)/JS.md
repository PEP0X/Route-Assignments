# **Javascript Assignment 1** 

### 1- Write a program that allow to user enter number then print it
```javascript
var num = Number(window.prompt("Enter a number: "));
console.log(num);
```
### 2- Write a program that take number from user then print yes if that number can divide by 3 and 4 otherwise print no <br/>
_0,12,24,36,48,60,72,84, and 96 ==> Yes_
```javascript
var num = Number(window.prompt("Enter a number: "));
if (num % 3 === 0 && num % 4 === 0){
    console.log("Yes");
}else {
    console.log("No")
}
```
### 3- Write a program that allows the user to insert 2 integers then print the max
```javascript
var num1 = Number(window.prompt("Enter First Number: "));
var num2 = Number(window.prompt("Enter Second Number: "));
if (num1 > num2) {
    console.log("The Maximum number is: " + num1);
}else{
    console.log("The Maximum number is: " + num2);
}
```
### 4- Write a program that allows the user to insert an integer then print negative if it is negative number otherwise print positive.

```javascript
var num = Number(window.prompt("Enter a Number: "));
if (num>0){
    console.log("Positive");
}else {
    console.log("Negative");
}
```
### 5- Write a program that take 3 integers from user then print the max element and the min element.
```javascript
var num1 = Number(window.prompt("Enter First Number: "));
var num2 = Number(window.prompt("Enter Second Number: "));
var num3 = Number(window.prompt("Enter Third Number: "));
var max = num1;
if (num2 > max) {
    max = num2;
}
else if (num3 > max) {
    max = num3;
}
var min = num1;
if (num2 < min) {
    min = num2;
}
if (num3 < min) {
    min = num3;
}
console.log("The Maximum number is: " + max);
console.log("The Minimum number is: " + min);
```
### 6-Write a program that allows the user to insert integer number then check If a number is oven or odd then print the result
```javascript
var num = Number(window.prompt("Enter a Number: "));
if (num % 2 === 0) {
    console.log("Even");
}else {
    console.log("Odd");
}
```
### 8- Write a program that take character from user then if it is vowel chars (a,e,I,o,u) then print vowel otherwise print consonant
```javascript
var char = window.prompt("Enter a Character: ").toLowerCase();
if (char === "a" || char === "e" || char === "i" || char === "o" || char === "u") {
    console.log("Vowel");
}else {
    console.log("Consonant");
}
```
### 9- Write a program that allows user to insert integer then print all numbers between 1 to that’s number
```javascript
var num = Number(window.prompt("Enter a Number: "));
for (var i = 1; i <= num; i++) {
   console.log(i);
}
```

###  10- Write a program that allows user to insert integer then print a multiplication table up to 12.
```javascript
var num = Number(window.prompt("Enter a Number: "));
var output = "";
for (var i = 1; i <= 12; i++) {
    output += num * i + " ";
}
console.log(output);
```
### 11- Write a program that allows to user to insert number then print all even numbers between 1 to this number
```javascript
var num = Number(window.prompt("Enter a Number: "));
for (var i = 1; i <= num; i++) {
    if (i % 2 === 0) {
        console.log(i);
    }
}
```
### 12- Write a program that takes two integers then print the power of the first number to the second number.
```javascript
var num1 = Number(window.prompt("Enter First Number: "));
var num2 = Number(window.prompt("Enter Second Number: "));
var result = 1;
for (var i = 1; i <= num2; i++) {
    result *= num1;
}
console.log(result);
```
### 12- Write a program to enter marks of five subjects and calculate total, average and percentage.
```javascript
var mark1 = Number(window.prompt("Enter mark for Subject 1: "));
var mark2 = Number(window.prompt("Enter mark for Subject 2: "));
var mark3 = Number(window.prompt("Enter mark for Subject 3: "));
var mark4 = Number(window.prompt("Enter mark for Subject 4: "));
var mark5 = Number(window.prompt("Enter mark for Subject 5: "));

var total = mark1 + mark2 + mark3 + mark4 + mark5;
var average = total / 5;
// Assuming the total marks for each subject is 100
var percentage = (total / 500) * 100;

console.log("Total Marks: " + total);
console.log("Average Marks: " + average);
console.log("Percentage: " + percentage + "%");
```
### 13- Write a program to input month number and print number of days in that month.
```javascript
var month = Number(window.prompt("Enter month number (1-12): "));
var days;

switch (month) {
    case 1: case 3: case 5: case 7: case 8: case 10: case 12:
        days = 31;
        break;
    case 4: case 6: case 9: case 11:
        days = 30;
        break;
    case 2:
        days = 28;
        break;
    default:
        days = "Invalid month number";
}

console.log("Number of days: " + days);

```

### 14- Write a program to input marks of five subjects
Physics, Chemistry, Biology, Mathematics and Computer , Find percentage and grade: <br/>
Percentage >= 90%: Grade A <br/>
Percentage >= 80%: Grade B <br/>
Percentage >= 70%: Grade C <br/>
Percentage >= 60%: Grade D <br/>
Percentage >= 40%: Grade E <br/>
Percentage < 40%: Grade F  <br/>
```javascript
var physics = Number(window.prompt("Enter marks for Physics: "));
var chemistry = Number(window.prompt("Enter marks for Chemistry: "));
var biology = Number(window.prompt("Enter marks for Biology: "));
var mathematics = Number(window.prompt("Enter marks for Mathematics: "));
var computer = Number(window.prompt("Enter marks for Computer: "));

var total = physics + chemistry + biology + mathematics + computer;
var percentage = (total / 500) * 100;
var grade;

if (percentage >= 90) {
    grade = 'A';
} else if (percentage >= 80) {
    grade = 'B';
} else if (percentage >= 70) {
    grade = 'C';
} else if (percentage >= 60) {
    grade = 'D';
} else if (percentage >= 40) {
    grade = 'E';
} else {
    grade = 'F';
}

console.log("Percentage: " + percentage+ "%");
console.log("Grade: " + grade);
```
# Using a switch case
### 15- Write a program to print total number of days in month
```javascript
var month = Number(window.prompt("Enter month number (1-12): "));
var days;
switch (month) {
    case 1: case 3: case 5: case 7: case 8: case 10: case 12:
        days = 31;
        break;
    case 4: case 6: case 9: case 11:
        days = 30;
        break;
    case 2:
        days = 28;
        break;
    default:
        days = "Invalid month number";
}
console.log("Number of days: " + days);
```
### 16- Write a program to check whether an alphabet is a vowel or consonant 
```javascript
var alphabet = window.prompt("Enter an alphabet: ").toLowerCase();
switch (alphabet) {
    case 'a':
    case 'e':
    case 'i':
    case 'o':
    case 'u':
        console.log("Vowel");
        break;
    default:
        console.log("Consonant");
}
```
###  17- Write a program to find the maximum between two numbers using a switch case
```javascript
var num1 = Number(window.prompt("Enter First Number: "));
var num2 = Number(window.prompt("Enter Second Number: "));

switch (true) {
    case num1 > num2:
        console.log("The Maximum number is: " + num1);
        break;
    case num1 < num2:
        console.log("The Maximum number is: " + num2);
        break;
    default:
        console.log("Both numbers are equal.");
}
```
### 18- Write a program to check whether a number is even or odd using switch case
```javascript
var num = Number(window.prompt("Enter a Number: "));
switch (num % 2) {
    case 0:
        console.log("Even");
        break;
    case 1:
        console.log("Odd");
        break;
    default:
        console.log("Invalid input");
}
```
### 19- Write a program to check whether a number is positive, negative, or zero
```javascript
var num = Number(window.prompt("Enter a Number: "));
switch (true) {
    case num > 0:
        console.log("Positive");
        break;
    case num < 0:
        console.log("Negative");
        break;
    default:
        console.log("Zero");
}
```

### 20- Write a program to create a Simple Calculator
```javascript
var num1 = Number(window.prompt("Enter First Number: "));
var operator = window.prompt("Enter operator ( +, -, *, / ): ");
var num2 = Number(window.prompt("Enter Second Number: "));
var result;

switch (operator) {
    case '+':
        result = num1 + num2;
        break;
    case '-':
        result = num1 - num2;
        break;
    case '*':
        result = num1 * num2;
        break;
    case '/':
        if (num2 !== 0) {
            result = num1 / num2;
        } else {
            console.log("Division by zero is not allowed.");
            break;
        }
        break;
    default:
        console.log("Invalid operator");
        return;
}

console.log("Result: " + result);
```