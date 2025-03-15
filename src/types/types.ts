export interface LocationCardType {
  company: string;
  country: string;
  city: string;
  address: string;
  postalCode: string;
  phone: string;
  mail: string;
  mapSide?: "left" | "right";
  image: string;
}

export interface PortfolioCardType {
  title: string;
  description: string;
  image: string;
}
