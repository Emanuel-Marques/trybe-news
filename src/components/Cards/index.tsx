import { useContext } from "react";
import AppContext from "../../context/AppContext";

function Cards(){
    const { user } = useContext(AppContext);
    return(
        <div>
            <h1>{ user }</h1>
        </div>
    );
}

export default Cards;