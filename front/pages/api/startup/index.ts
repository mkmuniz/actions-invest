import { NextApiRequest, NextApiResponse } from "next"

export default async function getAll(req: NextApiRequest, res: NextApiResponse) {
  const resp = await fetch('http://localhost:4000/startup')
  const data = await resp.json()

  res.status(200).send(data)
};
