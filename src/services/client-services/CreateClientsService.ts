import prismaClient from "../../prisma";
import { ClientsServiceType } from "../../types";

class CreateClientsService {
  async execute(props: ClientsServiceType) {
    if (!props) {
      throw new Error("Opção não selecionada!");
    }

    const clients = await prismaClient.clients.create({
      data: {
        name: props.name,
        cpf: props.cpf,
        birth: props.birth,
        adress: props.adress,
        phone: props.phone,
        contractNumber: props.contractNumber,
        phase: props.phase,
        lote: props.lote,
        dimension: props.dimension,
        price: props.price,
        plan: props.plan,
        startDate: props.startDate,
        paymentList: props.paymentList,
        standard: props.standard,
      },
    });

    return clients;
  }
}

export default CreateClientsService;
