import prismaClient from "../../prisma";
import { PhotosServiceType } from "../../types";

class CreatePhotosService {
  async execute(props: PhotosServiceType) {
    if (!props) {
      throw new Error("Opção não selecionada");
    }

    const photos = await prismaClient.photos.create({
      data: {
        value: props.value,
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

export default CreatePhotosService;
