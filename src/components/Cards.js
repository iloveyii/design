import React from 'react';
import Card from './Card';

import banner from "../banner.png";
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
        let url = 'http://localhost:3000/feed.xml';
        // url = 'https://www.thenews.com.pk/rss/1/1';
        url = 'https://www.urdupoint.com/rss/urdupoint.rss';
        let urlIteresting = 'http://urdu.news18.com/rss/eye-catcher.xml';
        this.fetchUrl(url);
        let feed = null;
        const proxyurl = "https://cors-anywhere.herokuapp.com/";
        console.log(proxyurl + url);
        const parser = new Parser({
            customFields: {
                item: ['image'],
            }
        });
        (async () => {
            feed = await parser.parseURL(proxyurl + url);
            if (feed.items.length > 0) {
                this.setState({ items: feed.items});
            }
            console.log(feed.items);
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
