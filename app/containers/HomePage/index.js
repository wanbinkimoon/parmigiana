/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 *
 * NOTE: while this component should technically be a stateless functional
 * component (SFC), hot reloading does not currently support SFCs. If hot
 * reloading is not a necessity for you then you can refactor it and remove
 * the linting exception.
 */

import React from 'react';
import { Link } from 'react-router';

import messages from './messages';

export default class HomePage extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div>
        <h2>Open your session</h2>
        <ul>
          <li><Link to='/projection'>Projection screen</Link></li>
          <li><Link to='/controller'>Controller screen</Link></li>
        </ul> 
      </div>
    );
  }
}
