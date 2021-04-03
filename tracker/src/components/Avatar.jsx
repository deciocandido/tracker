

export default function Avatar(){

    const avatarObject = require(`../img/avatar/avatar.jpeg`);
    const avatarURL = avatarObject.default;
    return(
        <div className="App">
            <img src={avatarURL} alt="User"/>
        </div>
    );
}