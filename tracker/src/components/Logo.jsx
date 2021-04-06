import { Link } from "react-router-dom";

export default function Logo(){

    const logoObject = require(`../img/logo/logo.png`);
    const logoURL = logoObject.default;
    return(
        <div className="App">
            <Link to="/">
            <img src={logoURL} alt="User"/>
            </Link>
        </div>
    );
}