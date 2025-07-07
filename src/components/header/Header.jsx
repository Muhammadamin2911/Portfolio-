import './Header.css'
import logo from "../../assets/image-removebg-preview.png"

const Header = () => {
  return (
    <div className='header'>
      <div className="Hlogo"><img src={logo} alt="" /></div>


      <div className="header_links">
        <ul>
          <li><a href="/">Page1</a></li>
          <li><a href="/">Page2</a></li>
          <li> <a href="/">Page3</a></li>
          <li><a href="/">Page4</a></li>
          </ul>
      </div>
    </div>
  )
}

export default Header
