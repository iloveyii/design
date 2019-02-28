let Parser = require("rss-parser");
let fetch = require('node-fetch');
const parseString = require('xml2js').parseString;

class News18 {
    constructor(url) {
        console.log('Fetching data from :' + url);
        this.url = url;
        this.fetchUrl = this.fetchUrl.bind(this);
    }

    fetchUrl() {
        let items = [];
        const parser = new Parser({
            customFields: {
                item: [
                    ['g:image_link' , 'image'],
                ]
            }
        });

        const feed = parser.parseURL(this.url).then(contents => {
            let items = contents.items;
            items = items.slice(0, 5);
            items = items.map( item => {
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
            return items;
        });
    }
}



module.exports = {
    News18 : News18
};
