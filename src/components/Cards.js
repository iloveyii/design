import React from 'react';
import { connect } from "react-redux";

import Card from './Card';
import { newsReadAction } from '../actions/NewsAction';

class Cards extends React.Component {
    constructor(props) {
        super(props);
        this.state = { items: [] };
    }

    componentWillReceiveProps(nextProps) {
        if(nextProps.news && Array.isArray(nextProps.news)) {
            this.setState({items: nextProps.news.slice(0, 15)});
        }
    }

    componentDidMount() {
        this.props.newsReadAction(11);
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
});

/**
 * Import action from dir action above - but must be passed to connect method in order to trigger reducer in store
 * @type {{UserUpdate: UserUpdateAction}}
 */
const mapActionsToProps = {
    newsReadAction,
};

export default connect(mapStateToProps, mapActionsToProps)(Cards);

