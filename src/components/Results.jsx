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
            <h1>{dataValue.ip}</h1>
            </div>
            <div className="location">
            <small>LOCATION</small>
            <h1>{dataValue.city}, {dataValue.region}</h1>
            </div>
            <div className="timezone">
            <small>TIMEZONE</small>
            <h1>UTC {dataValue.timezone}</h1>
            </div>
            <div className="isp">
            <small>ISP</small>
            <h1>{dataValue.isp}</h1>
            </div>
    </section>
    }
    </>
  )
}

export default Results