//Exercício 1
const valor = 17.684;

console.log("Exercício 1:");
console.log(Math.round(valor));
console.log(Math.floor(valor)); 
console.log(Math.ceil(valor));  


//Exercício 2
const preco = 149.98765;

let precoFormatado = preco.toFixed(2);
console.log("Exercício 2: " + precoFormatado);

let precoNumero = Number(precoFormatado);
console.log(precoNumero);
console.log(typeof precoNumero); 


//Exercício 3
const valor1 = "25";
const valor2 = "17.5";

let n1 = Number(valor1);
let n2 = Number(valor2);

console.log("Exercício 3:");
console.log("Soma: " + (n1 + n2));
console.log("Diferença: " + (n1 - n2));
console.log("Produto: " + (n1 * n2));
console.log("Quociente: " + (n1 / n2));


//Exercício 4
const valor4 = "123.45";
let convertido = Number(valor4);

if (Number.isNaN(convertido)) {
  console.log("Exercício 4: Valor inválido");
} else {
  console.log("Exercício 4: Valor numérico válido");
}


//Exercício 5 
function verificarInteiro(numero) {
  if (Number.isInteger(numero)) {
    console.log("O número é inteiro.");
  } else {
    console.log("O número não é inteiro.");
  }
}

console.log("Exercício 5:");
verificarInteiro(42.0);

verificarInteiro(42.5);
verificarInteiro("42");
verificarInteiro(NaN);


//Exercício 6
const numeros = [17, 4, 89, 32, 12, 56];

let maior = Math.max(...numeros);
let menor = Math.min(...numeros);

console.log("Exercício 6:");
console.log("Maior: " + maior);
console.log("Menor: " + menor);


//Exercício 7
function gerarNumero() {
  let aleatorio = Math.floor(Math.random() * 100) + 1;
  return aleatorio;
}

console.log("Exercício 7: " + gerarNumero());


//Exercício 8
const nota1 = 7.5;
const nota2 = 8.25;
const nota3 = 9.0;

let soma = nota1 + nota2 + nota3;
let media = soma / 3;

console.log("Exercício 8: Média: " + media.toFixed(2));

function calcularMedia(...notas) {
  let somaNotas = 0;

  for (let i = 0; i < notas.length; i++) {
    somaNotas = somaNotas + notas[i];
  }

  let resultado = somaNotas / notas.length;
  return resultado.toFixed(2);
}

console.log("Média: " + calcularMedia(7.5, 8.25, 9.0));
console.log("Média: " + calcularMedia(10, 6));


//Exercício 9
console.log("Exercício 9:");
console.log("Maior inteiro seguro: " + Number.MAX_SAFE_INTEGER);
console.log("Menor inteiro seguro: " + Number.MIN_SAFE_INTEGER);
console.log("Maior valor finito: " + Number.MAX_VALUE);

//Exercício 10
function analisarNumero(valor) {
  let ehNumero = false;

  if (typeof valor === "number" && !Number.isNaN(valor)) {
    ehNumero = true;
  }

  let ehInteiro = Number.isInteger(valor);
  let ehFinito = Number.isFinite(valor);
  let ehSeguro = Number.isSafeInteger(valor);
  return {
    valor: valor,
    ehNumero: ehNumero,
    ehInteiro: ehInteiro,
    ehFinito: ehFinito,
    ehSeguro: ehSeguro
  };
}

console.log("Exercício 10:");
console.log(analisarNumero(42));
console.log(analisarNumero(42.5));
console.log(analisarNumero("42"));
console.log(analisarNumero(Infinity));
console.log(analisarNumero(NaN));