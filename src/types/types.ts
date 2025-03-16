export interface LocationCardType {
  company: string;
  country: string;
  city: string;
  address: string;
  postalCode: string;
  phone: string;
  mail: string;
  mapSide?: "left" | "right";
  icon: string;
  position: [number, number];
}

export interface PortfolioCardType {
  title: string;
  description: string;
  image: string;
}

// metadata types
export interface MetadataType {
  path: string;
  title: string;
  meta: MetaItemType[];
}

export interface MetaItemType {
  name: string;
  content: string;
}

export interface InputsType {
  fullName: string;
  email: string;
  phone: string;
  message: string;
}
