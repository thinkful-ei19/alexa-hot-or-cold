import React from 'react';

import './guess-form.css';

export default function GuessForm(props) {
    return (
        <form onSubmit={(event) => {
            event.preventDefault();

            let inputValue = event.target.userGuess.value;
            if(inputValue > 100 || inputValue < 0) {
                alert('Please guess a number in between 0 and 100');
            }
            
            event.target.userGuess.value = ''
            
            {props.addGuess(inputValue)}

            }}>
            <input type="text" name="userGuess" id="userGuess"
                className="text" maxLength="3" autoComplete="off"
                placeholder="Enter your Guess" required />
            <input type="submit" id="guessButton" className="button" name="submit" value="Guess"/>
        </form>
    );
};