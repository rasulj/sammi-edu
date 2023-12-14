// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import data from '../../../../db.json'


export default function handler(req: NextApiRequest,res: NextApiResponse) {
  if( req.method === "GET"){
    try{
        const response = data.product.find(i => i._id === req.query.id)
        return res.status(200).json(response)
    } catch (error) {
        const result = error as Error
        return res.status(400).json(result.message)

    }
  }

}
