import { LocationCardType } from "../types/types";

const locations: LocationCardType[] = [
  {
    company: "aestheticecho GmbH",
    country: "Germany",
    city: "Berlin",
    address: "19 Schwartzkopffstraße",
    postalCode: "10115",
    phone: "+49 177 8355576",
    mail: "contact@aestheticecho.de",
    icon: "illustration-germany.svg",
    position: [52.5344968, 13.3790041],
  },

  {
    company: "aestheticecho USA Office",
    country: "United States",
    city: "New York",
    address: "60 Broadway",
    postalCode: "11249",
    phone: "+1 177 8355576",
    mail: "contact@aestheticecho.com",
    icon: "illustration-united-states.svg",
    position: [40.7105388, -73.9662286],
  },

  {
    company: "aestheticecho UK Office",
    country: "United Kingdom",
    city: "London",
    address: "23 Kings Way",
    postalCode: "WC2B 6UJ",
    phone: "+44 177 8355576",
    mail: "contact@aestheticecho.uk",
    icon: "illustration-united-kingdom.svg",
    position: [51.5139907, -0.1180743],
  },
];

export default locations;
