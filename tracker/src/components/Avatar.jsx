

export default function Avatar(){

    const avatarObject = require(`../img/avatar/avatar.jpeg`);
    const avatarURL = avatarObject.default;
    return(
        <div className="avatar">
            <img src={avatarURL} alt="User"/>
        </div>
    );
}