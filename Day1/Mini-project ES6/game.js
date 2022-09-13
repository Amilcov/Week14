export class Game {
    constructor() {
        this.gameStartMessage = "Hello! Do you want to play a game?";
    };

    start() {
        document
        .getElementById("button")
        .addEventListener("click", () => {
        const containerMessage = document.getElementById("message");
        containerMessage.innerText = this.gameStartMessage;
        })
    }
}