import { Provide } from '../configs/inversify.config';

export const ConfigServiceType: string = 'ConfigService';

export interface IServerConfig {
    port: number;
}

export interface IConfigService {
    getServerConfigs(): IServerConfig;
}

@Provide(ConfigServiceType)
export class ConfigService {

    public getServerConfigs(): IServerConfig {
        return {
            port: 3000
        };
    }
}
