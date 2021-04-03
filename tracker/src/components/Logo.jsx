
export default function Logo(){

    const logoObject = require(`../img/logo/logo.png`);
    const logoURL = logoObject.default;
    return(
        <div className="App">
            <img src={logoURL} alt="User"/>
        </div>
    );
}