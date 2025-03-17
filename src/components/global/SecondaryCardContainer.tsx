function SecondaryCardContainer({
  title,
  description,
  children,
  imageSide = "left",
}: {
  title: string;
  description: string;
  children: React.ReactNode;
  imageSide?: "left" | "right";
}) {
  const descriptions = description.split("/n");
  const checkSide = (value: string) => imageSide === value;

  return (
    <div
      className={`bg-lighter-peach mt-40 flex items-center overflow-hidden rounded-xl bg-[url(/assets/shared/desktop/bg-pattern-three-circles.svg)] bg-no-repeat xl:flex-row ${checkSide("left") ? "flex-col bg-right" : "flex-col-reverse bg-left"}`}
    >
      {checkSide("left") && children}

      <div className="flex-1 p-10 text-center text-gray-100 sm:p-12 lg:px-20 lg:py-14 xl:py-16 xl:pl-26 xl:text-left">
        <p className="text-peach mb-8 text-5xl font-medium">{title}</p>
        {descriptions.map((description, index) => (
          <p key={index} className="my-4 tracking-wide text-gray-700">
            {description.trim()}
          </p>
        ))}
      </div>

      {checkSide("right") && children}
    </div>
  );
}

export default SecondaryCardContainer;
