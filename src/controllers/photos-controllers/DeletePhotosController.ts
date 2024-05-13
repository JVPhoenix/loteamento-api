import { FastifyReply, FastifyRequest } from "fastify";
import DeletePhotosService from "../../services/photos-services/DeletePhotosService";

class DeletePhotosController {
  async handle(request: FastifyRequest, reply: FastifyReply) {
    const data = request.body as { id: string };

    const photosService = new DeletePhotosService();
    const photos = await photosService.execute(data);

    reply.send(photos);
  }
}

export default DeletePhotosController;
