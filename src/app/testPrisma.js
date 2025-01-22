import prisma from "./lib/prisma.js"; // Add .js extension

async function testPrismaClient() {
  try {
    // Example query to check if Prisma Client is working
    const users = await prisma.teacher.findMany(); // Replace 'user' with your model name
    console.table("Users fetched:", users);
  } catch (error) {
    console.error("Error with Prisma Client:", error);
  } finally {
    // Close Prisma Client connection
    await prisma.$disconnect();
  }
}

testPrismaClient();
