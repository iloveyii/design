import React from 'react';
import Card from './Card';
import News18 from './interesting/News18';
import api from './../api/interesting';

import Parser from 'rss-parser';
import axios from 'axios';

class Cards extends React.Component {
    constructor(props) {
        super(props);
        this.state = { items: [] };
        this.url = 'http://localhost:8080/news18/interesting';
    }



    componentDidMount() {
        (async () => {
            await fetch(this.url)
                .then(response => response.text())
                .then(contents => {
                    this.setState({ items: (JSON.parse(contents.replace(/&quot;/g,'\\"'))).slice(0, 20) });
                })
                .catch(() => console.log("Can’t access " + this.url + " response. Blocked by browser?"));
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
