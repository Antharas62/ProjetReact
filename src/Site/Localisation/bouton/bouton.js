import React from "react";

const bouton = (props) => {
    const btnCss = `btn btn-${props.type} mx-1`;
    return (
        <button className={btnCss} onClick={props.clic}>
            {props.children}
        </button>
    );
}

export default bouton;