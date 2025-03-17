import { ChevronRightIcon } from "@heroicons/react/16/solid";
import { Link } from "react-router";
import designs from "../../data/designs";

function Catalog() {
  return (
    <section className="mt-20 grid h-[40rem] grid-cols-1 gap-6 sm:mt-30 md:mt-40 md:grid-cols-2">
      {designs.map((design) => (
        <div
          key={design.title}
          className={`relative ${design.title === "Web Design" ? "md:row-span-2" : ""} overflow-hidden rounded-xl bg-cover bg-center bg-no-repeat text-white`}
          style={{
            backgroundImage: `url(/assets/home/desktop/${design.image})`,
          }}
        >
          <div className="hover:bg-peach/80 absolute inset-0 flex flex-col items-center justify-center gap-4 bg-black/60 text-center uppercase transition-all duration-500 md:gap-5">
            <p className="px-6 text-2xl leading-tight font-semibold tracking-wider sm:text-3xl md:text-4xl lg:text-5xl">
              {design.title}
            </p>
            <Link
              to={`/design?type=${design.path}`}
              className="group flex items-center gap-1 text-xs font-medium tracking-[0.15em] lg:text-sm"
            >
              View Projects
              <ChevronRightIcon className="group-hover:text-light-peach size-4 transition-colors md:size-5" />
            </Link>
          </div>
        </div>
      ))}
    </section>
  );
}

export default Catalog;
