// prisma.js

import { PrismaClient } from "@prisma/client";

let prisma;

if (process.env.NODE_ENV === "production") {
  prisma = new PrismaClient();
} else {
  // Prevent multiple instances of Prisma Client in development mode
  if (!global.prisma) {
    global.prisma = new PrismaClient({
      log: ["query", "info", "warn", "error"], // Add logging for better debugging
    });
  }
  prisma = global.prisma;
}

export default prisma;
