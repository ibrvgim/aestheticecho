import features from "../../data/features";

function Features() {
  return (
    <section className="mt-20 sm:mt-30 md:mt-40">
      <ul className="flex flex-col justify-around gap-16 lg:flex-row">
        {features.map((feature) => (
          <li
            key={feature.title}
            className="flex flex-col items-center gap-4 text-center md:flex-row md:gap-13 md:text-left lg:flex-col lg:justify-center lg:gap-5 lg:text-center"
          >
            <div className="bg-[url(/assets/home/desktop/bg-pattern-hero-home.svg)] bg-cover bg-center bg-no-repeat">
              <img
                className="h-full w-full"
                src={`/assets/home/desktop/${feature.image}`}
                alt={`${feature.title.toLowerCase()} feature image`}
                draggable={false}
              />
            </div>

            <div className="md:w-2/3 lg:w-full">
              <p className="mb-3 text-lg font-semibold tracking-widest text-gray-600 uppercase md:text-gray-700">
                {feature.title}
              </p>
              <p className="leading-relaxed tracking-wide text-gray-500 md:text-gray-600">
                {feature.description}
              </p>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default Features;
