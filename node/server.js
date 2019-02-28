'use strict';

var News18 = require('./News18').News18;


const Hapi = require('hapi');
// Create server on port 4000
const server = Hapi.server({
    host: 'localhost',
    port: 4000,
    routes: {
        'cors' : true
    }
});

// Add route for interesting
server.route({
    method: 'GET',
    path: '/interesting/news18',
    handler: function (request, h) {
    var r = [];
        (async () => {
            const m = await new News18('http://urdu.news18.com/rss/eye-catcher.xml');
            r = m.fetchUrl();
            if(Array.isArray(r)) return r;
            console.log(r);
        })();

        while( r.length < 1 ) {
            console.log('in while' , r.length);
            console.log(r);
            return r;
        }


        return [
            {
                title: 'item.title',
                link: 'item.link',
                image: 'image[0]',
                content: 'item.content',
                contentSnippet: 'item.contentSnippet'

            }
        ]
    }
});

// Start the server

const start = async function () {
    try {
        await  server.start();
    }
    catch (err) {
        console.log('err');
        process.exit(1);
    }

    console.log('Server running at uri : ', server.info.uri);
};

start();
