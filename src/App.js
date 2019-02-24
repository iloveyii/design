import React, {Component} from 'react';
import Header from './components/Header';


import banner from './banner.png';
import './sass/styles.css';

class App extends Component {
    render() {
        return (
            <div>
                <Header />

                <section id="services">
                    <div className="wrapper">
                        <h1>Services</h1>
                        <p></p>

                        <ul className="focus-box">
                            <li>
                                <div className="service-icon">
                                    <i style={Styles.parraImg}
                                       className="pixeden glyphicon"></i>
                                </div>
                            </li>
                            <li>
                                <div className="service-icon">
                                    <i style={Styles.roundImg}
                                       className="pixeden glyphicon"></i>
                                </div>
                            </li>
                            <li>
                                <div className="service-icon">
                                    <i style={Styles.parraImg}
                                       className="pixeden glyphicon"></i>
                                </div>
                            </li>

                        </ul>

                    </div>
                </section>

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
        );
    }
}

const Styles = {
    roundImg: {
        background: "url(images/ti-logo.png) no-repeat center",
        width: "100%",
        height: "100%"
    },

    parraImg: {
        background: "url(images/parallax.png) no-repeat center",
        width: "100%",
        height: "100%"
    }
};

export default App;
