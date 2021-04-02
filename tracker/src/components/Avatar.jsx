export default function Avatar(){
    const avatarObj = require(`../img/avatar/avatar.jpeg`);
    const avatarURL = avatarObj.default;
    return(
        <div className="App">
            <img src={avatarURL} alt="User"/>
        </div>
    );
}