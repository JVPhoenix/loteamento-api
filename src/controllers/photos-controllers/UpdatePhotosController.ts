import { FastifyReply, FastifyRequest } from "fastify";
import { PhotosServiceType } from "../../types";
import UpdatePhotosService from "../../services/photos-services/UpdatePhotosService";

class UpdatePhotosController {
  async handle(request: FastifyRequest, reply: FastifyReply) {
    const data = request.body as { id: string };

    const photosService = new UpdatePhotosService();
    const photos = await photosService.execute(data as PhotosServiceType);

    reply.send(photos);
  }
}

export default UpdatePhotosController;
