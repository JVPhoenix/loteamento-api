import prismaClient from "../../prisma";

interface UpdateClientsRequestServiceInterface {
  id: string;
  requestType: string;
  name: string;
  cpf: string;
  birth: string;
  address: string;
  phone: string;
  virtualContract: string;
  contractNumber: string;
  phase: number;
  lote: string;
  dimension: string;
  price: number;
  plan: number;
  startDate: string;
  paymentList: string[];
  standard: boolean;
  entrance?: number;
  obs?: string;
}

class UpdateClientsRequestService {
  async execute(props: UpdateClientsRequestServiceInterface) {
    if (!props) {
      throw new Error("Solicitação Inválida");
    }

    const findClient = await prismaClient.clientsRequest.findFirst({
      where: {
        id: props.id,
      },
    });

    if (!findClient) {
      throw new Error("Cliente não existe!");
    }

    const updateClient = await prismaClient.clientsRequest.update({
      where: {
        id: findClient.id,
      },
      data: {
        requestType: props.requestType,
        name: props.name,
        cpf: props.cpf,
        birth: props.birth,
        address: props.address,
        phone: props.phone,
        digitalContract: props.virtualContract,
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
    return updateClient;
  }
}

export default UpdateClientsRequestService;
