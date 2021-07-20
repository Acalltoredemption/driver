import React from 'react'
import './gameplay.css';



function startGame(){
const gameButton = document.getElementById('game-button');
const gameScreen = document.getElementById('game-screen');
    gameScreen.hidden = false;
    gameButton.hidden = true;
   
}


export default function Gameplay() {
    return (
        <div>
            <button className="new-game-button" id="game-button" onClick={startGame}>New Game</button>
            <button className="gamescreen" id="game-screen" hidden >Welcome to the game!</button>
        </div>
    )
}
