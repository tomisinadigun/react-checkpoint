import React from "react";


const Button = ({children, btnClass}) => {
    const btnStyle = {
        border:"none",
    }
    return (
        <>
            <div className="row mt-5">
                <div className="col-lg-4">
                    <button style={btnStyle}  className={btnClass}>{children}</button>
                </div>
            </div>
        </>
    )
}

export default Button;