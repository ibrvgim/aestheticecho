import { Link } from "react-router";
import designs from "../../data/designs";
import { ChevronRightIcon } from "@heroicons/react/16/solid";

function DesignsRecommendation({ url }: { url: string }) {
  return (
    <section className="mt-40 grid h-80 grid-cols-2 gap-6">
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
            <div className="hover:bg-peach/80 absolute inset-0 flex flex-col items-center justify-center gap-7 bg-black/60 text-center uppercase transition-all duration-500">
              <p className="text-5xl font-semibold tracking-wider">
                {design.title}
              </p>
              <Link
                to={`/design?type=${design.path}`}
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

export default DesignsRecommendation;
