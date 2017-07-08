/*
 *
 * VisualController
 *
 */

import React, { PropTypes } from 'react';
import { connect } from 'react-redux';

import { createStructuredSelector } from 'reselect';
import makeSelectVisualController from './selectors';
import messages from './messages';

import Projection from '../Projection'
import View from '../../components/View'

import { Wrap, Row, Cell, Title, ViewrWrap } from './styles';

export class VisualController extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <Wrap>
        
        <Row>
          <Cell>
            <Title>{messages.constructor.defaultMessage}</Title>
            <ViewrWrap>
              <View screen={2}/>
            </ViewrWrap>
          </Cell>
          <Cell>
            <Title>{messages.projection.defaultMessage} </Title>
            <ViewrWrap>
              <Projection />
            </ViewrWrap>
          </Cell>
        </Row>

        <Row>
          <Cell>
            <Title>{messages.device.defaultMessage} </Title>
          </Cell>
          <Cell>
            <Title>{messages.shape.defaultMessage} </Title>
          </Cell>
        </Row>
      </Wrap>
    );
  }
}

VisualController.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  VisualController: makeSelectVisualController(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(VisualController);
