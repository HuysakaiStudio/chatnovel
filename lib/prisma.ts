import { PrismaClient } from "../app/generated/prisma/client";
import { PrismaBetterSqlite3 } from "@prisma/adapter-better-sqlite3";
import { env } from "node:process"

console.log(env)

const globalForPrisma = globalThis as unknown as {prisma?: PrismaClient};
const adapter = new PrismaBetterSqlite3({
    url: process.env.DATABASE_URL || "file:../dev.db",
});

export const prisma = globalForPrisma ?? new PrismaClient({ adapter });
console.log("Hello world")