import prismaClient from "../../prisma";

class GetClientsService {
  async execute() {
    const clients = await prismaClient.clients.findMany();

    return clients;
  }
}

export default GetClientsService;