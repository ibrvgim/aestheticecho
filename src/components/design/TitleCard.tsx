import designs from "../../data/designs";

interface TitleType {
  path: string;
  title: string;
  description: string;
}

function TitleCard({ url }: { url: string }) {
  const { title, description } = designs.find((design: TitleType) =>
    url.includes(design.path),
  ) as TitleType;

  return (
    <div className="bg-peach mb-20 rounded-xl bg-[url(/assets/shared/desktop/bg-pattern-call-to-action.svg)] bg-cover bg-right bg-no-repeat px-8 py-16 text-center text-white sm:mb-30 sm:px-16 md:mb-40">
      <p className="pb-6 text-4xl font-medium tracking-wider sm:text-5xl">
        {title}
      </p>
      <p className="mx-auto tracking-wide lg:w-1/2">{description}</p>
    </div>
  );
}

export default TitleCard;
