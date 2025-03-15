import { PortfolioCardType } from "../../types/types";

function DesignLayout({ works }: { works: PortfolioCardType[] }) {
  return (
    <section className="grid grid-cols-3 gap-10">
      {works.map((work) => (
        <DesignCard key={work.title} work={work} />
      ))}
    </section>
  );
}

function DesignCard({ work }: { work: PortfolioCardType }) {
  return (
    <div className="bg-lighter-peach group overflow-hidden rounded-xl text-center shadow-sm">
      <img src={work.image} alt={work.title} />

      <div className="group-hover:bg-peach h-full px-10 py-8 transition-all duration-700">
        <p className="text-peach mb-3 text-lg font-medium tracking-widest uppercase transition-all duration-1000 group-hover:text-white">
          {work.title}
        </p>
        <p className="tracking-wide text-gray-700 transition-all duration-1000 group-hover:text-white">
          {work.description}
        </p>
      </div>
    </div>
  );
}

export default DesignLayout;
