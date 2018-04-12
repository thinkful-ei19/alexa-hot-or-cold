import React from 'react';

import Header from './header';
import GuessSection from './guess-section';
import GuessCount from './guess-count';
import GuessList from './guess-list';

export default class Game extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            guesses: []
        };
    }

    addGuess(number) {
        this.setState({
            guesses: [...this.state.guesses, number]
        });
    }

render() {
    return (
        <div>
            <Header />
            <GuessSection add={(value) => this.addGuess(value)} feedback="Make your guess!" />
            <GuessCount count={this.state.guesses.length} />
            <GuessList guesses={this.state.guesses} />
        </div>
    );
}
}