import prismaClient from "../../prisma";

class GetClientsRequestService {
  async execute() {
    const clients = await prismaClient.clientsRequest.findMany();

    return clients;
  }
}

export default GetClientsRequestService;