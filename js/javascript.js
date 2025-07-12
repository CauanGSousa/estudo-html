const btn = document.querySelector('#pesquisar-button');
console.log(btn);
btn.addEventListener('click', mudarcorbody);

function mudarcorinput(input) {
    if (input.value === 'blue') {
        input.style.backgroundColor = 'blue';
    } else if (input.value === 'red') {
        input.style.backgroundColor = 'red';
    } else if (input.value === 'green') {
        input.style.backgroundColor = 'green';
    } else {
        input.style.backgroundColor = 'white';
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