import React, {Component} from 'react';
import { Route, withRouter, Switch } from 'react-router-dom';

import Header from './components/Header';
import Services from './components/Services';
import Banner from './components/Banner';
import Cards from './components/Cards';
import Ni from './components/Ni';

import './sass/styles.css';

class App extends Component {
    render() {
        return (
            <div>

                <Header/>

                <Switch>
                    <Route exact path={`/news/interesting`} component={Cards} />
                    <Route exact path={`/`} component={Services} />
                    <Route component={Ni} />
                </Switch>

                <Banner/>

            </div>
        );
    }
}

export default App;
