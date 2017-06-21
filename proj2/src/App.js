import React, { Component } from 'react';
import './App.css';
import Input from './input';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Material from './component/material';
import GridListExampleSingleLine from './component/material1';
import AutoCompleteExampleMenuProps from './component/auto';
import Inputs from './inputs';

class App extends Component {
  constructor(props){
    super(props);
    this.state={
      z:3,
      u:2,
      m:1
    }

  }



  animate(){
    let y = Math.floor((Math.random() * 10) + 1);
    let e = Math.floor((Math.random() * 10) + 1);
    let p = Math.floor((Math.random() * 10) + 1);

this.setState({z:y,u:p,m:e});
  }


  render() {
    return (
      <div className="App">

        <Input />
        <Inputs />

        <MuiThemeProvider>
          <AutoCompleteExampleMenuProps />
          </MuiThemeProvider>


        <MuiThemeProvider>
          <Material />
        </MuiThemeProvider>

        <MuiThemeProvider>
          <GridListExampleSingleLine />
        </MuiThemeProvider>
        <br/><br/><br/>
        <div className="images">

          <img style={{zIndex: this.state.z}} className="imagecard" src={require('./dama.jpg')}/>
          <img style={{zIndex: this.state.u}}  className="imagecard1" src={require('./tuz.png')}/>
          <img style={{zIndex: this.state.m}}  className="imagecard2" src={require('./yot.png')}/>
          <br/>
          <button className="imgbtn" onClick={this.animate.bind(this)}>push me</button>
        </div>




      </div>
    );
  }
}

export default App;
