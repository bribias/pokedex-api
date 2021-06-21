import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

export default class Header extends Component {
    render() {
        return (
            <div className='header-div'>
                A L C H E D E X
                <div className="header-links">
                <Link to="/">
                    Home
                </Link>
                <Link to="/pokemon">
                    Pokemon
                    </Link>
                </div>
            </div>
        )
    }
}
