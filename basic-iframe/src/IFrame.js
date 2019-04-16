import React, { Component } from "react";

class IFrame extends Component {
    render() {
        const { width = "100%", height = "100%", src = "", title = "React IFrame", ...props } = this.props;

        return <iframe />;
    }
}

export default IFrame;
