// tipos primitivos

// Boolean
var vOuF = false;
console.log(typeof(vOuF));

// Number
var numeroQualquer = 1;
console.log(typeof(numeroQualquer));

// String
var nome = 'Kaique';
console.log(typeof(nome));

// function
var funcao = function() {}
console.log(typeof(funcao));

// como declarar
var variavel = 'Kaique';
variavel = 'Santos';
console.log(variavel);

let variavel2 = 'Kaique';
variavel2 = 'Santos';
console.log(variavel2)

const constante = 'Kaique';
console.log(constante);

var escopoGlobal = 'global';
console.log(escopoGlobal);

function escopoLocal() {
    let escopoInterno = 'local';
    console.log(escopoInterno);
}

escopoLocal();

// atribuição
var atribuição = 'Kaique';

// comparação
var comparacao = '0' == 0;
console.log(comparacao)

// comparação identica
var comparacaoIdentica = '0' ===0;
console.log(comparacaoIdentica);

  // operadores aritméticos
  // adição
var adicao = 1 + 1;
console.log(adicao);
 //subtração
var subtracao = 2 - 1;
console.log(subtracao);
//multiplicação
var multiplicacao = 2 * 3;
console.log(multiplicacao);
//divisão real
var divisaoReal = 6 / 2;
console.log(divisaoReal);
//divisão inteira
var divisaoInteira = 5 % 2;
console.log(divisaoInteira);;
//potenciação
var potenciacao = 2**10;
console.log(potenciacao); 


// operadores relacionais
// maior que
var maiorQue = 5 > 2;
console.log(maiorQue);

// menor que
var menorQue = 5 < 2;
console.log(menorQue);

// maior ou igual a
var maiorOuIgual = 5 >= 2;
console.log(maiorOuIgual);

// menor ou igual a
var menorOuIgual = 5 <= 2;
console.log(menorOuIgual); 


// operadores lógicos
// && - todos os valores devem ser true
var e = true && true;
console.log(e);
// || - somente um valor deve ser true
var ou = true || false;
console.log(ou);
// ! - inverte os valores
var nao = !true;
console.log(nao); 