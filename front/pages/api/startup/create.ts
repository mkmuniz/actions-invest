import { NextApiRequest, NextApiResponse } from "next";

export default async function insertOne(req: NextApiRequest, res: NextApiResponse) {
    const resp = await fetch('http://localhost:4000/startup', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(req.body)
    })
    const data = await resp.json();

    res.status(200).send(data)
}