import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Square extends Component {
  render() {
    const { black } = this.props;
    const fill = black ? 'black' : 'white';

    return <div style={{ backgroundColor: fill }} />;
  }
}

Square.propTypes = {
  black: PropTypes.bool
};
