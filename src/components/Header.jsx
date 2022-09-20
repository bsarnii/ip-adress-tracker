import "./Header.css"
import { getData } from "../getData"
import { ReactComponent as IconArrow} from "../images/icon-arrow.svg"

const Header = () => {
  const pushButton = (e) => {
    e.preventDefault()
    getData()
  }

  return (
    <header>
        <h1>IP Address Tracker</h1>
        <form>
          <input className="ip-input" type="text" placeholder="Search for any IP address or domain"/>
          <button onClick={pushButton}><IconArrow/></button>
        </form>
  </header>
  )
}

export default Header