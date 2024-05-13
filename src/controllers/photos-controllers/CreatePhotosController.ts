import { FastifyReply, FastifyRequest } from "fastify";
import { PhotosServiceType } from "../../types";
import CreatePhotosService from "../../services/photos-services/CreatePhotosService";

class CreatePhotosController {
  async handle(request: FastifyRequest, reply: FastifyReply) {
    const data = request.body as PhotosServiceType;

    const photosService = new CreatePhotosService();
    const photos = await photosService.execute(data);

    reply.send(photos);
  }
}

export default CreatePhotosController;
