import "./Header.css"
import { ReactComponent as IconArrow} from "../images/icon-arrow.svg"
import { useRef } from "react"
import axios from "axios"

const Header = ({dataFromApp}) => {
  const inputRef = useRef(null)
  const pushButton = (e) => {
    e.preventDefault()
    const config = {
      method: "get",
      url: `https://geo.ipify.org/api/v2/country,city?apiKey=at_RfKC13rCGRPknY70jhLVO4zQ4iuRT`,
      params: {
        ipAddress: inputRef.current.value,
        domain: inputRef.current.value
      }
    }
    axios.request(config).then(resp => {
      dataFromApp(resp.data)
    }).catch((error)=> dataFromApp({error:true}))
  }

  return (
    <header>
        <h1>IP Address Tracker</h1>
        <form>
          <input ref={inputRef} className="ip-input" type="text" placeholder="Search for any IP address or domain"/>
          <button onClick={pushButton}><IconArrow/></button>
        </form>
  </header>
  )
}

export default Header