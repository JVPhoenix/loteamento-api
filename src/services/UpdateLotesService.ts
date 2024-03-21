import prismaClient from "../prisma";

interface UpdateLotesServiceInterface {
  id: string;
  value: number;
  label: string;
  price: number;
  size: string;
  phase: number;
  situation: string;
  reservedBy?: string;
  reservedFor?: string;
  reservedDate?: Date;
}

class UpdateLotesService {
  async execute(props: UpdateLotesServiceInterface) {
    if (!props.id) {
      throw new Error("Solicitação Inválida");
    }

    const findLote = await prismaClient.lotes.findFirst({
      where: {
        id: props.id,
      },
    });

    if (!findLote) {
      throw new Error("Cliente não existe!");
    }

    const updatedLote = await prismaClient.lotes.update({
      where: {
        id: findLote.id,
      },
      data: {
        value: props.value,
        label: props.label,
        price: props.price,
        size: props.size,
        phase: props.phase,
        situation: props.situation,
        reservedBy: props.reservedBy,
        reservedFor: props.reservedFor,
        reservedDate: props.reservedDate,
      },
    });
    return updatedLote;
  }
}

export default UpdateLotesService;
