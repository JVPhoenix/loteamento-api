import prismaClient from "../../prisma";

interface UpdateClientsServiceInterface {
  id: string;
  name: string;
  cpf: string;
  birth: string;
  address: string;
  phone: string;
  digitalContract: string;
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
  status: boolean;
}

class UpdateClientsService {
  async execute(props: UpdateClientsServiceInterface) {
    if (!props) {
      throw new Error("Solicitação Inválida");
    }

    const findClient = await prismaClient.clients.findFirst({
      where: {
        id: props.id,
      },
    });

    if (!findClient) {
      throw new Error("Cliente não existe!");
    }

    const updateClient = await prismaClient.clients.update({
      where: {
        id: findClient.id,
      },
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
        status: props.status,
      },
    });
    return updateClient;
  }
}

export default UpdateClientsService;
