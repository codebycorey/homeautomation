import * as express from 'express';
import 'reflect-metadata';
import {useExpressServer} from 'routing-controllers';
import {TestController} from './tmpController';

export class Server {
    public app: express.Application;

    public static bootstrap(): Server {
        return new Server();
    }

    constructor() {
        this.app = express();

        this.config();

        this.app.listen(process.env.PORT || 3000);
    }

    public config(): void {
        this.app.use(express.static(__dirname));
        useExpressServer(this.app, {
            controllers: [TestController]
        });
    }
}

// Patch Console
import consoleStamp = require('console-stamp');
consoleStamp(console, {
    colors: {
        stamp: 'green',
        label: 'white'
    }
});

Server.bootstrap();
