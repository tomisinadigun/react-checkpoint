import React from "react";
import "../App.css"

const Form = ({children}) => {
    return (
        <>
            <form action="">
                {children}
            </form>
        </>
    )
}


export default Form;