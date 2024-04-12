import prismaClient from "../../prisma";

class GetClientService {
  async execute() {
    const clients = await prismaClient.clients.findMany();

    return clients;
  }
}

export default GetClientService;