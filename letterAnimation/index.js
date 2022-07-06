const target = document.getElementById("target");
console.log(target);
let array = ["bonhomme", "touriste", "escroc"];
let letterIndex = 0;
let wordIndex = 0


const createLetter = () => {
    const letter = document.createElement('span');
    target.appendChild(letter);
    letter.textContent = array[wordIndex][letterIndex];
    setTimeout(() => {
        letter.remove()
    }, 4000)

}

function createWord() {
    setInterval(() => {
        createLetter();
        letterIndex++;
    }, 500);
}


setInterval(createWord,2000)