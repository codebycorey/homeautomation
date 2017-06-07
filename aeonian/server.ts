import * as _ from 'lodash';
import 'reflect-metadata';
import {createExpressServer} from 'routing-controllers';
import {UserController} from './tmpController';

const hell: string = 'Hello world!';

if (!_.isEmpty(hell)) {
    console.log(hell);
}

const app = createExpressServer({
    controllers: [UserController]
});

app.listen(3000);
