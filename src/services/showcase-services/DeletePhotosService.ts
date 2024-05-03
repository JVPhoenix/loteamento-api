import prismaClient from "../../prisma";

interface DeletePhotosServiceInterface {
  id: string;
}

class DeletePhotosService {
  async execute(props: DeletePhotosServiceInterface) {
    if (!props.id) {
      throw new Error("Solicitação Inválida");
    }

    const findPhotos = await prismaClient.photos.findFirst({
      where: {
        id: props.id,
      },
    });

    if (!findPhotos) {
      throw new Error("Cliente não existe!");
    }

    await prismaClient.photos.delete({
      where: {
        id: findPhotos.id,
      },
    });
    return "Deletado com sucesso";
  }
}

export default DeletePhotosService;
