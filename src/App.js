import React, {Component} from 'react';
import { connect } from 'react-redux';
import { Route, withRouter, Switch } from 'react-router-dom';

import Header from './components/Header';
import Services from './components/Services';
import Banner from './components/Banner';
import Cards from './components/Cards';
import Ni from './components/Ni';

import './sass/styles.css';

class App extends Component {
    componentDidMount() {

    }
    render() {
        return (
            <div>

                <Header/>

                <Switch>
                    <Route exact path={`/news`} component={Cards} />
                    <Route exact path={`/interesting`} component={Cards} />
                    <Route exact path={`/`} component={Services} />
                    <Route component={Ni} />
                </Switch>

                <Banner/>

            </div>
        );
    }
}


/**
 * Get data from store
 * @param state
 */
const mapStateToProps = state => (
    {
    }
);

/**
 * Import action from dir action above - but must be passed to connect method in order to trigger reducer in store
 * @type {{UserUpdate: UserUpdateAction}}
 */
const mapActionsToProps = {
};

export default withRouter(connect(mapStateToProps, mapActionsToProps)(App) );

