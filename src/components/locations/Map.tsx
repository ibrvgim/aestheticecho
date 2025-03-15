import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";

function Map({
  address,
  position = [40.7128, -74.006],
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
      style={{ height: "100%", width: "30%" }}
      attributionControl={false}
    >
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
      <Marker position={position}>
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
