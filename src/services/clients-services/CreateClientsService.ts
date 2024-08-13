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
        address: props.address,
        phone: props.phone,
        digitalContract: props.digitalContract,
        contractNumber: props.contractNumber,
        phase: props.phase,
        lote: props.lote,
        dimension: props.dimension,
        price: props.price,
        plan: props.plan,
        startDate: props.startDate,
        paymentList: props.paymentList,
        standard: props.standard,
        entrance: props.entrance,
        obs: props.obs,
      },
    });

    return clients;
  }
}

export default CreateClientsService;
