import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
    const usersWithPosts = await prisma.user.findMany({
      include: {
        posts: true,
      },
    })
    console.dir(usersWithPosts, { depth: null })
  }

  // CREATE NEW USER
  // const user = await prisma.user.create({
  //   data: {
  //     name: 'Alice',
  //     email: '[email protected]',
  //   },
  // })

  // CREATE NEW USER/POST
  // const user = await prisma.user.create({
  //   data: {
  //     name: 'Bob',
  //     email: '[email protected]',
  //     posts: {
  //       create: {
  //         title: 'Hello World',
  //       },
  //     },
  //   },
  // })

main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })