// //? add up the numbers from 1 to n /

// const n = Number(prompt("Enter a number"));
// let sum = 0;

// for (let i = 1; i <= n; i++) {
//   sum += i;
// }

// console.log("Sum is :", sum);

// //? generate 10 random numbers between 0-100 /

// for (i = 1; i < 11; i++) {
//   const randomNum = Math.trunc(Math.random() * 100);
//   console.log(`${i}.number is ${randomNum}`);
// }

// //? check if a number is prime or not /

// const number = Number(prompt("Enter a number bigger than 1"));

// let isPrime = true;

// if (number > 1) {
//   if (number === 2) {
//     console.log(`${number} is a prime number.`);
//   } else {
//     for (let i = 2; i < number; i++) {
//       if (number % i === 0) {
//         isPrime = false;
//         console.log(`${number} is not a prime number.`);
//         break;
//       }
//     }
//   }
// } else {
//   console.log("please enter a number bigger than 1");
// }

// if (isPrime === true) {
//   console.log(`${number} is a prime number.`);
// }

// //? print hello world 10times

// let i = 0;

// while (i < 10) {
//   console.log("Hello world!");
//   i++;
// }

// //? ask the user to input a grade and if the grade is not between 0-100 ask the user to input again and print how is the grade result

// let grade = Number(prompt("Enter your grade"));

// while (grade < 0 || grade > 100) {
//   grade = Number(prompt("Enter your grade"));
// }

// if (grade > 80) {
//   console.log("Your grade is very good");
// } else if (grade > 50) {
//   console.log("your grade is good");
// } else if (grade > 30) {
//   console.log("your grade is low");
// } else {
//   console.log("you f.cked up!");
// }

// //? print hello world 10times with do...while

// let i = 0;

// do {
//   console.log("hello world!");
//   i++;
// } while (i < 10);

// //? do...while : ask the user to input a grade and if the grade is not between 0-100 ask the user to input again and print how is the grade result

// do {
//   var grade = Number(prompt("Enter your grade"));
// } while (grade < 0 || grade > 100);

// if (grade > 80) {
//   console.log("Your grade is very good");
// } else if (grade > 50) {
//   console.log("your grade is good");
// } else if (grade > 30) {
//   console.log("your grade is low");
// } else {
//   console.log("you f.cked up!");
// }

// //? create a do...while loop to ask the user to input grade until user input q or Q. when the user input q or Q stop the loop and print the average of the numbers inputed so far.

// let sum = 0;
// let number = 0;
// let counter = 0;

// do {
//   sum += +number;
//   console.log(sum);
//   number = prompt("enter a number to sum up or press q/Q to quit");
//   if (number.toLowerCase() != "q") {
//     counter += 1;
//   }
// } while (number.toLowerCase() != "q");

// console.log(`Average is: ${sum / counter}`);

// //? create random number between 0-100 and user has 5 chances to guess. decrement chance counter by every guess and tell the user to raise or lower the number to guess right. if the user cant guess right; print SORRY, if guessed right print CONGRATS.

// const number = Math.trunc(Math.random() * 100);
// let chance = 5;
// alert(
//   "Welcome to the GUESS game.You have 5 chances to guess the number right!"
// );

// do {
//   var guess = Number(prompt("Enter a number"));
//   if (guess == number) {
//     alert("Congrats! You guessed right!");
//   } else {
//     chance--;
//     alert(`You did not guess right! You have ${chance} chance left.`);
//     if (chance == 0) {
//       alert(
//         `SORRY! You did not guess the number right! The Number is ${number} !!`
//       );
//       break;
//     } else if (guess > number) {
//       alert("You need to guess a lower number");
//     } else {
//       alert("You need to guess a higher number");
//     }
//   }
// } while (guess != number);

// //? # ODEV1: Console'dan girilen sayilarin ortalamasini bulan programi yaziniz. Program ilk olarak kullanicidan kac tane sayi gireceginin almali bu bilgi isiginda girilen sayilarin ortalamasini hesaplayarak yazdirmalidir.

// alert("Average Calculator");
// const count = Number(prompt("How many numbers will you input ?"));
// let sum = 0;

// for (let i = count; i != 0; i--) {
//   const number = Number(prompt("Enter a number"));
//   sum += number;
// }
// alert(`The average is ${sum / count}`);

// //? # ODEV2: Console'dan girilen taban ve pozitif us degerlerine gore uslu sayi sonucunu hesaplayan kodu for veya while dongusu ile yaziniz.

// const baseNum = Number(prompt("Enter base number"));
// const exponentialNum = Number(prompt("Enter exponential number"));
// let result = 1;

// if (exponentialNum != 0) {
//   for (i = 0; i < exponentialNum; i++) {
//     result = result * baseNum;
//   }
// }
// alert(`The result is : ${result}`);

// //? # ODEV3 (ZOR): Console'dan girilen bir sayinin basamak sayisini hesaplayarak console'a bastiran kodu donguler yardimi ile yaziniz.

// const number = prompt("Enter a number");
// let count = 0;

// if (isNaN(number)) {
//   alert("You did not enter number");
// } else {
//   for (let i = 1; i <= number.length; i++) {
//     count++;
//   }
//   alert(`${count} digits number`);
// }

// //? Can you find the needle in the haystack?
// //? Write a function findNeedle() that takes an array full of junk but containing one "needle"
// //? After your function finds the needle it should return a message (as a string) that says:
// //? "found the needle at position " plus the index it found the needle, so:
// //? findNeedle(['hay', 'junk', 'hay', 'hay', 'moreJunk', 'needle', 'randomJunk'])
// //? should return "found the needle at position 5" (in COBOL "found the needle at position 6")

// alert("Needle Finder in the Haystack!!!");

// const wordNum = prompt("Enter the number of words you will input");
// const list = [];

// for (i = 1; i <= wordNum; i++) {
//   const word = prompt(`Enter the word for position ${i}`);
//   list.push(word);
// }

// function findNeedle(list) {
//   for (i = 0; i < list.length; i++) {
//     if (list[i] == "needle") {
//       alert(`Found the needle at position ${i + 1}`);
//       break;
//     }
//   }
//   if (list[i] != "needle") {
//     alert("'needle' is not in the haystack!");
//   }
// }

// findNeedle(list);

//? Let's write a program that prints every character twice
//? text = "Turkey"; output: TTuurrkkeeyy

// const text = prompt("Please enter a string");
// let output = "";

// for (i = 0; i < text.length; i++) {
//   const letter = text[i];
//   output += letter + letter;
// }

// console.log(output);

//? Exercise3
//? The main idea is to count all the occurring characters in a string. If you have a string like aba, then the result should be {'a': 2, 'b': 1}.
//? What if the string is empty? Then the result should be empty object literal, {}.

alert(`Welcome to the Letter Counter`);
const text = prompt(`Please enter a string`);
const result = {};

for (i = 0; i < text.length; i++) {
  const letter = [text[i]];
  if (result[letter] === undefined) {
    result[letter] = 0;
  }
  result[letter] += 1;
}

console.log(result);
