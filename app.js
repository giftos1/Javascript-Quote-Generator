const container = document.querySelector('.quote-container');
const quote = document.querySelector('.quote');
const button = document.querySelector('#button');

function changeQuote() {
    container.appendChild(container.children[0]);
}

button.addEventListener('click', changeQuote);