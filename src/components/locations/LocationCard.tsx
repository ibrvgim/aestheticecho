import { LocationCardType } from "../../types/types";
import Map from "./Map";

function LocationCard({
  company,
  country,
  city,
  address,
  postalCode,
  phone,
  mail,
  mapSide = "right",
  position,
}: LocationCardType) {
  const map = (
    <Map address={`${postalCode} ${city}, ${address}`} position={position} />
  );

  return (
    <div className="flex h-80 gap-8">
      {mapSide === "left" && map}

      <div className="bg-lighter-peach flex flex-1 flex-col justify-center gap-5 rounded-xl bg-[url(/assets/shared/desktop/bg-pattern-two-circles.svg)] bg-center bg-no-repeat px-24">
        <p className="text-peach text-4xl font-semibold">{country}</p>

        <ul className="flex gap-36">
          <li>
            <p className="mb-1 font-bold text-gray-700">{company} </p>
            <p className="text-gray-600">{address}</p>
            <p className="text-gray-600">{`${postalCode} ${city}`}</p>
          </li>

          <li>
            <p className="mb-1 font-bold text-gray-700">Contacts</p>
            <p className="text-gray-600">Phone: {phone}</p>
            <p className="text-gray-600">Mail: {mail}</p>
          </li>
        </ul>
      </div>

      {mapSide === "right" && map}
    </div>
  );
}

export default LocationCard;
