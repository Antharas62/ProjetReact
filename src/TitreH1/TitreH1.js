import React from "react";
import classes from "./TitreH1.css";

function TitreH1(props){
    const classeCss = `${classes.title} border border-dark bg-primary p-2 rounded text-white`;
    return(
        <h1 className={classeCss}>{props.children}</h1>
    );
}

export default TitreH1;