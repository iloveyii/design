import React from 'react';
import { connect } from "react-redux";

import Card from './Card';
import { newsReadAction } from '../actions/NewsAction';
import { interestingReadAction } from '../actions/InterestingAction';
import {withRouter} from "react-router-dom";

class Cards extends React.Component {
    constructor(props) {
        super(props);
        this.state = { items: [] };
        this.getData = this.getData.bind(this);
    }

    getData(nextProps) {
        const { news, interesting } = nextProps;
        const { pathname } = nextProps.location;
        switch(pathname) {
            case '/news':
                if(news && Array.isArray(news)) {
                    this.setState({items: news.slice(0, 15)});
                }
                break;
            case '/interesting':
                if(interesting && Array.isArray(interesting)) {
                    this.setState({items: interesting.slice(0, 15)});
                }
                break;
        }
    }

    componentWillReceiveProps(nextProps) {
        console.log('Inside componentWillReceiveProps');
        this.getData(nextProps);
    }

    componentDidMount() {
        this.getData(this.props);
    }

    render() {
        return (
            this.state.items && this.state.items.length > 0
                ?
                this.state.items.map((item, i) => <Card key={i} item={item} />)
                :
                <div>Loading ...</div>
        )
    }
}

/**
 * Get data from store
 * @param state
 */
const mapStateToProps = state => ({
    news: state.news,
    interesting: state.interesting,
});

/**
 * Import action from dir action above - but must be passed to connect method in order to trigger reducer in store
 * @type {{UserUpdate: UserUpdateAction}}
 */
const mapActionsToProps = {
    newsReadAction,
    interestingReadAction
};

export default withRouter(connect(mapStateToProps, mapActionsToProps)(Cards));

