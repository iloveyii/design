import React from 'react';
import { connect } from "react-redux";

import Card from './Card';
import { newsReadAction } from '../actions/NewsAction';

class Cards extends React.Component {
    constructor(props) {
        super(props);
        this.state = { items: [] };
        this.url = 'http://localhost:8080/urdup/interesting';
    }

    componentWillReceiveProps(nextProps) {
        console.log('Inside componentWillReceiveProps');
        this.setState({ items: nextProps.news.slice(0, 15) });
    }
    componentDidMount() {
        console.log('Inside componentDidMount');
        this.props.newsReadAction(11);
            /*
            (async () => {
                await fetch(this.url)
                    .then(response => response.text())
                    .then(contents => {
                        this.setState({ items: (JSON.parse(contents.replace(/&quot;/g,'\\"'))).slice(0, 20) });
                    })
                    .catch(() => console.log("Can’t access " + this.url + " response. Blocked by browser?"));
            })();*/
    }

    render() {
        console.log('length' + this.state.items.length);
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

