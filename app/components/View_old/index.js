/**
*
* View
*
*/

import React from 'react';

import * as THREE from 'three'
import { ViewWrap } from './styles'

function View() {

//  const node = React.findDOMNode(this)
console.log(this.viewDOM)



  return (
    <ViewWrap ref={(ViewWrap) => { this.viewDOM = ViewWrap; }} >

    </ViewWrap>
  );
}

View.propTypes = {

};

export default View;
