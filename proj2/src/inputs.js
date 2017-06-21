import React, { Component } from 'react';
import './App.css';


class App extends Component {
  constructor(props){
    super(props);
    this.state={
      val1:"value",
      name:"",
      text:""


    }
  }

  handleSubmit(event){
    event.preventDefault();
    console.log("form is submitting ");
  }
  handleChange(e){
    e.target.value;
    this.setState({text:e.target.value})
    console.log("form is submitting "+e.target.value);
  }
  render() {

    const inputs=()=>{
      this.setState({val1:this.refs.val2.value});
      console.log(this.state.val1);
    }
    return (
      <div className="App" >

        <br/><br/>
        <input ref="val2" value={this.state.val1} onChange={inputs}/> <br/>
        {this.state.val1}<br/>
        <input type="checkbox"  onChange={()=> {this.setState({name:'FIRST_NAME'})}} checked={this.state.name==="FIRST_NAME"}/>
        <br/>
        {this.state.name}


        <form action="post" onSubmit={this.handleSubmit.bind(this)}>
          <input type="text" onChange={this.handleChange.bind(this)}/>
          <button>push me</button>
        </form>



      </div>
    );
  }
}

export default App;
