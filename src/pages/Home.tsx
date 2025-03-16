import Metadata from "../components/global/Metadata";
import AwardCard from "../components/home/AwardCard";
import Catalog from "../components/home/Catalog";
import Features from "../components/home/Features";
import useMetadata from "../hooks/useMetadata";

function Home() {
  const [meta] = useMetadata();

  return (
    <div>
      <Metadata metadata={meta} />
      <AwardCard />
      <Catalog />
      <Features />
    </div>
  );
}

export default Home;
