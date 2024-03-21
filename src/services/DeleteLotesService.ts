import prismaClient from "../prisma";

interface DeleteLotesServiceInterface {
  id: string;
}

class DeleteLotesService {
  async execute(props: DeleteLotesServiceInterface) {
    if (!props.id) {
      throw new Error("Solicitação Inválida");
    }

    const findLote = await prismaClient.lotes.findFirst({
      where: {
        id: props.id,
      },
    });

    if (!findLote) {
      throw new Error("Cliente não existe!");
    }

    await prismaClient.lotes.delete({
      where: {
        id: findLote.id,
      },
    });
    return "Deletado com sucesso";
  }
}

export default DeleteLotesService;
