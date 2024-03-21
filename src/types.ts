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
  reservedDate?: Date;
};

export enum LotesStatus {
  Free = "livre",
  Blocked = "bloqueado",
}
