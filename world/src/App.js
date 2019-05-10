import React, { Component } from 'react';
import './App.css';

import Counter from './Counter';
import CounterRedux from './CounterRedux';

function Footer(props) {
  return (
    <div className='footer'>
      { props.children || 'This is default footer text.' }
    </div>
  );
}

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      text: "Hello, Launchmetrics!"
    };
  }

  handleChange(event) {
    this.setState({text: event.target.value});
  }

  render() {
    return (
      <div className="App">
        <header>
          <h3>{this.state.text}</h3>
          <input type="text" value={this.state.text} onChange={this.handleChange.bind(this)} />
        </header>

        <section>
          <Counter text={this.state.text} />
          <CounterRedux />
        </section>

        <Footer>Woot</Footer>

      </div>
    );
  }
}

export default App;
