import prismaClient from "../../prisma";

interface UpdatePhotosServiceInterface {
  id: string;
  url: string;
  type: string;
  phase: number;
  width?: number;
  height?: number;
}

class UpdatePhotosService {
  async execute(props: UpdatePhotosServiceInterface) {
    if (!props) {
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

    const updatePhotos = await prismaClient.photos.update({
      where: {
        id: findPhotos.id,
      },
      data: {
        url: props.url,
        type: props.type,
        phase: props.phase,
        width: props.width,
        height: props.height,
      },
    });
    return updatePhotos;
  }
}

export default UpdatePhotosService;
