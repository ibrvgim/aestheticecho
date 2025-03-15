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
    <div className="bg-peach mb-40 rounded-xl bg-[url(/assets/shared/desktop/bg-pattern-call-to-action.svg)] bg-cover bg-right bg-no-repeat px-20 py-16 text-center text-white">
      <p className="pb-6 text-5xl font-medium tracking-wider">{title}</p>
      <p className="mx-auto w-1/3 tracking-wide">{description}</p>
    </div>
  );
}

export default TitleCard;
