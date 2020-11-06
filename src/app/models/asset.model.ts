export interface IAsset {
  serial: string;
  name: string;
  location: any;
  description: string;
  parentModelId: string;
  id: number;
  companyRef: string;
  status: number;
  customer: string;
  subscribed: boolean;
  createdAt: number;
  manufacturer: string;
  href: string;
  recommendations: boolean;
}
