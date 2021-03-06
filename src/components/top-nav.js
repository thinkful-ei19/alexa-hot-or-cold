import React from 'react';

import './top-nav.css';

export default function TopNav(props) {
    return (
        <nav>
            <ul className="clearfix">
                <li>
                    <a onClick={(event) => props.add(event)} className="what" href="#">
                        What?
                    </a>
                </li>
                <li>
                    <a onClick={(event) => props.reset(event)} className="new" href="#">
                        + New Game
                    </a>
                </li>
            </ul>
        </nav>
    );
}