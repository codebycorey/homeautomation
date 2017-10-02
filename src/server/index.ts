/**
 * Home Automation
 * Author: Corey O'Donnell
 */

import 'reflect-metadata';

import './inversify.loader';

import * as Hapi from 'hapi';

import { HomeAutomationType, IHomeAutomation } from './HomeAutomation';
import { container } from './configs/inversify.config';

const homeAutomation: IHomeAutomation = container.get<IHomeAutomation>(HomeAutomationType);

console.log(`Running enviroment ${process.env.NODE_ENV || 'dev'}`);

// Catch unhandling unexpected exceptions
process.on('uncaughtException', (error: Error) => {
    console.error(`uncaughtException ${error.message}`);
});

// Catch unhandling rejected promises
process.on('unhandledRejection', (reason: any) => {
    console.error(`unhandledRejection ${reason}`);
});

homeAutomation.initialize().then((server: Hapi.Server) => {
    server.start((error) => {
        if (error) {
            throw error;
        }

        let uri: string = 'Unkown';
        if (server.info && server.info.uri) {
            uri = server.info.uri;
        }
        console.log('Server running at:', uri);
    });
});
