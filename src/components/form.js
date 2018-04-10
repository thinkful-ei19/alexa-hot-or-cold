import React from 'react';

import './form.css';

export default function Form() {
    return (
        <form>
            <label labelFor="">Make your Guess!</label>
            <input type="text" value="Enter your guess"></input>
            <button type="Submit">Guess</button>
        </form>
    );
}