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
    <div className="bg-peach flex items-center gap-32 overflow-hidden rounded-xl bg-[url(/assets/contact/desktop/bg-pattern-hero-desktop.svg)] bg-left-bottom bg-no-repeat">
      <div className="flex-1 py-16 pl-26 text-gray-100">
        <p className="mb-8 text-5xl font-medium">{title}</p>
        <p className="tracking-wide">{description}</p>
      </div>

      {children}
    </div>
  );
}

export default CardContainer;
