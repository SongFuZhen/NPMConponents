import React, { Component } from "react";
require("./IFrame.css");

class IFrame extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isLoading: true
        };
    }

    render() {
        const { loading, onLoad, ...iframeProps } = this.props;

        const handleOnReadyStateChange = () => {
            this.setState({ isLoading: false });
        };

        return (
            <>
                {loading && this.state.isLoading ? (
                    <div class="spinner">
                        <div class="rect1" />
                        <div class="rect2" />
                        <div class="rect3" />
                        <div class="rect4" />
                        <div class="rect5" />
                    </div>
                ) : (
                    ""
                )}
                <iframe {...iframeProps} onLoad={handleOnReadyStateChange} />
            </>
        );
    }
}

export default IFrame;
