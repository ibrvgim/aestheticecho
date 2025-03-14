import LocationCard from "../components/locations/LocationCard";
import locations from "../data/locations";

function Locations() {
  return (
    <section className="mt-16 flex flex-col gap-8">
      {locations.map((location, index) => (
        <LocationCard
          {...location}
          mapSide={(index + 1) % 2 === 0 ? "left" : "right"}
        />
      ))}
    </section>
  );
}

export default Locations;
