/**
*
* DeviceMock
*
*/

import React from 'react';

import { FormattedMessage } from 'react-intl';
import messages from './messages';

import { Sosia } from './sosia'

import { SvgWrap } from './styles'

class DeviceMock extends React.Component { // eslint-disable-line react/prefer-stateless-function

  
  render() {
    return (
      <SvgWrap> 

        {Sosia()}      

      </SvgWrap>
    );
  }
}

DeviceMock.propTypes = {

};

export default DeviceMock;
