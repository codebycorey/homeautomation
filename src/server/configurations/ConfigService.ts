import { Provide } from '../inversify.config';
import { IServerConfig } from '../HomeAutomation';

export const ConfigServiceType: string = 'ConfigService';

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
