import { PortfolioCardType } from "../../types/types";

function DesignLayout({ works }: { works: PortfolioCardType[] }) {
  return (
    <section className="grid grid-cols-1 gap-10 md:grid-cols-2 xl:grid-cols-3">
      {works.map((work) => (
        <DesignCard key={work.title} work={work} />
      ))}
    </section>
  );
}

function DesignCard({ work }: { work: PortfolioCardType }) {
  return (
    <div className="bg-lighter-peach group overflow-hidden rounded-xl text-center shadow-sm sm:flex md:block">
      <img
        src={work.image}
        alt={work.title}
        draggable={false}
        className="sm:w-7h-72 sm:h-72 md:h-auto md:w-auto"
      />

      <div className="group-hover:bg-peach h-full px-4 transition-all duration-700 max-sm:py-8 sm:flex sm:items-center sm:justify-center md:block md:px-10 md:py-8">
        <div>
          <p className="text-peach mb-3 text-lg font-medium tracking-widest uppercase transition-all duration-1000 group-hover:text-white">
            {work.title}
          </p>
          <p className="flex-1 tracking-wide text-gray-700 transition-all duration-1000 group-hover:text-white">
            {work.description}
          </p>
        </div>
      </div>
    </div>
  );
}

export default DesignLayout;
