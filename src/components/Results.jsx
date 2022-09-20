import "./Results.css"
import axios from "axios"
import { useEffect, useState } from "react"

const Results = () => {
    const [apiData,setApiData] = useState({
            ip: <div class="lds-dual-ring"></div>,
            city: <div class="lds-dual-ring"></div>,
            region: <div class="lds-dual-ring"></div>,
            timezone: <div class="lds-dual-ring"></div>,
            isp: <div class="lds-dual-ring"></div>
    })
useEffect(()=> {
    axios.get("https://geo.ipify.org/api/v2/country,city?apiKey=at_RfKC13rCGRPknY70jhLVO4zQ4iuRT").then(resp => {
        console.log(resp.data)
        setApiData({
            ip: resp.data.ip,
            city: resp.data.location.city,
            region: resp.data.location.region,
            timezone: resp.data.location.timezone,
            isp: resp.data.isp
        })
    })
},[])

  return (
    <section className="results">
        <div className="ip-address">
            <small>IP ADDRESS</small>
            <h1>{apiData.ip} <span style={{opacity: "0"}}>yes</span></h1>
        </div>
        <div className="location">
            <small>LOCATION</small>
            <h1>{apiData.city}, {apiData.region}</h1>
        </div>
        <div className="timezone">
            <small>TIMEZONE</small>
            <h1>UTC {apiData.timezone}</h1>
        </div>
        <div className="isp">
            <small>ISP</small>
            <h1>{apiData.isp}</h1>
        </div>
    </section>
  )
}

export default Results