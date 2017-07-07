/**
 *
 * App.react.js
 *
 */

import React from 'react';
import { connect } from 'react-redux';

import { createStructuredSelector } from 'reselect';

import { note, knob, init } from './actions';
// import { makeSelectNote } from './selectors';

import WebMidi from 'webmidi';


export class App extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function

  static propTypes = {
    children: React.PropTypes.node,
  };

  componentWillMount(){
    const { init } = this.props
    WebMidi.enable(() => {init(WebMidi.inputs)})
  }

  render() {
    const { note, knob } = this.props

    const note_middle = (e) => {
      note(e);
    }

    const knob_middle = (e) => {
      knob(e);
    }

    WebMidi.enable(function(err) {
      if (err) {
        console.log(WebMidi.inputs);
        console.log(WebMidi.outputs);
      } else {
        var input = WebMidi.getInputByName("LPD8");
        input.addListener('noteon', 'all', note_middle);
        input.addListener('controlchange', 'all', knob_middle);
      }
    });

    return (
      <div>
        {React.Children.toArray(this.props.children)}
      </div>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  // note: makeSelectNote()
});

function mapDispatchToProps(dispatch) {
  return {
    note: (e) => dispatch(note(e)),
    init: (i) => dispatch(init(i)),
    knob: (e) => dispatch(knob(e)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(App);