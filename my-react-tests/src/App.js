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
  state = {
    name: 'Web development'
  }

  render() {
    const name = this.state.name;

    return (<div><h1>hello world {this.props.user}</h1>
      {/* passing an array as prop */}
      <PassPP tasks={["walk the dog", "workout"]} />
      <Anothercomponent />
      <div>{this.state.name}</div>
      <ButtonTest />
    </div>
    );
  }
}

class ButtonTest extends Component {
  constructor(props) {
    super(props);
    //put here the this thing
    this.clickHandler = this.clickHandler.bind(this);
  }
  state = { name: "initial State" }
  clickHandler() {
    this.setState({
      name: "secondary State"
    })
  }
  render() {
    return (
      <div>
        <button onClick={this.clickHandler}>
          Click here
        </button>
        <h1>{this.state.name}</h1>
      </div>
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
