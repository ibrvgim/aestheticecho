import { Link } from "react-router";
import designs from "../../data/designs";
import { ChevronRightIcon } from "@heroicons/react/16/solid";

function DesignsRecommendation({ url }: { url: string }) {
  return (
    <section className="mt-20 grid h-96 grid-cols-1 gap-6 sm:mt-30 md:mt-40 lg:h-60 lg:grid-cols-2 xl:h-80">
      {designs
        .filter((design) => design.path !== url)
        .map((design) => (
          <div
            key={design.title}
            className={`relative h-full w-full overflow-hidden rounded-xl bg-cover bg-center bg-no-repeat text-white`}
            style={{
              backgroundImage: `url(/assets/home/desktop/${design.image})`,
            }}
          >
            <div className="hover:bg-peach/80 absolute inset-0 flex flex-col items-center justify-center gap-5 bg-black/60 text-center uppercase transition-all duration-500 xl:gap-7">
              <p className="text-4xl font-semibold tracking-wider max-sm:px-8 xl:text-5xl">
                {design.title}
              </p>
              <Link
                to={`/design?type=${design.path}`}
                className="group flex items-center gap-1 text-xs font-medium tracking-[0.15em] xl:text-sm"
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

export default DesignsRecommendation;
