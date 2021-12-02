const cipher = (str, decode) => {
    let result = '';
    let alpha = 'abcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyz';
    let capAlpha = 'ABCDEFGHIJKLMNOPQRSTUVWXYZABCDEFGHIJKLMNOPQRSTUVWXYZ'
    if (decode) {
        for (let i = 0; i < str.length; i++) {
            let index = alpha.indexOf(str[i].toLowerCase());
            if (index !== -1 && isUpperCase(str[i])) {
                result += capAlpha[index - 5 + 26];
            } else if (index !== -1) {
                result += alpha[index - 5 + 26];
            } else {
                result += str[i];
            }
        }
    } else {
        for (let i = 0; i < str.length; i++) {
            let index = alpha.indexOf(str[i].toLowerCase());
            if (index !== -1 && isUpperCase(str[i])) {
                result += capAlpha[index + 5];
            } else if (index !== -1) {
                result += alpha[index + 5];
            } else {
                result += str[i];
            }
        }
    }
    return result;
}

// stole from https://stackoverflow.com/questions/49922278/javascript-checking-if-a-letter-is-an-uppercase
function isUpperCase(str) {
    return str == str.toUpperCase() && str != str.toLowerCase();
}

let ciphered = cipher('I love cryptography!');
let deCiphered = cipher(ciphered, true);

console.log(ciphered);
console.log(deCiphered);