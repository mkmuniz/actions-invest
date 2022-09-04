import { QueryResult } from 'pg';
import { StartupInfo } from "./interface";
import conn from "../../../database/connection";

export default class StartupService {
    static startups: StartupInfo[] | PromiseLike<StartupInfo[]>;

    static async getAllStartups(): Promise<QueryResult> {
        const res = conn.query("SELECT * FROM startups");
        
        return res;
    }

    static async getOneStartups(): Promise<StartupInfo[]> {
        return [{
            id: 1,
            name: "Startup 1",
            description: "Description 1",
            createdAt: new Date(),
            updatedAt: new Date()
        }];
    }

    static async insertOneStartups(): Promise<StartupInfo[]> {
        return [{
            id: 1,
            name: "Startup 1",
            description: "Description 1",
            createdAt: new Date(),
            updatedAt: new Date()
        }];
    }

    static async patchOneStartups(): Promise<StartupInfo[]> {
        return [{
            id: 1,
            name: "Startup 1",
            description: "Description 1",
            createdAt: new Date(),
            updatedAt: new Date()
        }];
    }
}