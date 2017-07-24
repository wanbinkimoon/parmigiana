/*
 *
 * VisualController
 *
 */

import React, { PropTypes } from 'react';
import { connect } from 'react-redux';

import { createStructuredSelector } from 'reselect';
import { makeSelectModel0, makeSelectSwitcher } from './selectors';
import messages from './messages';

import Projection from '../Projection'
import View from '../../components/View'

import { Wrap, Row, Cell, Title, ViewrWrap } from './styles';
import { Farm } from './farm'


import { constructor_model } from './data'

export class VisualController extends React.Component { // eslint-disable-line react/prefer-stateless-function

  constructor(props) {
      super(props);
      this.state = {
          fetus: {
            ...props.model0
          },
      };
    }

  componentWillReceiveProps(nextProps) {
    const { signal, switcher } = this.props
    const { fetus } = this.state
    
    this.setState({
      fetus: {
        ...Farm(fetus, signal, switcher)
      }
    })

    console.log(fetus)
    
  }

  render() {

    return (
      <Wrap>
        
        <Row>
          <Cell>
            <Title>{messages.constructor.defaultMessage}</Title>
            <ViewrWrap>
              <View screen={2} models={constructor_model}/>
            </ViewrWrap>
          </Cell>
          <Cell>
            <Title>{messages.projection.defaultMessage} </Title>
            <ViewrWrap>
              <Projection />
            </ViewrWrap>
          </Cell>
        </Row>

        { false && <Row>
          <Cell>
            <Title>{messages.device.defaultMessage} </Title>
          </Cell>
          <Cell>
            <Title>{messages.shape.defaultMessage} </Title>
          </Cell>
        </Row> }
      </Wrap>
    );
  }
}

VisualController.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  model0: makeSelectModel0(),
  switcher: makeSelectSwitcher(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(VisualController);
