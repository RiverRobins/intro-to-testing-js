// helloWorld function 
function helloWorld() {
    return "Hello, World!";
}

function sayHello(n) {
    if (typeof n === "string") {
        return "Hello, " + n;
    }
    else {
        return "Hello, World!"
    }
}
function isFive(n) {
    return typeof n === "number" || typeof n === "string" ? n == 5 : false;
}

function isEven(n) {
    return typeof n === "number" || typeof n === "string" ? parseFloat(n) % 2 === 0: false;
}

function isVowel(n) {
    const v = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"];
    return typeof n === "string" ? v.includes(n) : false;
}

function add(n, m) {
    // return parseInt(n) + parseInt(m);
    // return (typeof n === "number" || typeof parseInt(n) === "number") && (typeof m === "number" || typeof parseInt(m) === "number") ? parseInt(n) + parseInt(m) : "NaN";
    if(isNaN(n) || isNaN(m)){
        return NaN;
    }
    else {
        return parseInt(n) + parseInt(m);
    }
}