import React from 'react';
import Card from './Card';
import News18 from './interesting/News18';
import api from './../api/interesting';

import Parser from 'rss-parser';


class Cards extends React.Component {
    constructor(props) {
        super(props);
        this.state = { items: [] };
        this.fetchUrl = this.fetchUrl.bind(this);
    }

    fetchUrl(url) {
        const proxyurl = "https://cors-anywhere.herokuapp.com/";
        fetch(proxyurl + url) // https://cors-anywhere.herokuapp.com/https://example.com
            .then(response => response.text())
            .then(contents => console.log(contents))
            .catch(() => console.log("Can’t access " + url + " response. Blocked by browser?"))
    }

    componentDidMount() {
        (async () => {
            let items = await api.news18.interesting();
            if (items.length > 0) {
                this.setState({ items: items});
            }
            console.log(items);
        })();
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

export default Cards;
