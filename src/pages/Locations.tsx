import LocationCard from "../components/locations/LocationCard";
import locations from "../data/locations";

function Locations() {
  return (
    <section className="flex flex-col gap-8">
      {locations.map((location, index) => (
        <LocationCard
          key={location.country}
          {...location}
          mapSide={(index + 1) % 2 === 0 ? "left" : "right"}
        />
      ))}
    </section>
  );
}

export default Locations;
