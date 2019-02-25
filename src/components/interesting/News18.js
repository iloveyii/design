import Parser from "rss-parser";
import axios from 'axios';

class News18 {
    constructor(url) {
        console.log('Fetching data from :' + url);
        this.url = url;
        this.fetchUrl = this.fetchUrl.bind(this);
    }

    fetchUrl() {
        let  data = [];
        axios.get(this.url, {
            method: "GET", // *GET, POST, PUT, DELETE, etc.
            mode: "no-cors", // no-cors, cors, *same-origin
            cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
            credentials: "*", // include, *same-origin, omit
            headers: {
                "Content-Type": "application/json",
                // "Content-Type": "application/x-www-form-urlencoded",
            },
            redirect: "follow", // manual, *follow, error
            referrer: "no-referrer", // no-referrer, *client
            }

        ).then(res => {
            console.log(res.data);
            data = res.data;
            return res.data
        }).catch(error => {
            throw new Error(error);
            console.dir(error)
        });

        console.log('outside axios')
        return [];
    }

    fetchUrl2() {
        let items = [];
        const parser = new Parser({
            customFields: {
                item: [
                    ['g:image_link', 'image'],
                ],
                headers: {mode: 'no-cors'}
            }
        });
        const proxyurl = "https://cors-anywhere.herokuapp.com/";
        const feed = parser.parseURL(proxyurl + this.url).then(contents => {
            console.log('contents', contents);
            let items = contents.items;
            items = items.slice(0, 5);
            items = items.map(item => {
                const image = item.image.match(/http:\/\/.*\.(jpg|png)/i);
                let newItem = {
                    title: item.title,
                    link: item.link,
                    image: image[0],
                    content: item.content,
                    contentSnippet: item.contentSnippet
                };
                return newItem;
            });

            console.log(items);
        });

        return items;
    }
}

export default News18;
