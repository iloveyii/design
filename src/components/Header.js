import React from 'react';
import { Link } from 'react-router-dom';

class Header extends React.Component {
    render() {
        return (
            <header>
                <nav id="main-nav">
                    <div className="wrapper">
                        <ul>
                            <li>
                                <Link to={'/'}>
                                    <span>Home</span>
                                </Link>
                            </li>
                            <li><a href="#">About</a></li>
                            <li><a href="#">Login</a></li>
                            <li><a href="#">Contact</a></li>
                        </ul>
                    </div>
                </nav>

                <div className="lead-banner">
                    <img src="http://placehold.it/1200x400" className="App-logo" alt="logo"/>
                    <div className="banner-content">
                        <div className="wrapper">
                            <span className="title">Check our products</span>
                            <span className="sub-title">All about portfolio</span>
                        </div>
                    </div>
                </div>
            </header>
        )
    }
}

export default Header;
