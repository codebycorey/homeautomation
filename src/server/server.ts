
import * as hapi from "hapi";

const server: hapi.Server = new hapi.Server();

server.connection({
    host: 'localhost',
    port: 3000
});

server.route({
    method: 'GET',
    path: '/hello',
    handler: (request: hapi.Request, reply: hapi.ReplyNoContinue) => {
        return reply('hello world');
    }
})

server.start((err) => {
    if (err) {
        throw err;
    }

    if (!server.info || !server.info.uri) {
        throw new Error("No server uri");
    }
    testing();
    console.log(`Server running at: ${server.info.uri}`);
});
