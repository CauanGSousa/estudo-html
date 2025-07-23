const gaveta = document.querySelector('#pesquisar-button');
console.log(gaveta);
gaveta.addEventListener('click', mudarcorbody);

function mudarcorinput(input) {
    const valor = input.value > 5;
    if (input.value === 'blue') {
        input.style.backgroundColor = 'blue';
    } else if (input.value === 'red') {
        input.style.backgroundColor = 'red';
    } else if (input.value === 'green') {
        input.style.backgroundColor = 'green';
    } else if (valor === true) {
        input.style.backgroundColor = 'yellow';
    }
    const mensagem= 'Não encontrado.';
    printarmensagem(mensagem, input);
    // Print a message after changing the input color
}

function mudarcorbody(event) {
    event.preventDefault();
    // Prevent the default action of the button
    const body = document.querySelector('body');
    body.style.backgroundColor = 'blue';
    let input = document.querySelector('#cor');
    mudarcorinput(input);
}

function printarmensagem(msg, input) {
    setTimeout(() => {
        input.value=msg;
    }, 5000); // Simulate a delay for the message
}

// Aprendi variaveis (const body) e (let input), funções, eventos e manipulação de DOM com JavaScript.
// Aprendi estruturas condicionais (if, else if, else) e como alterar o estilo de elementos HTML.
// Aprendi a usar o método setTimeout para simular um atraso na exibição de mensagens
//Aprendi tipos de dados primitivos (string, number, boolean) e como usá-los em JavaScript.
//Aprendi seletores de elementos do DOM (querySelector) e como manipulá-los com JavaScript.