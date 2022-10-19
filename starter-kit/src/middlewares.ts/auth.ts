import { Request, Response, NextFunction } from 'express'
import messages from '@constants/messages'

/**
 * Is Authenticated
 */
export default async function isAuthenticated(req: Request, res: Response, next: NextFunction): Promise<void | Response> {
    try {
        // your middleware logic here

        next()

        return res.status(400).send(messages.unauthorized_req)
    } catch (error) {
        return res.status(500).send(messages.serverError)
    }
}
