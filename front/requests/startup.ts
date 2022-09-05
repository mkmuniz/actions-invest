import { post } from "./request.config";

export async function insertOne(body) {
    const resp = await post('startup/create', body);

    return resp.body;
};