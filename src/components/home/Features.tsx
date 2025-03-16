import features from "../../data/features";

function Features() {
  return (
    <section className="mt-40">
      <ul className="flex justify-between gap-24">
        {features.map((feature) => (
          <li
            key={feature.title}
            className="flex flex-col items-center justify-center gap-5 text-center"
          >
            <div className="bg-[url(/assets/home/desktop/bg-pattern-hero-home.svg)] bg-cover bg-center bg-no-repeat">
              <img
                className="h-full w-full"
                src={`/assets/home/desktop/${feature.image}`}
                alt={`${feature.title.toLowerCase()} feature image`}
                draggable={false}
              />
            </div>

            <p className="text-lg font-semibold tracking-widest text-gray-700 uppercase">
              {feature.title}
            </p>
            <p className="leading-relaxed tracking-wide text-gray-600">
              {feature.description}
            </p>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default Features;
