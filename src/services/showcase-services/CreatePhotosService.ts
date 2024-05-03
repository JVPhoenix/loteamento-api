import prismaClient from "../../prisma";
import { PhotosServiceType } from "../../types";

class CraetePhotosService {
  async execute(props: PhotosServiceType) {
    if (!props) {
      throw new Error("Opção não selecionada");
    }

    const photos = await prismaClient.photos.create({
      data: {
        url: props.url,
        type: props.type,
        phase: props.phase,
        width: props.width,
        height: props.height,
      },
    });

    return photos;
  }
}

export default CraetePhotosService;
