import React, {Component} from 'react';
import Header from './components/Header';
import Services from './components/Services';
import Banner from './components/Banner';
import Cards from './components/Cards';

import './sass/styles.css';

class App extends Component {
    render() {
        return (
            <div>
                <Header/>

                <Services/>

                <Cards />


                <Banner/>


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
