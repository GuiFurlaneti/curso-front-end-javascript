// 1 - VARIÁVEIS
let nome = "Matheus";
console.log(nome);

nome = "Matheus Batisti";
console.log(nome);

const idade = 31;
console.log(idade);
console.log(typeof nome);
console.log(typeof idade);

// 2 -  MAIS SOBRE VARIÁVEIS

// let 2teste = "invalido"
// let @teste = "invalido"

let a = 10, 
    b = 20, 
    c = 30;

console.log(a, b, c);

const nomecompleto = "Matheus Battisti"
const nomeCompleto = "João da Silva"
console.log(nomecompleto);
console.log(nomeCompleto);

let _teste = "ok";
let $teste = "ok";
console.log(_teste, $teste);

// // 3 - PROMPT
// const age = prompt("Digite sua idade:");
// console.log(`Você tem ${age} anos`);

// // 4 - ALERT
// alert("Test");
// const z = 10;
// alert(`Número é ${z}`);

// // 5 - MATH
// console.log(Math.max(5, 2, 1 ,10));
// console.log(Math.floor(5.12));
// console.log(Math.ceil(5.11));

// // 6 - CONSOLE
// console.log("TESTTT");
// console.error("Errrror");
// console.warn("aviseeei");

// 7 - IF
const m = 10;

if(m > 5) {
    console.log("M é maior que 5");
}

const user = "João"
if(user === "João") {
    console.log("To certo!");
}

if(user === "Maria") {
    console.log("TO CERTOO!");
}

// 8 - ELSE
const loggedIn = false

if(loggedIn) {
    console.log("Está autenticado!");
} else {
    console.log("Não está autenticado!");
}

const q = 10
const w = 15

if(q > 5 && w > 20) {
    console.log("Numeros mais altos");
} else {
    console.log("Não sao mais altos");
}

//  9 - ELSE IF
if(1 > 2) {
    console.log("test");
} else if(2 > 3) {
    console.log("test2");
} else if(5 > 1) {
    console.log("agora sim");
}

const userName = "Matheus"
const userAge = 31

if(userName === "José") {
    console.log("bem vindo jose");
} else if(userName === "Matheus" && userAge === 31) {
    console.log("Olá matheus vc tem 31 anos");
} else {
    console.log("nenhuma condicação aceita");
}