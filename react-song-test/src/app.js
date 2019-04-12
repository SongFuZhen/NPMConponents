import React from "react";
import ReactDOM from "react-dom";

import SongTest from "./songTest";

ReactDOM.render(
    <SongTest label="test">
        <span>你好吗</span>
    </SongTest>,
    document.getElementById("app")
);
