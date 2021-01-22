const textarea = document.querySelector('textarea');
const counter = document.querySelector('.counter');

function countingCharacter() {
    const text = textarea.value;
    const textLength = textarea.value.length;
    counter.innerText = `${textLength}`;
}