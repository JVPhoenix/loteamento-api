import { FastifyReply, FastifyRequest } from "fastify";
import GetPhotosService from "../../services/photos-services/GetPhotosService";

class GetPhotosController {
  async handle(request: FastifyRequest, reply: FastifyReply) {
    const photosService = new GetPhotosService();

    const photos = await photosService.execute();

    reply.send(photos);
  }
}

export default GetPhotosController;
