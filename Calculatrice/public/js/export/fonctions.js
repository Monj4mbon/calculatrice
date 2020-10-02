import {calc, input, body} from './style.js'
// ajouter les numéros dans l'input
input.value = "0";
let numé = document.getElementsByClassName('num');
let tab1 = Array.from(numé);
tab1.forEach(element => {
    element.addEventListener('click',()=>{
        input.value += element.innerText;
    });
});

// ajouter les opérateurs dans l'input
let a;
let opér = document.getElementsByClassName('opé');
let tab2 = Array.from(opér);
tab2.forEach(element => {
    element.addEventListener('click',()=>{
        if (input.value.charAt(input.value.length-1) === '+' || input.value.charAt(input.value.length-1) === '-' || input.value.charAt(input.value.length-1) === '*' || input.value.charAt(input.value.length-1) === '/') {
            alert('veuillez entrer un chiffre')
        } else {
            if (b != "") {
                alert('il y a déjà un opérateur');
            } else {
                input.value += element.innerText;
                a = element.innerText;
            };
        };
    });
});

// faire fonctionner le bouton clear
let btnRed = document.getElementById('clear');
btnRed.addEventListener('click',()=>{
    input.value = "0";
});

// faire fonctionner le bouton egal
let réponse = document.getElementById('egal');
réponse.addEventListener('click',()=>{
    if (a === "+") {
        calc.innerText = Math.round(Number(input.value.substr(0, input.value.indexOf(a))) + Number(input.value.substr(input.value.indexOf(a) + 1)));
        console.log(calc.innerText);
    } else if (a === "-") {
        calc.innerText = Math.round(input.value.substr(0, input.value.indexOf(a)) - input.value.substr(input.value.indexOf(a) + 1));
        console.log(calc.innerText);
    } else if (a === "*") {
        calc.innerText = Math.round(input.value.substr(0, input.value.indexOf(a)) * input.value.substr(input.value.indexOf(a) + 1));
        console.log(calc.innerText);
    } else if (a === "/") {
        calc.innerText = Math.round(input.value.substr(0, input.value.indexOf(a)) / input.value.substr(input.value.indexOf(a) + 1));
        console.log(calc.innerText);
    };
});


// gérer la partie onkey
let b = "";
body.onkeydown = (e) =>{
    if (e.code === 'Numpad1') {
        input.value += '1';
    } else if (e.code === 'Numpad2') {
        input.value += '2';
    } else if (e.code === 'Numpad3') {
        input.value += '3';
    } else if (e.code === 'NumpadAdd') {
        if (input.value.charAt(input.value.length-1) === '+' || input.value.charAt(input.value.length-1) === '-' || input.value.charAt(input.value.length-1) === '*' || input.value.charAt(input.value.length-1) === '/') {
            alert('veuillez entrer un chiffre');
        } else {
            if (b != "") {
                alert('il y a déjà un opérateur');
            } else {
                input.value += '+';
                b = '+';
            };
        }
    } else if (e.code === 'Numpad4') {
        input.value += '4';
    } else if (e.code === 'Numpad5') {
        input.value += '5';
    } else if (e.code === 'Numpad6') {
        input.value += '6';
    } else if (e.code === 'NumpadSubtract') {
        if (input.value.charAt(input.value.length-1) === '+' || input.value.charAt(input.value.length-1) === '-' || input.value.charAt(input.value.length-1) === '*' || input.value.charAt(input.value.length-1) === '/') {
            alert('veuillez entrer un chiffre');
        } else {
            if (b != "") {
                alert('il y a déjà un opérateur');
            } else {
                input.value += '-';
                b = '-';
            };
        };
    } else if (e.code === 'Numpad7') {
        input.value += '7';
    } else if (e.code === 'Numpad8') {
        input.value += '8';
    } else if (e.code === 'Numpad9') {
        input.value += '9';
    } else if (e.code === 'NumpadMultiply') {
        if (input.value.charAt(input.value.length-1) === '+' || input.value.charAt(input.value.length-1) === '-' || input.value.charAt(input.value.length-1) === '*' || input.value.charAt(input.value.length-1) === '/') {
            alert('veuillez entrer un chiffre');
        } else {
            if (b != "") {
                alert('il y a déjà un opérateur');
            } else {
                input.value += '*';
                b = '*';
            };
        };
    } else if (e.code === 'Backspace') {
        input.value = '0';
        b = "";
    } else if (e.code === 'Numpad0') {
        input.value += '0';
    } else if (e.code === 'NumpadEnter') {
        if (b === "+") {
            calc.innerText = Math.round(Number(input.value.substr(0, input.value.indexOf(b))) + Number(input.value.substr(input.value.indexOf(b) + 1)));
            console.log(calc.innerText);
        } else if (b === "-") {
            calc.innerText = Math.round(input.value.substr(0, input.value.indexOf(b)) - input.value.substr(input.value.indexOf(b) + 1));
            console.log(calc.innerText);
        } else if (b === "*") {
            calc.innerText = Math.round(input.value.substr(0, input.value.indexOf(b)) * input.value.substr(input.value.indexOf(b) + 1));
            console.log(calc.innerText);
        } else if (b === "/") {
            calc.innerText = Math.round(input.value.substr(0, input.value.indexOf(b)) / input.value.substr(input.value.indexOf(b) + 1));
            console.log(calc.innerText);
        };    
    } else if (e.code === 'NumpadDivide') {
        if (input.value.charAt(input.value.length-1) === '+' || input.value.charAt(input.value.length-1) === '-' || input.value.charAt(input.value.length-1) === '*' || input.value.charAt(input.value.length-1) === '/') {
            alert('veuillez entrer un chiffre');
        } else {
            if (b != "") {
                alert('il y a déjà un opérateur');
            } else {
                input.value += '/';
                b = '/';
            };
        };
    };
};
// input.onkeydown = (e) =>{
//     input.value = e.code
// };