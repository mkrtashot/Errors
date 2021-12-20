Required Tasks

**Task 1**

Complete the reverseString function, it has one parameters. You must perform the following actions:

- Try to reverse string s using the split, reverse, and join methods.
- If an exception is thrown, catch it and print the contents of the exception's message on a new line.
- Print s on new line. If no exception was thrown, then this should be the reversed string, if an exception was thrown, this should be the original string.

Input Format
Locked stub code in the editor reads variable s from stdin and passes it to the function.

Output Format
You must write two print statements using console.log():

1. Print the contents of a caught exception's message on a new line. If no exception was thrown, this
   line should not be printed.
2. Print s on a new line. If no exception was thrown, then this should be the reversed string, if an
   exception was thrown, this should be the original string.

```
Simple Input
Number(1234)
```

```
Simple Input
s.split is not a function
```

Here is the [solution](1.reverse_string.js)

---

**Task 2**

Complete the isPositive function below. It has one integer parameter a

If the value of a is positive, it must return the string YES. Otherwise, it must throw an Error according to the following rules:

- If a is 0, throw an Error with message = Zero Error.
- If a is negative, throw an Error with message = Negative Error.

Here is the [solution](2.is_positive.js)

---

**_Task 3_**

Convert the code using try...catch.

```
function reverseString(s) {
typeof s !== "string"
? console.log("s.split is not a function")
: (s = s.split("").reverse().join(""));
console.log(s);
}
```

Here is the[solution](3.convert_reverse.js)

---

**_Task 4_**

A teacher has created a gradeLabs function that verifies if student programming labs work. This function
loops over an array of JavaScript objects that should contain a student property and runLab property.
The runLab property is expected to be a function containing the student's code. The runLab function is
called and the result is compared to the expected result. If the result and expected results don't match,
then the lab is considered a failure.

[gradeLabs](https://replit.com/@XAEA12/ExceptionHandler#index.js)

The gradeLabs function works for the majority of cases. However, what happens if a student named their
function incorrectly? Run gradeLabs and pass it studentLabs2 as defined below.

```
let studentLabs2 = [
{
student: "Blake",
myCode: function (num) {
return Math.pow(num, num);
},
},
{
student: "Jessica",
runLab: function (num) {
return Math.pow(num, num);
},
},
{
student: "Mya",
runLab: function (num) {
return num * num;
},
},
];
gradeLabs(studentLabs2);
```

Upon running the second example, the teacher gets TypeError: lab.runLab is not a function.
Add a try/catch block inside of gradeLabs to catch an exception if the runLab property is not defined.
If the exception is thrown, the result should be set to the text "Error thrown".

Here is the [solution](4.teacher.js)
