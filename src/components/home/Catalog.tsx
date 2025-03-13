import { ChevronRightIcon } from "@heroicons/react/16/solid";
import { Link } from "react-router";
import designs from "../../data/designsCatalog";

function Catalog() {
  return (
    <section className="my-40 grid h-[40rem] grid-cols-2 grid-rows-2 gap-6">
      {designs.map((design) => (
        <div
          key={design.title}
          className={`relative ${design.title === "Web Design" ? "row-span-2" : ""} overflow-hidden rounded-xl bg-cover bg-center bg-no-repeat text-white`}
          style={{
            backgroundImage: `url(./assets/home/desktop/${design.image})`,
          }}
        >
          <div className="hover:bg-peach/80 absolute inset-0 flex flex-col items-center justify-center gap-7 bg-black/60 text-center uppercase transition-all duration-300">
            <p className="text-5xl font-semibold tracking-wider">
              {design.title}
            </p>
            <Link
              to={design.path}
              className="group flex items-center gap-1 text-sm font-medium tracking-[0.15em]"
            >
              View Projects
              <ChevronRightIcon className="group-hover:text-light-peach size-5 transition-colors" />
            </Link>
          </div>
        </div>
      ))}
    </section>
  );
}

export default Catalog;
