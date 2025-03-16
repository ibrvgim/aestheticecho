import Image from "../components/about/Image";
import CardContainer from "../components/global/CardContainer";
import CountriesCard from "../components/global/CountriesCard";
import Metadata from "../components/global/Metadata";
import SecondaryCardContainer from "../components/global/SecondaryCardContainer";
import useMetadata from "../hooks/useMetadata";

function About() {
  const [meta] = useMetadata();

  return (
    <section>
      <Metadata metadata={meta} />

      <CardContainer
        title="About us"
        description="Founded in 2010, we are a creative agency that produces lasting results for our clients. We’ve partnered with many startups, corporations, and nonprofits alike to craft designs that make real impact. We’re always looking forward to creating brands, products, and digital experiences that connect with our clients' audiences."
      >
        <Image
          source="image-about.webp"
          smallImage="image-about-small.webp"
          style="h-[25rem] w-[35rem]"
        />
      </CardContainer>

      <SecondaryCardContainer
        title="World - class talent"
        description="We are a crew of strategists, problem-solvers, and technologists. Every design is thoughtfully crafted from concept to launch, ensuring success in its given market. We are constantly updating our skills in a myriad of platforms./n Our team is multi-disciplinary and we are not merely interested in form — content and meaning are just as important. We give great importance to craftsmanship, service, and prompt delivery. Clients have always been impressed with our high-quality outcomes that encapsulates their brand’s story and mission."
      >
        <Image
          source="image-world-class-talent.webp"
          smallImage="image-world-class-talent-small.webp"
          style="h-[40rem] w-[35rem]"
        />
      </SecondaryCardContainer>

      <CountriesCard />

      <SecondaryCardContainer
        title="The real deal"
        description="As strategic partners in our clients’ businesses, we are ready to take on any challenge as our own. Solving real problems require empathy and collaboration, and we strive to bring a fresh perspective to every opportunity. We make design and technology more accessible and give you tools to measure success./n We are visual storytellers in appealing and captivating ways. By combining business and marketing strategies, we inspire audiences to take action and drive real results."
        imageSide="right"
      >
        <Image
          source="image-real-deal.webp"
          smallImage="image-real-deal-small.webp"
          style="h-[40rem] w-[35rem]"
        />
      </SecondaryCardContainer>
    </section>
  );
}

export default About;
