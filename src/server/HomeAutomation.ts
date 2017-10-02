import * as Hapi from 'hapi';
import { inject, Provide } from './configs/inversify.config';

import { ConfigServiceType, IConfigService, IServerConfig } from './util/ConfigService';

export const HomeAutomationType: symbol = Symbol('HomeAutomation');

export interface IHomeAutomation {
    initialize(): Promise<Hapi.Server>;
}

@Provide(HomeAutomationType)
export class HomeAutomation implements IHomeAutomation {

    private readonly server: Hapi.Server;
    private readonly configs: IServerConfig;

    public constructor(
        @inject(ConfigServiceType) configService: IConfigService
    ) {
        this.configs = configService.getServerConfigs();
        this.server = new Hapi.Server();
    }

    public async initialize(): Promise<Hapi.Server> {
        console.log('Initializing...');
        this.server.connection({
            port: process.env.PORT || this.configs.port
        });

        return Promise.resolve(this.server);
    }
}
