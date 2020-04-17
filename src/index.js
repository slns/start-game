import React from "react";
import ReactDom from "react-dom";

import App from './components/App';

import "./index.scss"

let ReactDefault = () => {
    return (
       <App />
    )
}

ReactDom.render(
    <ReactDefault />,
    document.getElementById("root")
);