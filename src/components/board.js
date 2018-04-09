import React from 'react';

import NavBar from './navbar';

import './board.css';

export default class Board extends React.Component {
    render() {
        return (
            <section>
                <NavBar />
                <div>
                    <h2>HOT or COLD</h2>
                </div>
                <form>
                    <label labelFor="">Make your Guess!</label>
                    <input type="text" value="Enter your guess"></input>
                    <button type="Submit">Guess</button>
                </form>
                <h3>Guess #0!</h3>
                <ul>
                    <li>10</li>
                    <li>10</li>
                </ul>
            </section>
        )
    }
};