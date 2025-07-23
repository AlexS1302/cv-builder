import '../styles/Header.css';
import HeaderIcon from '../assets/icons/logo.svg';

function Header() {
  return (
    <div className="Header">
      <img src={HeaderIcon} alt="logo" className='logo'></img>
      <h1 className="app-name">CV Builder</h1>
    </div>
  )
}

export default Header