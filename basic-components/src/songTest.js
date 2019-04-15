import React, { Component } from "react";
import PropTypes from "prop-types";

class SongTest extends Component {
    render() {
        const { label, children } = this.props;

        return (
            <div>
                Hello, Song Test, this is Your Input
                <br />
                <br />
                <span style={{ color: "red" }}>{label}</span>:&nbsp;{children}
            </div>
        );
    }
}

SongTest.propTypes = {
    label: PropTypes.string,
    children: PropTypes.element
};

export default SongTest;
