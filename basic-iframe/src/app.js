import React from "react";
import ReactDOM from "react-dom";

import IFrame from "./IFrame";

const props = {
    loading: true,

    width: "100%",
    height: 1000,
    src: "https://www.bing.com"
};

ReactDOM.render(<IFrame {...props} />, document.getElementById("app"));
