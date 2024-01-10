# Em TypeScript, uma Promise é um objeto que representa a eventual conclusão ou falha de uma operação assíncrona. Ela é usada para lidar com código assíncrono de uma maneira mais limpa e fácil.

# Uma Promise pode estar em um dos três estados:

- Pending (Pendente): Estado inicial, a operação ainda não foi concluída.
- Fulfilled (Realizada): A operação foi concluída com sucesso.
- Rejected (Rejeitada): A operação falhou.

# Para criar uma Promise, você pode fazer o seguinte:

```
const minhaPromise: Promise<number> = new Promise((resolve, reject) => {
// Código assíncrono aqui
// Se a operação for bem-sucedida, chame resolve com o resultado
// Se a operação falhar, chame reject com o motivo do erro
});

```

# Exemplo de uso:

```
const minhaPromise: Promise<number> = new Promise((resolve, reject) => {
  setTimeout(() => {
  const randomNumber = Math.random();
  if (randomNumber > 0.5) {
    resolve(randomNumber);
  } else {
    reject(new Error('A operação falhou'));
  }
  }, 1000);
});

minhaPromise
.then((result) => {
console.log('Operação bem-sucedida. Resultado:', result);
})
.catch((error) => {
console.error('Operação falhou. Motivo:', error.message);
});
```

# Neste exemplo, a Promise espera 1 segundo antes de ser resolvida ou rejeitada, simulando uma operação assíncrona. O método then é usado para lidar com o caso de sucesso, e o método catch é usado para lidar com falha
