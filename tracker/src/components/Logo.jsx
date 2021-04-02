export default function Logo(){
    const logoObj = require(`../img/logo/logo.png`);
    const logoURL = logoObj.default;
    return(
        <div className="App">
            <img src={logoURL} alt="Logo"/>
        </div>
    );
}