import React, { Component } from "react";

import SongTest from "react-song-test";
import { getCurrentQuertar } from "calculate-date";
import IFrame from "react-awesome-iframe";

class App extends Component {
    render() {
        const iframeProps = {
            loading: true,
            loadingText: "加载中",
            width: "100%",
            height: window.innerHeight - 30,
            src: "https://www.baidu.com",
            loadFunc: function() {
                alert("already loaded, now you can do something.");
            }
        };

        return (
            <>
                <IFrame {...iframeProps} />
                <SongTest label="banana">香蕉你个巴拉 </SongTest>

                {getCurrentQuertar()}
            </>
        );
    }
}

export default App;
