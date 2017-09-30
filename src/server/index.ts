/**
 * Home Automation
 * Author: Corey O'Donnell
 */

import 'reflect-metadata';

import { HomeAutomation } from './HomeAutomation';

console.log(`Running enviroment ${process.env.NODE_ENV || 'dev'}`);

// Catch unhandling unexpected exceptions
process.on('uncaughtException', (error: Error) => {
	console.error(`uncaughtException ${error.message}`);
});

// Catch unhandling rejected promises
process.on('unhandledRejection', (reason: any) => {
	console.error(`unhandledRejection ${reason}`);
});

HomeAutomation.init().then((server: any) => {
	server.start(() => {
		console.log('Server running at:', server.info.uri);
	});
});
