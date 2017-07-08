/*
 *
 * Projection
 *
 */

import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import makeSelectProjection from './selectors';

import View from '../../components/View'

import { Wrap } from './styles'

export class Projection extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <Wrap>
        <View screen={1} />
      </Wrap>
    );
  }
}

Projection.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  Projection: makeSelectProjection(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Projection);
