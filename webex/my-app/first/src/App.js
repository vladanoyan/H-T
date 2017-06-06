import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import My from './my';
import Square from './square1';
import Square4 from './square3';
import {Square2,Square3} from './square2';
import Content1 from './home';
import Content2 from './home1';
import Content3 from './home2';
import {Button,Button1,Button2} from './button';





const v1=[
    {
  anun:"vlad",
  azg:"Anoyan"
    },
    {

    anun:"vahe",
    azg:"Anoyan"
    },
    {

        anun:"Karen",
        azg:"Anoyan"
    }
];




class App extends Component {
  render() {
      return (
          <div className="App">
              <div className="contentItems">
                  <Content1 />
                  <Content2 />
                  <Content3 />
              </div>
              <Button />
              <Button1 />
              <Button2 />
              <div id="container"></div>

              <My />
              <div className="App-header">
                  <img src={logo} className="App-logo" alt="logo" />
                  <h2>Welcome to React</h2>
              </div>
              <p className="App-intro">
                  To get started, edit <code>src/App.js</code> and save to reload.
              </p>
              {array}
              <Square4 />
              <Square2 />
              <Square3 />


          </div>
      );

      const array= v1.map(function (arjeq,index) {
        return (
            <div key={index}>
            <Square panun={arjeq} />
      </div>
      )
    });
  }
}

export default App;
