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

    static async getOneStartups(id: any) {
        return conn.query(`SELECT * FROM startups WHERE id=${id}`).then((res) => {
            return res.rows
        }).catch((err) => {
            console.log(err);
            return err;
        });
    }

    static async insertOneStartups(body: any) {
        try {
            conn.query(`INSERT INTO startups (name, description, email, website) VALUES ('${body.name}', '${body.description}',  '${body.email}', '${body.website}')`)

            return {
                status: 200,
                message: "Startup created"
            }
        } catch (err) {
            console.log(err);
            return err;
        }
    }

    static async updateOneStartups(id: string, body: any) {
        try {
            conn.query(`UPDATE startups SET name='${body.name}', description='${body.description}', email='${body.email}, website='${body.website} WHERE id=${id}`)

            return {
                id: id,
                status: 200,
                message: "Startup updated successfully"
            }
        } catch (err) {
            console.log(err);
            return err;
        }
    }

    static async deleteOneStartups(id: string) {
        try {
            conn.query(`DELETE FROM startups WHERE id=${id}`)

            return {
                id: id,
                status: 200,
                message: "Startup deleted"
            }
        } catch (err) {
            console.log(err);
            return err;
        }
    }
}