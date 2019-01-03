import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import { SweetButton, DimensionButton } from 'react-sweet-button';

class App extends Component {
  render() {

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React Component Center</h1>
        </header>


        <h1>Demo of react-sweet-button</h1>
          <div>
              <SweetButton className="m-t" type="light" size="xlarge" onClick={()=>{alert('我是超大按钮')}}>
                  xlarge
              </SweetButton>
              <SweetButton className="m-l" type="123" size="large">
                  large
              </SweetButton>
              <SweetButton className="m-l" type="secondary" size="medium" outline>
                  medium
              </SweetButton>
              <SweetButton className="m-l" type="danger" size="small" outline>
                  small
              </SweetButton>
              <SweetButton className="m-l" type="dark" size="xsmall">
                  xsmall
              </SweetButton>
          </div>
          <div className="m-t">
              <SweetButton size="large" block>
                  block button
              </SweetButton>
          </div>
          <div>
              <DimensionButton className="m-t" type="light" size="xlarge" onClick={()=>{alert('我是超大按钮')}}>
                  xlarge
              </DimensionButton>
              <DimensionButton className="m-l" type="primary" size="large">
                  large
              </DimensionButton>
              <DimensionButton className="m-l" type="secondary" size="medium">
                  medium
              </DimensionButton>
              <DimensionButton className="m-l" type="danger" size="small">
                  small
              </DimensionButton>
              <DimensionButton className="m-l" type="dark" size="xsmall">
                  xsmall
              </DimensionButton>
          </div>
      </div>
    );
  }
}

export default App;
