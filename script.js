

const noButton = document.getElementById("no_button");
const yesButton = document.getElementById('yes_button');
const questionContainer = document.getElementById('container');

noButton.addEventListener("mouseover", () => {
    const posX = Math.floor(Math.random() * questionContainer.offsetWidth);
    const posY = Math.floor(Math.random() * questionContainer.offsetHeight);

    noButton.style.top = `${posY}px`;
    noButton.style.left = `${posX}px`;
});