import logo from '../logos/Untitled.png'
import './Header.css';


function Header() {
    return(
        <header className='Appheader'>
            <img src={logo} className='App-logo' alt='Logo'></img>
            <div>Investment Calculator</div>
        </header>
    );
}

export default Header;