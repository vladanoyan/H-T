import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      red: 'կարմիր',
      green:'կանաչ',
      blue:'կապույտ'
    }
    this.red1=this.red1.bind(this);
    this.green1=this.green1.bind(this);
    this.blue1=this.blue1.bind(this);


  }

  red1(){
    this.setState({red:"սպիտակ"});
    setTimeout(function(){
      document.getElementsByClassName("my-class")[0].style.display = 'none';
    }, 1000);
    console.log(this);
  }

  green1(){
    this.setState({green:"սեվ"});
    setTimeout(function(){
      document.getElementsByClassName("my-class")[0].style.display = 'none';
    }, 1000);
    console.log(this);
  }

  blue1(){
    this.setState({blue:"դեղին"});
    setTimeout(function(){
      document.getElementsByClassName("my-class")[0].style.display = 'none';
    }, 1000);
    console.log(this);
  }

  render() {
    return (
      <div className="App">
        <div className={this.state.red === "կարմիր" ? "red" : "my-class"}>RED</div>
        <div className={this.state.green === "կանաչ" ? "green" : "my-class"}>GREEN</div>
        <div className={this.state.blue === "կապույտ" ? "blue" : "my-class"}>BLUE</div>
        <div  className="button">
          <button onClick={this.red1}>{this.state.red}</button>
          <button onClick={this.green1}>{this.state.green}</button>
          <button onClick={this.blue1}>{this.state.blue}</button>
        </div>
      </div>
    );
  }
}

export default App;
