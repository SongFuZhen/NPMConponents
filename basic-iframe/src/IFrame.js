import React, { Component } from "react";
import PropTypes from "prop-types";
import ReactLoading from "react-loading";

class IFrame extends Component {
    render() {
        const { loadingProps, iframeProps } = this.props;

        return (
            <div>
                <ReactLoading {...loadingProps} />
                Hello, Song Test, this is Your Input
            </div>
        );
    }
}

IFrame.propTypes = {};

export default IFrame;
