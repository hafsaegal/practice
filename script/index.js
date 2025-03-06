// // // function razzle(lawyer="Billy", target="'em") {
// // //   console.log(`${lawyer } razzle-dazzle ${target}!`);
// // // }
// // // razzle();
// // // razzle("Methuselah", "T'challah");

// // // function saturdayFun() {
// // //   return "This saturday, I want to "

// // // }
// // // saturdayFun();

// // // function mondayWork() {
// // //   return "This Monday, i will go to the office"
// // // };
// // // mondayWork();

// // function outer(greeting, msg= "It's a fine day to learn"){
// //   const innerFunction = function(name, lang='Python'){
// //     return `${greeting}, ${name}! ${msg} ${lang}`;
// //   };
// //   return innerFunction("student","Javascript");
// // }

// // outer("Hello");

// // const number= parseInt(prompt("Enter a number:"));

// // if (number % 2 === 0) {
// //     console.log(`${number} is even.`);
// // }else {
// //     console.log(`${number} is odd.`);
// // }

// // let age=18;

// // if(age>=18) {
// //     console.log("You are eligible to vote")
// // }else{
// //     console.log("You are not eligible to vote")
// // }

// // const number = parseInt(prompt("Enter a number:"));

// // if(number >=1) {
// //     console.log("Positive")
// // } else if(number <0) {
// //     console.log("Negative")
// // }else if(number=0) {
// //     console.log("Zero")
// // }


// // let score=35;
// // if(score>=50) {
// //     console.log("You passed!")
// // }else{
// //     console.log("You failed")
// // }

// // const num1= Number(prompt("Enter the first number:"));
// // const num2= Number(prompt("Enter the second number:"));

// // if (num1>num2) {
// //     console.log(`${num1} is greater than ${num2}`)

// // }else if (num1<num2) {
// //     console.log(`${num2} is greater than ${num1}`);
// // }else {
// //     console.log("Both numbers are equal")
// // }

// // const num1= Number(prompt("Enter the first number"));
// // const num2 = Number(prompt("Enter the second number"));
// // const num3 = Number(prompt("Enter the third number"));

// // const largest= Math.max(num1,num2,num3);
// // console.log(`The largest number is : ${largest}`);

// // let grade=71;

// // if(grade> 90) {
// //     console.log("A")
// // }else if (grade>80){
// //     console.log("B")
// // }else if (grade>70) {
// //     console.log("c")
// // }else if (grade>60) {
// //     console.log("D")
// // }else (grade<60) 
// //     console.log("F")

// // const speedLimit = 1000;
// // let current_speed = 0;
// // let gear = 1;

// // while (current_speed <= speedLimit) {
// //   console.log(`The speed is ${current_speed}`);
// //   current_speed++;

// //   //Gear shifts after every 30km

// //   if (current_speed < 30) {
// //     gear = 1;
// //   } else if (current_speed < 60) {
// //     gear = 2;
// //   }
// // }

// // for(let i=0;i<10; i++ ){
// //     console.log(i)

// // }
// // let names= "hafsa,Egal, Abdi"
// // console.log(names.length)

// // for (let i = 0; i < names.length; i++) {
// //   console.log(names.charAt(i));
// // }

// // 
// // prompt("Enter grade")
// // function grade_calculator(percentage){
// //     let grade;
// //   if (percentage >= 90 && percentage<= 100) {
// //     grade= "A"

// //     // console.log("A");
// //     // console.log(percentage, "=>", "A")
// //   }else if (percentage >= 80) {
// //     grade= "B"
// //     // console.log("B");
// //   }else if (percentage >= 70) {
// //     grade="C"
// //     // console.log("C");
// //   }else if (percentage >= 60) {
// //     grade="D"
// //     console.log("D");
// //   }else (percentage < 60) 
// //   grade= "F"
// //     console.log("F");

// //     return grade

// // }


// // let student_1= grade_calculator(73)
// // console.log("Student one grade", student1_grade)
// function grade_calculator(percentage){
//   let grade;
//     if (percentage >= 90 && percentage<= 100) {
//       grade= "A"

//       // console.log("A");
//       // console.log(percentage, "=>", "A")
//     }else if (percentage >= 80) {
//       grade= "B"
//       // console.log("B");
//     }else if (percentage >= 70) {
//       grade="C"
//       // console.log("C");
//     }else if (percentage >= 60) {
//       grade="D"
//       //console.log("D");
//     }else (percentage < 60)
//     grade= "F";
//       //console.log("F");
//       return grade


  
// }
// const name= prompt("Enter the student name")
// const percentage = parseInt(prompt("Enter Grade"))

// console.log(`${name} has gotten ${grade_calculator(percentage)}`)



// for(let i= 0, let <10, let i++){
//   console.log (i)
// };

// let i= 0;
// // while(i<=10) {
// //     console.log(i)
// //     i++

// let i= 0;
// while(i <=5, i++)
//   console.log(i)
let num= 1;
let sum= 0;

while(num<=5){
  sum += num;
  num++
}
console.log("Total sum:", sum); 

const fruit= ["mango","Apple","Passion"];
console.log(fruit.length);

for(let i=0; i<fruit.length;i++) { 
  console.log(fruit[i])

};

function scuberGreetingForFeet(ride){
  // Write your code here!
  let ride;
  if(ride<=400) {
  console.log("This one is on me!");
  }else if(ride>=400 ||ride<=2000){
  console.log("That will be twenty bucks.");
  }else if(ride >2000){
  console.log("I will gladly take your thirty bucks.");
  }else if(ride<2500){
  console.log("No can do.");
  }
  return ride

}
ride(119)

function ternaryCheckCity(){
  // Write your code here!
  console.log("")
}

function switchOnCharmFromTip(){
  // Write your code here!


