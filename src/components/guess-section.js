import React from 'react';

import GuessForm from './guess-form';

import './guess-section.css';

export default function GuessSection(props) {
    // console.log(props)
    return (
        <section>
            <h2 id="feedback">{props.feedback}</h2>
            <GuessForm addGuess={props.add}/>
        </section>
    );
}