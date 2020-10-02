// récupération body + création grande div
let body = document.getElementsByTagName("BODY")[0];
let titre = document.createElement('h1');
titre.setAttribute('id', 'titre');
titre.innerText = 'Calculatrice'
body.appendChild(titre);
let texte = document.createElement('p');
texte.setAttribute('id', 'explications');
texte.innerText = 'Attention cette calculatrice arrondira toutes les réponses au plus proche. Et si vous obtennez une réponse trop grande et que vous ne voyez pas le résultat : faites un clic droit, cliquez  sur inspecter, et en haut à droite cliquez sur console. Votre réponse y sera affichée.'
body.appendChild(texte);
let div = document.createElement('div');
div.setAttribute('id', 'calculatrice');
body.appendChild(div);



// création petites div
let div1 = document.createElement('div');
div1.setAttribute('id', 'div1');
div.appendChild(div1);

let div2 = document.createElement('div');
div2.setAttribute('class', 'div2');
div.appendChild(div2);

let div3 = document.createElement('div');
div3.setAttribute('class', 'div2');
div.appendChild(div3);

let div4 = document.createElement('div');
div4.setAttribute('class', 'div2');
div.appendChild(div4);

let div5 = document.createElement('div');
div5.setAttribute('class', 'div2');
div.appendChild(div5);



// // ligne 1
let div1Calcul = document.createElement('div');
div1.appendChild(div1Calcul);
div1Calcul.setAttribute('class', 'surInput');
let divGauche = document.createElement('div');
div1Calcul.appendChild(divGauche);
divGauche.setAttribute('class', 'divGauche');
let calc = document.createElement('span');
div1Calcul.appendChild(calc);
calc.setAttribute('class', 'calc');
calc.innerText = "..."

let div2Calcul = document.createElement('div');
div1.appendChild(div2Calcul);
div2Calcul.setAttribute('class', 'parentInput');
let input = document.createElement('input');
div2Calcul.appendChild(input);
input.setAttribute('type', 'text');
input.setAttribute('class', 'form-control');
input.readOnly = true;



// // ligne 2
let btn1 = document.createElement('button');
div2.appendChild(btn1);
btn1.innerText = "1";
btn1.setAttribute('class', 'num');

let btn2 = document.createElement('button');
div2.appendChild(btn2);
btn2.innerText = "2";
btn2.setAttribute('class', 'num');

let btn3 = document.createElement('button');
div2.appendChild(btn3);
btn3.innerText = "3";
btn3.setAttribute('class', 'num');

let add = document.createElement('button');
div2.appendChild(add);
add.innerText = "+";
add.setAttribute('class', 'opé');



// // ligne 3
let btn4 = document.createElement('button');
div3.appendChild(btn4);
btn4.innerText = "4";
btn4.setAttribute('class', 'num');

let btn5 = document.createElement('button');
div3.appendChild(btn5);
btn5.innerText = "5";
btn5.setAttribute('class', 'num');

let btn6 = document.createElement('button');
div3.appendChild(btn6);
btn6.innerText = "6";
btn6.setAttribute('class', 'num');

let sous = document.createElement('button');
div3.appendChild(sous);
sous.innerText = "-";
sous.setAttribute('class', 'opé');



// // ligne 4
let btn7 = document.createElement('button');
div4.appendChild(btn7);
btn7.innerText = "7";
btn7.setAttribute('class', 'num');

let btn8 = document.createElement('button');
div4.appendChild(btn8);
btn8.innerText = "8";
btn8.setAttribute('class', 'num');

let btn9 = document.createElement('button');
div4.appendChild(btn9);
btn9.innerText = "9";
btn9.setAttribute('class', 'num');

let mult = document.createElement('button');
div4.appendChild(mult);
mult.innerText = "*";
mult.setAttribute('class', 'opé');



// // ligne 5
let clear = document.createElement('button');
div5.appendChild(clear);
clear.innerText = "C";
clear.setAttribute('id', 'clear');

let btn0 = document.createElement('button');
div5.appendChild(btn0);
btn0.innerText = "0";
btn0.setAttribute('class', 'num');

let egal = document.createElement('button');
div5.appendChild(egal);
egal.innerText = "=";
egal.setAttribute('id', 'egal');

let divi = document.createElement('button');
div5.appendChild(divi);
divi.innerText = "/";
divi.setAttribute('class', 'opé');

export {calc, input, body};