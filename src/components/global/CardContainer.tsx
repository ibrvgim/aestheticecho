function CardContainer({
  title,
  description,
  children,
  colReverse = false,
}: {
  title: string;
  description: string;
  children: React.ReactNode;
  colReverse?: boolean;
}) {
  return (
    <div
      className={`bg-peach flex items-center overflow-hidden rounded-xl bg-[url(/assets/contact/desktop/bg-pattern-hero-desktop.svg)] bg-left-bottom bg-no-repeat xl:flex-row xl:gap-20 ${colReverse ? "flex-col-reverse" : "flex-col"}`}
    >
      <div className="flex-1 text-center text-gray-100 max-xl:p-12 lg:py-14 xl:py-16 xl:pl-26 xl:text-left">
        <p className="mb-6 text-4xl font-medium sm:mb-8 sm:text-5xl">{title}</p>
        <p className="tracking-wide">{description}</p>
      </div>

      {children}
    </div>
  );
}

export default CardContainer;
