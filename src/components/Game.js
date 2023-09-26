import { useState, useRef } from "react";
import "./Game.css";

const Game = ({
    verifyLetter, 
    pickedWord,
    pickedCategory,
    letters,
    guessedLetters,
    wrongLetters,
    guesses,
    score,
}) => {

    const [letter, setLetter] = useState("");
    const letterInputRef = useRef(null);

    const handleSubmit = (event) => {
        event.preventDefault();

        verifyLetter(letter);
        setLetter("");
        letterInputRef.current.focus(); /*Cursor mantêm-se no mesmo sítio ou form */
    };
  return (
        <div className="game">
            <p className="points">
                <span>Pontuação: {score}</span>
            </p>

            <h1>Adivinhe a palavra:</h1>
            <h3 className="tip">
                Dica sobre a palavra: <span>{pickedCategory}</span>
            </h3>
            <p>Ainda tens {guesses} Tentativas!</p>

            <div className="wordContainer">
                {letters.map((letter, i) => 
                guessedLetters.includes(letter) ? (
                    <span key={i} className="letter">{letter}</span>
                    ) : (
                    <span key={i} className="blankSquare"></span>                        
                    )
                )};

            </div>
            <div className="letterContainer">
                <p>Tente adivinhar a letra da palavra:</p>
                <form onSubmit={handleSubmit}>
                    <input 
                        type="text" 
                        name="letter" 
                        maxLength="1" 
                        required 
                        onChange={(event) => setLetter(event.target.value)}/*ACEITAR E GUARDAR LETRA INSERIDA*/
                        value={letter}
                        ref={letterInputRef}
                        /> 
                        
                    <button>Jogar!</button>
                </form>
            </div>
            <div className="wrongLettersContainer">
                <p>Letras utilizadas:</p>
                {wrongLetters.map((letter, i) => (
                    <span key={i}>{letter}, </span>
                ))}

            </div>



        </div>
    )
};

export default Game