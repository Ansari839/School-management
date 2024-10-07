const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

async function testConnection() {
  try {
    // Create a sample user
    const user = await prisma.user.create({
      data: {
        name: "John Doe",
        email: "john.doe@example.com",
      },
    });
    console.log("User created:", user);
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
  } finally {
    await prisma.$disconnect();
  }
}

testConnection();
