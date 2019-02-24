import React from 'react';
import Card from './Card';

import banner from "../banner.png";
import Parser from 'rss-parser';


class Cards extends React.Component {
    constructor(props) {
        super(props);
        this.state = { items: [] };
    }

    componentDidMount() {
        const url = 'https://www.thenews.com.pk/rss/1/1';
        let feed = null;

        const parser = new Parser({
            customFields: {
                item: ['image'],
            }
        });
        (async () => {
            feed = await parser.parseURL(url);
            if (feed.items.length > 0) {
                this.setState({ items: feed.items });
            }
            console.log(feed.items);
        })();




    }

    render() {
        console.log('length' + this.state.items.length);
        return (
            this.state.items && this.state.items.length > 0
                ?
                this.state.items.map(item => <Card item={item} />)

                :
                <div>Loading ...</div>
        )
    }
}

export default Cards;