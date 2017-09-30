import { inject } from './inversify.config';

import { IConfigService, ConfigServiceType } from './configurations/ConfigService'

export interface IServerConfig {
    port: number;
}

export class HomeAutomation {

    public static init(
        @inject(ConfigServiceType) configService: IConfigService
    ): Promise<any> {
        const homeAutomation: HomeAutomation = new HomeAutomation(configService);
        return Promise.resolve(homeAutomation.server);
    }

    private server: any;
    private config: IServerConfig;

    public constructor(
        configService: IConfigService
    ) {
        this.config = configService.getServerConfigs();
        this.server = {
            start: (callback: any): void => callback(),
            info: {
                uri: `localhost:${this.config.port}`
            }
        };
    }
}
