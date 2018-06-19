import React, { Component } from 'react';
import QuoteMachine from './QuoteMachine';

class App extends Component {
  render() {
    return (
      <div className="bg-blue tc w-100 min-vh-100">
        <h1 className="f-headline-ns f1 code mt0">PhilosophoCAT</h1>
        <QuoteMachine/>
      </div>
    );
  }
}

export default App;
