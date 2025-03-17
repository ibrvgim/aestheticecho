import locations from "../../data/locations";
import Button from "./Button";

function CountriesCard() {
  return (
    <div className="my-20 flex flex-col items-center justify-around gap-15 text-center sm:my-30 md:my-40 lg:flex-row">
      {locations.map((location) => (
        <div key={location.country}>
          <div className="mb-6 bg-[url(/assets/home/desktop/bg-pattern-hero-home.svg)] bg-cover bg-center bg-no-repeat lg:mb-10">
            <img
              src={`/assets/shared/desktop/${location.icon}`}
              alt="country symbols icon"
              draggable={false}
              loading="lazy"
            />
          </div>
          <p className="mb-6 text-lg font-semibold tracking-widest text-gray-700 uppercase">
            {location.country}
          </p>
          <Button style="primary" path="/locations">
            See Details
          </Button>
        </div>
      ))}
    </div>
  );
}

export default CountriesCard;
