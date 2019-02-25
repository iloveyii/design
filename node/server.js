'use strict';

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
