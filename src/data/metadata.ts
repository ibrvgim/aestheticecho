import { MetadataType } from "../types/types";

const titlePart = "| aestheticecho";

const metadata: MetadataType[] = [
  {
    path: "/",
    title: "",
    meta: [
      {
        name: "description",
        content: "Custom designs and digital branding solutions",
      },
      {
        name: "keywords",
        content:
          "creative agency, web design, UX/UI design, branding, graphic design, digital marketing, mobile app design, startup solutions, user experience, aestheticecho",
      },
    ],
  },

  {
    path: "/about-us",
    title: `About Us ${titlePart}`,
    meta: [
      {
        name: "description",
        content:
          "Learn more about aestheticecho, a creative agency founded in 2010. We specialize in web design, branding, and digital experiences that drive success.",
      },
      {
        name: "keywords",
        content:
          "creative agency, branding, digital strategy, web design, graphic design, marketing solutions, aestheticecho",
      },
    ],
  },

  {
    path: "/locations",
    title: `Locations ${titlePart}`,
    meta: [
      {
        name: "description",
        content:
          "Find aestheticecho’s creative hubs in three prime locations where we bring brands and ideas to life.",
      },
      {
        name: "keywords",
        content:
          "studio locations, creative spaces, digital agency offices, aestheticecho locations, workspaces",
      },
    ],
  },

  {
    path: "/contact",
    title: `Contacts ${titlePart}`,
    meta: [
      {
        name: "description",
        content:
          "Get in touch with aestheticecho. Let's collaborate on your next creative project. Reach out for inquiries, consultations, or partnerships.",
      },
      {
        name: "keywords",
        content:
          "contact aestheticecho, agency inquiries, creative collaboration, consultation, design services, project discussion",
      },
    ],
  },

  {
    path: "/design",
    title: `Designs ${titlePart}`,
    meta: [
      {
        name: "description",
        content:
          "Explore aestheticecho’s portfolio of innovative web, mobile, and graphic designs. We craft memorable brand experiences with creativity and precision.",
      },
      {
        name: "keywords",
        content:
          "web design, UX/UI design, mobile design, graphic design, brand identity, creative portfolio, aestheticecho designs",
      },
    ],
  },
];

export default metadata;
