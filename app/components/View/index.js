/**
*
* View
*
*/

import React from 'react';
import ReactDOM from 'react-dom';
import { ViewWrap } from './styles'

import Scene from './scene' 

class View extends React.Component { // eslint-disable-line react/prefer-stateless-function

  componentDidMount() {
    const { screen } = this.props
    const ViewDOM = ReactDOM.findDOMNode(this)
    const div = document.createElement("div");
    div.id = `sceneDOM_${screen}`;
    const h = ViewDOM.clientHeight
    const w = ViewDOM.clientWidth
    console.log(ViewDOM.style)
    ViewDOM.appendChild(div);
    Scene(div.id, w, h)
  }

  render() {
    return (
    <ViewWrap ref={(ViewWrap) => { this.viewDOM = ViewWrap; }} />
    );
  }
}

View.propTypes = {

};

export default View;
