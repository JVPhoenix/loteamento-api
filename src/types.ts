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
};

export type PhotosServiceType = {
  id: string;
  value: number;
  url: string;
  type: string;
  phase: number;
  width?: number;
  height?: number;
};

export type ClientsRequestServiceType = {
  id: string;
  requestType: string;
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
};
