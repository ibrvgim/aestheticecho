import locations from "../../data/locations";
import Button from "./Button";

function CountriesCard() {
  return (
    <div className="my-36 flex items-center justify-evenly text-center">
      {locations.map((location) => (
        <div key={location.country}>
          <div className="mb-10 bg-[url(./assets/home/desktop/bg-pattern-hero-home.svg)] bg-cover bg-center bg-no-repeat">
            <img
              src={`./assets/shared/desktop/${location.icon}`}
              alt="country symbols icon"
              draggable={false}
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
