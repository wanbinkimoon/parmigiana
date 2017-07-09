/**
 *
 * App.react.js
 *
 */

import React from 'react';
import { connect } from 'react-redux';

import { createStructuredSelector } from 'reselect';

import { pad, knob, init, loadMidi } from './actions';
import { makeSelectMidiLink } from './selectors';

import WebMidi from 'webmidi';


export class App extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function

  static propTypes = {
    children: React.PropTypes.node,
  };

  componentWillMount(){
    const { init, midiLink, loadMidi } = this.props
    
    WebMidi.enable(() => {
        init(WebMidi.inputs)
        loadMidi(WebMidi.inputs)
      })
  }

  componentWillReceiveProps(nextProps) {

  }

  render() {
    const { pad, knob, midiLink, loadMidi } = this.props

    const pad_middle = (e) => {
      pad(e);
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
        input.addListener('noteon', 'all', pad_middle);
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
  midiLink: makeSelectMidiLink()
});

function mapDispatchToProps(dispatch) {
  return {
    init: (i) => dispatch(init(i)),
    loadMidi: (data) => dispatch(loadMidi(data)),
    pad: (e) => dispatch(pad(e)),
    knob: (e) => dispatch(knob(e)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(App);