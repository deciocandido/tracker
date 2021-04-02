import { Link, useHistory } from "react-router-dom";

export default function Footer(){

    const history = useHistory();

    function goBack(event){
        history.push(`/`);
    }
    return(
        <div className="App">
            <Link to="/">
                Going back now
            </Link>
        </div>
    );
}