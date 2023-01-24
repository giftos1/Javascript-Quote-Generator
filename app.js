const container = document.querySelector('.quote-container');
const button = document.querySelector('#button');

function changeQuote() {
    container.appendChild(container.children[0]);
}

button.addEventListener('click', changeQuote);