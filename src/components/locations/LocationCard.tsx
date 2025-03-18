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
  const isLeft = mapSide === "left";

  return (
    <div
      className={`flex h-[35rem] w-full gap-8 lg:h-80 lg:flex-row ${isLeft ? "flex-col" : "flex-col-reverse"}`}
    >
      {isLeft && map}

      <div className="bg-lighter-peach flex flex-1 flex-col justify-center gap-5 rounded-xl bg-[url(/assets/shared/desktop/bg-pattern-two-circles.svg)] bg-center bg-no-repeat px-12 py-12 md:px-16 lg:px-24">
        <p className="text-peach text-center text-3xl font-semibold sm:text-left sm:text-4xl">
          {country}
        </p>

        <ul className="flex flex-col gap-10 text-center max-lg:justify-between sm:flex-row sm:text-left lg:gap-36">
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

      {!isLeft && map}
    </div>
  );
}

export default LocationCard;
