export type LoteServiceType = {
  id: string;
  value: number;
  label: string;
  price: number;
  size: string;
  phase: number;
  situation: string;
  reservedBy?: string;
  reservedFor?: string;
  reservedForContact?: string;
  reservedDate?: string;
};

export type ClientsServiceType = {
  id: string;
  name: string;
  cpf: string;
  birth: string;
  adress: string;
  phone: string;
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
};

export type PhotosServiceType = {
  id: string;
  url: string;
  type: string;
  phase: number;
  width?: number;
  height?: number;
};
