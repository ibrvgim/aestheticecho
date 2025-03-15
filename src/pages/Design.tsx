import { useSearchParams } from "react-router";
import TitleCard from "../components/design/TitleCard";
import DesignsRecommendation from "../components/design/DesignsRecommendation";
import DesignLayout from "../components/design/DesignLayout";
import { PortfolioCardType } from "../types/types";
import portfolios from "../data/portfolios";

function Design() {
  const [searchParams] = useSearchParams();
  const type = (searchParams.get("type") || "web") as string;

  const { works } = portfolios.find(
    (portfolio) => portfolio.design === type,
  ) as {
    works: PortfolioCardType[];
  };

  return (
    <div>
      <TitleCard url={type} />
      <DesignLayout works={works} />
      <DesignsRecommendation url={type} />
    </div>
  );
}

export default Design;
