export interface IAssetLink {
  base: string;
  previous: string;
  next: string;
  href: string;
}

export interface ICompanyAsset {
  size: number;
  items: string[];
  links: IAssetLink;
  start: number;
  limit: number;
}
