import prismaClient from "../../prisma";
import { ClientsRequestServiceType } from "../../types";

class CreateClientsRequestService {
  async execute(props: ClientsRequestServiceType) {
    if (!props) {
      throw new Error("Opção não selecionada!");
    }

    const clients = await prismaClient.clientsRequest.create({
      data: {
        requestType: props.requestType,
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
        status: props.status,
      },
    });

    return clients;
  }
}

export default CreateClientsRequestService;
