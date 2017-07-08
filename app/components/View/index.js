/**
*
* View
*
*/

import React from 'react';
import ReactDOM from 'react-dom';
import { ViewWrap } from './styles'


// temporary development data 
import { models } from './data'

import Scene from './scene' 

class View extends React.Component { // eslint-disable-line react/prefer-stateless-function

  componentDidMount() {
    const { screen } = this.props
    const ViewDOM = ReactDOM.findDOMNode(this)
    const div = document.createElement("div");
    div.id = `sceneDOM_${screen}`;
    const h = ViewDOM.clientHeight
    const w = ViewDOM.clientWidth

    ViewDOM.appendChild(div);
    
    Scene(div.id, w, h, models);
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
