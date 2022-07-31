import { PrismaClient } from "@prisma/client";

export const prismaClient = {
  ClientInstance: {} as PrismaClient,

  getConnection() {
    return this.ClientInstance;
  },

  async createConnection() {
    this.ClientInstance = new PrismaClient();
    await this.ClientInstance.$connect();
  },

  async disconnect() {
    await this.ClientInstance.$disconnect();
  },
};
