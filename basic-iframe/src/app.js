import React from "react";
import ReactDOM from "react-dom";

import IFrame from "./IFrame";

const props = {
    loadingProps: {
        width: "100%",
        height: "100%",
        color: "steelblue"
    },
    iframeProps: {
        width: "100%",
        height: "100%"
    }
};
ReactDOM.render(<IFrame {...props} />, document.getElementById("app"));
