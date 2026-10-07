//Exercício 1
const nome = "   joÃO da silVA   ";
let nomeSemEspacos = nome.trim();
let nomeMinusculo = nomeSemEspacos.toLowerCase();

console.log("Exercício 1:");
console.log(nomeMinusculo);


//Exercício 2
const email = "aluno@exemplo.com";

if (email.endsWith("@exemplo.com")) {
  console.log("Exercício 2: E-mail válido");
} else {
  console.log("Exercício 2: E-mail inválido");
}


//Exercício 3
const frase = "JavaScript é muito interessante";

let total = frase.length;

let fraseSemEspacos = frase.replaceAll(" ", "");
let semEspacos = fraseSemEspacos.length;

console.log("Exercício 3:");
console.log("Total: " + total);
console.log("Sem espaços: " + semEspacos);


//Exercício 4
const mensagem = "Estou estudando JavaScript para desenvolver aplicações web.";

if (mensagem.includes("JavaScript")) {
  console.log("Exercício 4: A mensagem contém JavaScript.");
} else {
  console.log("Exercício 4: A mensagem não contém JavaScript.");
}


//Exercício 5
const email2 = "carlos.silva@gmail.com";

let posicaoArroba = email2.indexOf("@");
let usuario = email2.slice(0, posicaoArroba);

console.log("Exercício 5: " + usuario);


//Exercício 6 
const mensagem2 = "Olá, João! Seja bem-vindo, João!";

let novaMensagem = mensagem2.replaceAll("João", "Maria");
console.log("Exercício 6: " + novaMensagem);

let novaMensagem2 = mensagem2.replace(/João/g, "Maria");
console.log("Exercício 6 (regex): " + novaMensagem2);


//Exercício 7
const codigo = "abc123456";

let codigoMaiusculo = codigo.toUpperCase(); 
let letras = codigoMaiusculo.slice(0, 3);   
let numeros = codigoMaiusculo.slice(3);     
let codigoFormatado = letras + "-" + numeros;

console.log("Exercício 7: " + codigoFormatado);


// ---------- Exercício 8 ----------
function inverterString(texto) {
  let letrasArray = texto.split("");
  let invertido = letrasArray.reverse();
  let resultado = invertido.join("");
  return resultado;
}

console.log("Exercício 8: " + inverterString("javascript"));


//Exercício 9
function verificarSenha(senha) {
  if (senha.length < 8) {
    return false;
  }

  let temMaiuscula = false;
  let temMinuscula = false;
  let temNumero = false;

  // percorro a senha letra por letra
  for (let i = 0; i < senha.length; i++) {
    let letra = senha[i];

    if (letra >= "A" && letra <= "Z") {
      temMaiuscula = true;
    }
    if (letra >= "a" && letra <= "z") {
      temMinuscula = true;
    }
    if (letra >= "0" && letra <= "9") {
      temNumero = true;
    }
  }

  if (temMaiuscula && temMinuscula && temNumero) {
    return true;
  } else {
    return false;
  }
}

console.log("Exercício 9:");
console.log(verificarSenha("JavaScript123")); 
console.log(verificarSenha("javascript123")); 
console.log(verificarSenha("Java1")); 


//Exercício 10
function formatarNome(nomeCompleto) {
  let limpo = nomeCompleto.trim().toLowerCase();

  let palavras = limpo.split(/\s+/);

  let palavrasFormatadas = palavras.map(function (palavra) {
    let primeiraLetra = palavra.slice(0, 1).toUpperCase();
    let resto = palavra.slice(1);
    return primeiraLetra + resto;
  });

  return palavrasFormatadas.join(" ");
}

console.log("Exercício 10: " + formatarNome("   maria   da   silva   "));