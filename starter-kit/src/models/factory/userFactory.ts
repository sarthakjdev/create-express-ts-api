import prisma from '@lib/prisma'
import { Users } from '@prisma/client'

export default class UserFactory {
    /**
     * get user
     * @static
     * @memberof UserFactory
     */
    static async getUser(email: string): Promise<Users> {
        const user = await prisma.users.findFirst({
            where: {
                email,
            },
        })

        return user
    }
}
