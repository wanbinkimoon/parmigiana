/**
 *
 * App.react.js
 *
 */

import React from 'react';
import { connect } from 'react-redux';

import { createStructuredSelector } from 'reselect';

import { pad, knob, init, loadMidi, mercurio } from './actions';
import { makeSelectMidiLink, makeSelectPad, makeSelectKnob, makeSelectSoma, makeSelectPsiche } from './selectors';

import { mappingValues } from './dealer'

import WebMidi from 'webmidi';

export class App extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function

  constructor(props) {
    super(props);
    this.state = {
        passingBy: {},
    };
  }

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
    const { padData, knobData, somaData, psicheData } = this.props
    
    const youarehere = mappingValues(knobData, somaData, psicheData)
    
    this.setState({
      passingBy: {
        ...mercurio(youarehere).data
      }
    })
    console.log(this.state.passingBy)
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
        {React.Children.toArray(React.cloneElement(this.props.children, { signal: this.state.passingBy }))}
      </div>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  midiLink: makeSelectMidiLink(),
  padData: makeSelectPad(),
  knobData: makeSelectKnob(),
  somaData: makeSelectSoma(),
  psicheData: makeSelectPsiche()
  
});

function mapDispatchToProps(dispatch) {
  return {
    init: (i) => dispatch(init(i)),
    loadMidi: (data) => dispatch(loadMidi(data)),
    pad: (e) => dispatch(pad(e)),
    knob: (e) => dispatch(knob(e)),
    mercurio: ([somaData, psicheData]) => dispatch(mercurio([somaData, psicheData])),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(App);