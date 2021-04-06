

import { Link } from "react-router-dom";

import Avatar from "./Avatar";

export default function Footer(){

    return(
        <div className="avatar">
            <Link to="/">
                <Avatar />
            </Link>
        </div>
    );
}