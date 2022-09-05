import { QueryResult } from 'pg';
import { StartupInfo } from "./interface";
import conn from "../../../database/connection";

export default class StartupService {
    static startups: StartupInfo[] | PromiseLike<StartupInfo[]>;

    static async getAllStartups(): Promise<QueryResult> {
        return conn.query("SELECT * FROM startups").then((res) => {
            return res.rows
        }).catch((err) => {
            console.log(err);
            return err;
        });
    }

    static async getOneStartups(id: string): Promise<StartupInfo[]> {
        return conn.query(`SELECT FROM startups WHERE id=${id}`).then((res) => {
            return res.rows
        }).catch((err) => {
            console.log(err);
            return err;
        });
    }

    static async insertOneStartups(body: any): Promise<StartupInfo[]> {
        const queryLine = `INSERT INTO startups (name, description) VALUES ('${body.name}', '${body.description}')`;
        return conn.query(queryLine).then((res) => {
            return res.rows
        }).catch((err) => {
            console.log(err);
            return err;
        });
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