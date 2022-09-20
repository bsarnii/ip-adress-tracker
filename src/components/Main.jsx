import "./Main.css"
import Results from "./Results";
import Leaflet from "leaflet";
import iconUrl from "../images/icon-location.svg";
import { MapContainer, Marker, TileLayer } from "react-leaflet";

const Main = () => {
  const newicon = new Leaflet.Icon({
    iconUrl,
    iconSize: [46,56]
  })

  return (
    <main>
        <Results />
            <MapContainer style={{height: "100%", width: "100%"}}
              center={[50.11552,8.68417]} zoom={13} scrollWheelZoom={false}>
              <TileLayer attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"/>
              <Marker icon={newicon} position={[50.11552,8.68417]}>
              </Marker>
            </MapContainer>
    </main>
  )
}

export default Main