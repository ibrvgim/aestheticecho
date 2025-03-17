function CardContainer({
  title,
  description,
  children,
}: {
  title: string;
  description: string;
  children: React.ReactNode;
}) {
  return (
    <div className="bg-peach flex flex-col-reverse items-center overflow-hidden rounded-xl bg-[url(/assets/contact/desktop/bg-pattern-hero-desktop.svg)] bg-left-bottom bg-no-repeat xl:flex-row xl:gap-20">
      <div className="flex-1 p-10 text-center text-gray-100 sm:p-12 lg:px-20 lg:py-14 xl:py-16 xl:pl-26 xl:text-left">
        <p className="mb-8 text-5xl font-medium">{title}</p>
        <p className="tracking-wide">{description}</p>
      </div>

      {children}
    </div>
  );
}

export default CardContainer;
