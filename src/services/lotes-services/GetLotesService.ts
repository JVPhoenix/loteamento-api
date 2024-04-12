import prismaClient from "../../prisma";

class GetLotesService {
  async execute() {
    const lotes = await prismaClient.lotes.findMany();

    return lotes;
  }
}

export default GetLotesService;
