import { NextApiRequest, NextApiResponse } from "next";

export default async function getOne(req: NextApiRequest, res: NextApiResponse) {
    const { id } = req.query;
    const resp = await fetch('http://localhost:4000/startup/' + id)
    const data = await resp.json()

    res.status(200).send(data)
}
