//exercicio 1
const cidadeNatal = "coité";

console.log(`minha cidade natal é ${cidadeNatal}`);

//exercicio 2
let populaçãoCidade = 80_000;

console.log(`á população atual de coité é ${populaçãoCidade}`);

populaçãoCidade = 90_000;

console.log(`á população atual de coité é ${populaçãoCidade}`);

//definindo o escopo
{
    const cidadeNatal = "Salvador";

    console.log(cidadeNatal);
}

//tipos de variaveis

let tex1 = "kawan";//string
let num1 = 18;//number

//null e undefined

let nota;
console.log(nota);
 nota = 10;
console.log(nota);
nota = null;
console.log(nota);

//concatenação de string

let n1 = "Kawan";
let n2 = "Oliveira";

console.log(n1 + " " + n2);//uso do '+ " "+ ' para por um espaço entre as strings

//exercicio 3

let x = 10;
let y = 2;

console.log(`a soma de 10 e 2 é ${x + y}`);

//outros operadores

let z = 15;
z = z + 2;// o valor de z + 2 foi armazenado em z

console.log(z);

let g = 13;

g += 3;
console.log(g);
g-= 3;
console.log(g);

//x++
let k = 10;
    k++;
console.log(k);
    k--;
 console.log(k);
 //++x
 