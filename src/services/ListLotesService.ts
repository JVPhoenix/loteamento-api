import prismaClient from "../prisma";

class ListLotesService {
  async execute() {
    const lotes = await prismaClient.lotes.findMany();

    return lotes;
  }
}

export default ListLotesService;
