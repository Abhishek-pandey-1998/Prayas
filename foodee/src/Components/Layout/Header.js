import logo from "../../logos/1000_F_583191966_fKKJDVNthlwygiNsFmXH8RwatizruUmN.jpg";
import "./Header.css";
import HeaderCartButton from '../Cart/HeaderCartButton.js';
import DescriptionCard from '../Layout/DescriptionCard';

function Header(props){
    return(
        <>
            <header className="header">
                <h1>Foodee</h1>
                <HeaderCartButton onClick={props.onShow}/>
            </header>
            <div className="main-image">
                <img src={logo} alt="HeaderImage"></img>
            </div>
            <DescriptionCard />
        </>
    );
}

export default Header;