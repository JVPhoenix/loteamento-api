import prismaClient from "../../prisma";

interface DeleteClientsServiceInterface {
  id: string;
}

class DeleteCLientsService {
  async execute(props: DeleteClientsServiceInterface) {
    if (!props.id) {
      throw new Error("Solicitação Inválida");
    }

    const findClient = await prismaClient.clients.findFirst({
      where: {
        id: props.id,
      },
    });

    if (!findClient) {
      throw new Error("Cliente não existe!");
    }

    await prismaClient.clients.delete({
      where: {
        id: findClient.id,
      },
    });
    return "Deletado com sucesso";
  }
}

export default DeleteCLientsService