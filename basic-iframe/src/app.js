import React from "react";
import ReactDOM from "react-dom";

import IFrame from "./IFrame";

const props = {
    width: "100%",
    height: "100%"
};
ReactDOM.render(<IFrame {...props} />, document.getElementById("app"));
