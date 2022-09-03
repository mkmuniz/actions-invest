import { StartupInfo } from "./interface";

export default class StartupService {
    static startups: StartupInfo[] | PromiseLike<StartupInfo[]>;

    static async getAllStartups(): Promise<StartupInfo[]> {
        return [{
            id: 1,
            name: "Startup 1",
            description: "Description 1",
            createdAt: new Date(),
            updatedAt: new Date()
        }];
    }
}