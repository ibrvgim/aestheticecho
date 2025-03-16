import Metadata from "../components/global/Metadata";
import LocationCard from "../components/locations/LocationCard";
import locations from "../data/locations";
import useMetadata from "../hooks/useMetadata";

function Locations() {
  const [meta] = useMetadata();

  return (
    <section className="flex flex-col gap-8">
      <Metadata metadata={meta} />

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
