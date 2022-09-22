import "./Main.css"
import react,{ useContext } from "react";
import Results from "./Results";
import Leaflet from "leaflet";
import iconUrl from "../images/icon-location.svg";
import { MapContainer, Marker, TileLayer, useMap } from "react-leaflet";
import DataContext from "../context/DataContext";
import {ReactComponent as ErrorSvg} from "../images/error-symbol.svg";


const ChangeView = () =>{
  const dataValue= useContext(DataContext)
  const map = useMap();
  map.setView([dataValue.lat,dataValue.lng])
  return null
}

const Main = () => {
  const dataValue= useContext(DataContext)

  const newicon = new Leaflet.Icon({
    iconUrl,
    iconSize: [46,56]
  })
  return (
    <main>
        <Results />
            {dataValue.display=== false ?  
            <div>
              <div className="lds-dual-ring-big ring-center"></div>
            </div>  
            : dataValue.error === true ?
            <div style={{width: "100%", height: "100%", backgroundColor: "var(--color-black)"}}>
              <ErrorSvg className="error-svg"/>
            </div>  
            :
            <MapContainer style={{height: "100%", width: "100%"}}
              center={[dataValue.lat, dataValue.lng]} zoom={13} scrollWheelZoom={false}>
              <ChangeView/>
              <TileLayer attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"/>
              <Marker icon={newicon} position={[dataValue.lat,dataValue.lng]}>
              </Marker>
            </MapContainer>
            }
    </main>
  )
}

export default Main