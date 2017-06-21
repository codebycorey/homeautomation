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
        useExpressServer(this.app, {
            controllers: [TestController]
        });
    }
}

Server.bootstrap();
