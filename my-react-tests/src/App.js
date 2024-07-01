import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import logo from './logo.svg';
import './App.css';



function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Mycomponent user="Ivan" />
      </header>
    </div>
  );
}



class Mycomponent extends Component {
  constructor(props) {
    super(props);
  }
  state = {}
  render() {
    return (<div><h1>hello world {this.props.user}</h1>
      {/* passing an array as prop */}
      <PassPP tasks={["walk the dog", "workout"]} />
      <Anothercomponent /></div>
    );
  }
}

class PassPP extends Component {
  constructor(props) {
    super(props);
  }
  state = {}
  render() {
    // passing an array and having a method in here 
    return (<h2>{this.props.tasks.join(", ")}</h2>);
  }
}

// making sure that the type of property is correct
PassPP.propTypes = { tasks: PropTypes.array.isRequired }

function Anothercomponent(props) {
  return (<p>{props.user}</p>);
}

Anothercomponent.defaultProps = { user: "Andrada" }


export default App;
