import "./Results.css"
import { useContext } from "react"
import DataContext from "../context/DataContext"

const Results = () => {
    const dataValue= useContext(DataContext)

  return (
    <>
    {dataValue.display === false ? "" : 
    <section className="results">
        <div className="ip-address">
            <small>IP ADDRESS</small>
            <h2>{dataValue.ip}</h2>
            </div>
            <div className="location">
            <small>LOCATION</small>
            <h2>{dataValue.city}, {dataValue.region}</h2>
            </div>
            <div className="timezone">
            <small>TIMEZONE</small>
            <h2>UTC {dataValue.timezone}</h2>
            </div>
            <div className="isp">
            <small>ISP</small>
            <h2>{dataValue.isp}</h2>
            </div>
    </section>
    }
    </>
  )
}

export default Results