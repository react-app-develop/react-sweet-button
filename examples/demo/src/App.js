import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import SweetButton from 'react-sweet-button';

class App extends Component {
  render() {

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React Component Center</h1>
        </header>


        <h1>Demo of react-sweet-button</h1>
        <SweetButton className="m-t" type="light" size="xlarge" onClick={()=>{alert(111)}}>
            xlarge
        </SweetButton>
        <SweetButton className="m-l" type="primary" size="large">
            large
        </SweetButton>
        <SweetButton className="m-l" type="secondary" size="medium">
            medium
        </SweetButton>
        <SweetButton className="m-l" type="danger" size="small">
            small
        </SweetButton>
        <SweetButton className="m-l" type="dark" size="xsmall">
            xsmall
        </SweetButton>
      </div>
    );
  }
}

export default App;
