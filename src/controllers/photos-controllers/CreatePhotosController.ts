import { FastifyReply, FastifyRequest } from "fastify";
import { PhotosServiceType } from "../../types";
import CraetePhotosService from "../../services/showcase-services/CreatePhotosService";

class CreatePhotosController {
  async handle(request: FastifyRequest, reply: FastifyReply) {
    const data = request.body as PhotosServiceType;

    const photosService = new CraetePhotosService();
    const photos = await photosService.execute(data);

    reply.send(photos);
  }
}

export default CreatePhotosController;
