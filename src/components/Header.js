import "../App.css"
import React from "react";

const Header = ({hClass}) => {
    return(
        <div>
            <h1 className={hClass} id="header">Forms.com</h1>
        </div>
    )
}


export default Header;