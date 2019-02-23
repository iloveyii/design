import React, {Component} from 'react';
import logo from './logo.svg';
import banner from './banner.png';
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
                                <span className="title">Check our products</span>
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

                        <div className="middle-banner">
                            <img src={banner} className="App-logo" alt="logo"/>
                            <div className="banner-content">
                                <div className="wrapper">
                                    <ul>
                                        <li>This is first line on our banner</li>
                                        <li>This is second line on our banner</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>


            </div>
        );
    }
}

export default App;
