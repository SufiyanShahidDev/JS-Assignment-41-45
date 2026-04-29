// // Chapter 38-42 These answers implement chapter 41-45

// // Answer1

// function power(base, exponent) {
//     var result = 1;
//     var i = 1;

//     while (i <= exponent) {
//         result = result * base;
//         i++;
//     }

//     return result;
// }

// var baseNumber = +prompt("Enter base number:");
// var exponentNumber = +prompt("Enter exponent:");

// var finalResult = power(baseNumber, exponentNumber);

// alert("Result: " + finalResult);
// console.log("Result: " + finalResult);

// //Answer5

// function customIndexOf(text, searchChar) {
//     var i = 0;
//     var index = -1;

//     do {
//         if (text[i] === searchChar) {
//             index = i;
//             break;
//         }
//         i++;
//     } while (i < text.length);

//     return index;
// }

// var userText = prompt("Enter a string:");
// var userChar = prompt("Enter a single character:");

// var result = customIndexOf(userText, userChar);

// alert("Index is: " + result);
// console.log("Index is: " + result);

// // Answer6

// function removeVowels(sentence) {
//     var result = "";
//     var i = 0;

//     while (i < sentence.length) {
//         var char = sentence[i];

//         if (
//             char !== "a" && char !== "e" && char !== "i" &&
//             char !== "o" && char !== "u" &&
//             char !== "A" && char !== "E" && char !== "I" &&
//             char !== "O" && char !== "U"
//         ) {
//             result = result + char;
//         }

//         i++;
//     }

//     return result;
// }

// var userSentence = prompt("Enter a sentence (max 25 characters):");

// var output = removeVowels(userSentence);

// alert("Sentence without vowels:\n" + output);
// console.log(output);

// // Answer7

// function countDoubleVowels(text) {
//     var count = 0;
//     var i = 0;

//     while (i < text.length - 1) {
//         var pair = text[i] + text[i + 1];

//         switch (pair) {
//             case "aa":
//             case "ae":
//             case "ai":
//             case "ao":
//             case "au":

//             case "ea":
//             case "ee":
//             case "ei":
//             case "eo":
//             case "eu":

//             case "ia":
//             case "ie":
//             case "ii":
//             case "io":
//             case "iu":

//             case "oa":
//             case "oe":
//             case "oi":
//             case "oo":
//             case "ou":

//             case "ua":
//             case "ue":
//             case "ui":
//             case "uo":
//             case "uu":
//                 count++;
//                 break;
//         }

//         i++;
//     }

//     return count;
// }

// var sentence = prompt("Enter a sentence:");
// var result = countDoubleVowels(sentence.toLowerCase());

// alert("Number of two-vowel occurrences: " + result);
// console.log("Number of two-vowel occurrences: " + result);


// // Answer10

// function calculateNotes() {
//     var amount = +prompt("Enter amount to withdraw:");
//     var hundredNotes = 0;
//     var fiftyNotes = 0;
//     var tenNotes = 0;

//     while (amount >= 100) {
//         hundredNotes++;
//         amount = amount - 100;
//     }

//     while (amount >= 50) {
//         fiftyNotes++;
//         amount = amount - 50;
//     }

//     while (amount >= 10) {
//         tenNotes++;
//         amount = amount - 10;
//     }

//     alert(
//         "100 Rupee Notes: " + hundredNotes +
//         "\n50 Rupee Notes: " + fiftyNotes +
//         "\n10 Rupee Notes: " + tenNotes
//     );

//     console.log("100 Rupee Notes: " + hundredNotes);
//     console.log("50 Rupee Notes: " + fiftyNotes);
//     console.log("10 Rupee Notes: " + tenNotes);
// }

// calculateNotes();

// Chapter 43-48 These answers implement chapter 41-45


// Answer1

function showAlert() {
    alert("Link was clicked!");
};

// Answer2

function showMessage() {
    alert("Thanks for purchasing a mobile from us!");
};

// Answer3

function deleteRow(button) {
    button.parentNode.parentNode.remove();
};

// Answer4

function changeImage(img) {
    img.src = "https://images.priceoye.pk/apple-17-pro-max-pakistan-priceoye-5k9fi-500x500.webp";
};

function resetImage(img) {
    img.src = "https://www.techspecs.info/_next/image/?url=https%3A%2F%2Fwww.techspecs.info%2Fuploads%2FSAMSUNG_GALAXY_S26_ULTRA_5_G_9232e2ad7e.png&w=256&q=75";
};

// Answer5

let  counter = 0;

function increase() {
    counter++;
    document.getElementById("count").innerHTML = counter;
};

function decrease() {
    counter--;
    document.getElementById("count").innerHTML = counter;
};