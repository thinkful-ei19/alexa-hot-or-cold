import React from 'react';

import NavBar from './navbar';
import Header from './header';
import Form from './form';
import List from './list';

import './board.css';

export default class Board extends React.Component {
    render() {
        return (
            <section>
                <NavBar />
                <Header />
                <Form />
                <List />
            </section>
        )
    }
};