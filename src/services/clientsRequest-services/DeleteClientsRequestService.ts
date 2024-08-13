import prismaClient from "../../prisma";

interface DeleteClientsRequestServiceInterface {
  id: string;
}

class DeleteClientsRequestService {
  async execute(props: DeleteClientsRequestServiceInterface) {
    if (!props.id) {
      throw new Error("Solicitação Inválida");
    }

    const findClient = await prismaClient.clientsRequest.findFirst({
      where: {
        id: props.id,
      },
    });

    if (!findClient) {
      throw new Error("Cliente não existe!");
    }

    await prismaClient.clientsRequest.delete({
      where: {
        id: findClient.id,
      },
    });
    return "Deletado com sucesso";
  }
}

export default DeleteClientsRequestService