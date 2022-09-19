import "./Results.css"

const Results = () => {
  return (
    <section className="results">
        <div className="ip-address">
            <small>IP ADDRESS</small>
            <h1>122.544.779.101 <span style={{opacity: "0"}}>yes</span></h1>
        </div>
        <div className="location">
            <small>LOCATION</small>
            <h1>Weimar, Thüringen</h1>
        </div>
        <div className="timezone">
            <small>TIMEZONE</small>
            <h1>UTC -05:00</h1>
        </div>
        <div className="isp">
            <small>ISP</small>
            <h1>SpaceX Starlink</h1>
        </div>
    </section>
  )
}

export default Results