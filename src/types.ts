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
  reservedDate?: Date;
};
