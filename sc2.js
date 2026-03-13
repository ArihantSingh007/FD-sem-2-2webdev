function addStudent(){

let name = document.getElementById("name").value;
let roll = document.getElementById("roll").value;
let math = Number(document.getElementById("math").value);
let science = Number(document.getElementById("science").value);
let english = Number(document.getElementById("english").value);
 
let student = {
name:name,
roll:roll,
math:math,
science:science,
english:english
};
 
students.push(student);

alert("Student Added Successfully");

}
 
function displayStudents(){

let result="";

for(let s of students){

result += `
<p>
Name: ${s.name} |
Roll: ${s.roll} |
Math: ${s.math} |
Science: ${s.science} |
English: ${s.english}
</p>
`;

}

document.getElementById("output").innerHTML = result;

}
 
function showTotals(){

let result="";

for(let s of students){

let total = s.math + s.science + s.english;

result += `<p>${s.name} Total Marks: ${total}</p>`;

}

document.getElementById("output").innerHTML = result;

}
 
function showAverage(){

let result="";

for(let s of students){

let avg = (s.math + s.science + s.english) / 3;

result += `<p>${s.name} Average: ${avg.toFixed(2)}</p>`;

}

document.getElementById("output").innerHTML = result;

}
 
function showTopStudents(){

let result="";

for(let s of students){

let avg = (s.math + s.science + s.english) / 3;

if(avg > 80){

result += `<p>${s.name} - Average: ${avg.toFixed(2)}</p>`;

}

}

document.getElementById("output").innerHTML = result;

}
 
function showFailedStudents(){

let result="";

for(let s of students){

let avg = (s.math + s.science + s.english) / 3;

if(avg < 40){

result += `<p>${s.name} - Failed (Avg: ${avg.toFixed(2)})</p>`;

}

}

document.getElementById("output").innerHTML = result;

}
 
function countStudents(){

let count = students.length;

document.getElementById("output").innerHTML = 
`<h3>Total Students: ${count}</h3>`;

}