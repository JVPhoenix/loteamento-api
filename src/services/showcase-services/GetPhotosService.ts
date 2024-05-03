import prismaClient from "../../prisma";

class GetPhotosService {
  async execute() {
    const photos = await prismaClient.photos.findMany();

    return photos;
  }
}

export default GetPhotosService;
