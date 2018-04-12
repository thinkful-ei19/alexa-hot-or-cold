import React from 'react';

import Header from './header';
import GuessSection from './guess-section';
import GuessCount from './guess-count';
import GuessList from './guess-list';
import InfoModal from './info-modal';

export default class Game extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            guesses: [],
            answer: Math.floor((Math.random() * 100) + 1),
            feedback: 'Make your guess',
            display: false
        };
        console.log(this.state.answer);
    }

    addGuess(number) {
        const difference = Math.abs(number - this.state.answer);
        let feedback;
        if(difference > 60) {
            feedback = 'Ice Cold';
        }
        else if(difference > 30) {
            feedback = 'Cold';
        }
        else if(difference > 10) {
            feedback = 'Warm';
        }
        else if(difference > 5) {
            feedback = 'Hot';
        }
        else if (difference >= 1) {
            feedback = 'On Fire!';
        } else {
            feedback = 'You got it! Click new game to play again';
        }
        this.setState({
            guesses: [...this.state.guesses, number],
            feedback
        });
    }

    toggleDisplay() {
            this.setState({
                display: !this.state.display
        });
    }

render() {
    // console.log(this.state.display)
    return (
        <div>
            <Header toggleDisplay={(event) => this.toggleDisplay(event)}/>
            <GuessSection add={(value) => this.addGuess(value)} feedback={this.state.feedback} />
            <GuessCount count={this.state.guesses.length} />
            <GuessList guesses={this.state.guesses} />
            {this.state.display 
                ? <InfoModal 
                    toggleDisplay={(event) => this.toggleDisplay(event)}/> 
                : ''}
        </div>
    );
}
}