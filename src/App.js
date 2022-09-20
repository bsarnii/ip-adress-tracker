import Header from './components/Header';
import Main from './components/Main';
import './App.css';
import DataContext from './context/DataContext';
import axios from 'axios';
import { useState, useEffect } from 'react';

function App() {
const callback = (childData) => {
   setApiDataa({
          display: true,
          ip: childData.ip,
          city: childData.location.city,
          region: childData.location.region,
          timezone: childData.location.timezone,
          isp: childData.isp,
          lat: childData.location.lat,
          lng: childData.location.lng
   })
}
const [apiDataa, setApiDataa]=useState({display: false});

useEffect(()=> {
  axios.get("https://geo.ipify.org/api/v2/country,city?apiKey=at_RfKC13rCGRPknY70jhLVO4zQ4iuRT").then(resp => {
      console.log(resp.data)
      setApiDataa({
          display: true,
          ip: resp.data.ip,
          city: resp.data.location.city,
          region: resp.data.location.region,
          timezone: resp.data.location.timezone,
          isp: resp.data.isp,
          lat: resp.data.location.lat,
          lng: resp.data.location.lng
      })
  })
},[])
  return (
    <div className="App">
      <DataContext.Provider value={apiDataa}>
        <Header dataFromApp={callback} />
        <Main />
      </DataContext.Provider>
    </div>
  );
}

export default App;
