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
    }, 2000);
    console.log(this);
  }
    clone(event){
        let x = event.target;
        let cont = document.getElementById("container");
        cont.appendChild(x);
        x.onclick = function () {
          let y = Math.floor((Math.random() * 1000000) + 1);
          if (y%2==0 && y>150000){
              x.style.background="purple";
              x.innerHTML=y+"<br>"+"zuyg";
          }
          else {
              x.style.background="magenta";
              x.innerHTML=y+"<br>"+"kent";
          }
        }
    }

  green1(){
    this.setState({green:"սեվ"});
    setTimeout(function(){
      document.getElementsByClassName("my-class1")[0].style.display = 'none';
    }, 2000);
    console.log(this);
  }

  blue1(){
    this.setState({blue:"դեղին"});
    setTimeout(function(){
      document.getElementsByClassName("my-class2")[0].style.display = 'none';
    }, 2000);
    console.log(this);
  }

  render() {
    return (
      <div className="App">
        <div onClick={this.clone} className={this.state.red === "կարմիր" ? "red" : "my-class"}>RED</div>
        <div onClick={this.clone} className={this.state.green === "կանաչ" ? "green" : "my-class1"}>GREEN</div>
        <div onClick={this.clone} className={this.state.blue === "կապույտ" ? "blue" : "my-class2"}>BLUE</div>
        <div  className="button">
          <button onClick={this.red1}>{this.state.red}</button>
          <button onClick={this.green1}>{this.state.green}</button>
          <button onClick={this.blue1}>{this.state.blue}</button>
          <div id="container"></div>
        </div>
      </div>
    );
  }
}

export default App;
