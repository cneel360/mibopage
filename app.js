
 const alphabet = [...Array(26)].map((_, i) => String.fromCharCode(i + 97)); // Lowercase letters
const uppercaseAlphabet = alphabet.map((letter) => letter.toUpperCase()); // Uppercase letters
const numbers = Array.from({ length: 9 }, (_, i) => (i + 1).toString()); // Numbers 1-9
const specialCharacters = ['!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '-', '_', '+', '=', '[', ']', '{', '}', '|', ';', ':', '<', '>', ',', '.', '?', '/']; // Common special characters

const combinedArray = [...alphabet, ...uppercaseAlphabet, ...numbers, ...specialCharacters];
console.log(combinedArray);
function generateRandomInteger(max) {
    return Math.floor(Math.random() * max) + 1;
}
function generate(){

var lengthofpass = prompt(" length of password:  ")
 var pwd = ''
 var passwdgen ;
 for (let i = 1; i < lengthofpass; i++) {
    passwdgen =generateRandomInteger(87);
    charcor = combinedArray[passwdgen];
    pwd = pwd + charcor;
}

console.log(pwd);
document.getElementById("displaydiv").innerHTML = pwd;
return pwd;

}