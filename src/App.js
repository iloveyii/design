import React, {Component} from 'react';
import logo from './logo.svg';
import './sass/styles.css';

class App extends Component {
    render() {
        return (
            <div className="wrapper">
                <header>
                    <nav id="main-nav">
                        <div className="wrapper">
                            <ul>
                                <li><a href="#">Home</a></li>
                                <li><a href="#">About Us</a></li>
                                <li><a href="#">Login</a></li>
                                <li><a href="#">Contact</a></li>
                            </ul>
                        </div>
                    </nav>

                    <div className="lead-banner">
                        <img src={logo} className="App-logo" alt="logo"/>
                        <div className="banner-content">
                            <div className="wrapper">
                                <div className="title">Check our products</div>
                                <span className="sub-title">All about portfolio</span>
                            </div>
                        </div>
                    </div>
                </header>

                <section id="services">
                    <div className="wrapper">
                        <h1>Services</h1>
                        <p></p>

                        <ul className="focus-box">
                            <li className="service-icon"></li>
                            <li className="service-icon"></li>
                            <li className="service-icon"></li>
                            <li className="service-icon"></li>
                            <li className="service-icon"></li>

                        </ul>
                    </div>
                </section>


            </div>
        );
    }
}

export default App;
