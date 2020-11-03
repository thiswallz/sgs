export interface IRol {
  Dashboards: string[];
  role: string;
  companyType: string;
  companyName: string;
  companyId: number;
}

export interface IUser {
  userId: number;
  userName: string;
  token: string;
  roles: IRol[];
}
