import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

// fix broken marker issue
import markerIcon from "leaflet/dist/images/marker-icon.png";
import markerShadow from "leaflet/dist/images/marker-shadow.png";

const customIcon = new L.Icon({
  iconUrl: markerIcon,
  shadowUrl: markerShadow,
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41],
});

function Map({
  address,
  position,
}: {
  address: string;
  position: [number, number];
}) {
  return (
    <MapContainer
      center={position}
      zoom={15}
      minZoom={5}
      maxZoom={18}
      attributionControl={false}
      className="h-full w-full rounded-xl lg:w-[30%]"
    >
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
      <Marker position={position} icon={customIcon}>
        <Popup>
          <div>
            <p>{address}</p>
            <a
              href={`https://www.google.com/maps?q=${address}`}
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "blue" }}
            >
              Google Maps
            </a>
          </div>
        </Popup>
      </Marker>
    </MapContainer>
  );
}

export default Map;
