/* filter
O método filter é utilizado para filtrar elementos de um array com base em uma condição. */
// Filtrar números pares de um array
let numeros = [1, 2, 3, 4, 5, 6];
const numerosPares = numeros.filter((numero) => numero % 2 === 0);

console.log(numerosPares); // Saída: [2, 4, 6]

/* fill
O método fill preenche os elementos de um array com um valor estático. */
// Preencher um array com o valor 0
const arrayVazio = new Array(5).fill(0);

console.log(arrayVazio); // Saída: [0, 0, 0, 0, 0]

/* findIndex
O método findIndex retorna o índice do primeiro elemento que satisfaça uma condição específica. */
// Encontrar o índice do primeiro número maior que 3
numeros = [1, 2, 3, 4, 5];
const indice = numeros.findIndex((numero) => numero > 3);

console.log(indice); // Saída: 3 (o índice do número 4)

/* map
O método map cria um novo array aplicando uma função a cada elemento do array original. */
// Dobrar cada elemento de um array
numeros = [1, 2, 3, 4];
const dobrados = numeros.map((numero) => numero * 2);

console.log(dobrados); // Saída: [2, 4, 6, 8]

/* reduce
O método reduce reduz um array a um único valor aplicando uma função acumuladora. */
// Somar todos os elementos de um array
numeros = [1, 2, 3, 4];
const soma = numeros.reduce((acumulador, numero) => acumulador + numero, 0);

console.log(soma); // Saída: 10

/* forEach
O método forEach executa uma função para cada elemento de um array. */
// Imprimir cada elemento de um array
const frutas = ["maçã", "banana", "laranja"];
frutas.forEach((fruta) => console.log(fruta));
// Saída:
// maçã
// banana
// laranja
