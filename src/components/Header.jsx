import "./Header.css"
import { ReactComponent as IconArrow} from "../images/icon-arrow.svg"

const Header = () => {
  return (
    <header>
        <h1>IP Address Tracker</h1>
        <form>
          <input className="ip-input" type="text" placeholder="Search for any IP address or domain"/>
          <button onClick={(e)=> e.preventDefault()}><IconArrow/></button>
        </form>
  </header>
  )
}

export default Header