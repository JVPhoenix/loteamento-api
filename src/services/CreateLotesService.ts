import prismaClient from "../prisma";
import { LoteServiceType } from "../types";

class CreateLotesService {
  async execute(props: LoteServiceType) {
    if (!props) {
      throw new Error("Selecione uma opção!");
    }

    const lotes = await prismaClient.lotes.create({
      data: {
        value: props.value,
        label: props.label,
        price: props.price,
        size: props.size,
        phase: props.phase,
        situation: props.situation,
      },
    });

    return lotes;
  }
}

export default CreateLotesService;
