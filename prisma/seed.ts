import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

async function main() {
    const user = await prisma.user.upsert({
        where: {
            email: 'test@test.com',
        },
        update: {
            name: 'Test User',
            password: 'Uday#0574'
        },
        create: {
            email: 'test@test.com',
            name: 'Test User',
            password: 'Uday#0574'
        }                            
    })
    console.log({user})
}

main()
    .catch(e => console.error(e))
    .finally(async () => {
        await prisma.$disconnect()
    })
