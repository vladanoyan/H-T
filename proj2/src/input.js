/**
 * Created by vlad on 6/19/17.
 */
import React, { Component } from 'react';
import './App.css';

class Input extends Component {
  constructor(props){
    super(props);
    this.state={
      value:"this is value",
      gender:"",
      textinput:""

    }

  }

  handleSubmit(event){
    event.preventDefault();
    console.log("form is submitting ");
  }
  handleChange(e){
    e.target.value;
this.setState({textinput:e.target.value})
    console.log("form is submitting "+e.target.value);
  }

  render() {
const gi=()=>{
      this.setState({value:this.refs.popox.value})
  console.log(this.state.value);
}
    return (
      <div className="App1">
        <input ref="popox" value={this.state.value} onChange={gi}/>
        Gender: Male
        <input type="radio" name="gender" onChange={()=> {this.setState({gender:"M"})}} checked={this.state.gender==="M"}/>
        Female
        <input type="radio" name="gender" onChange={()=> {this.setState({gender:"F"})}} checked={this.state.gender==="F"}/>
        <br />
        {this.state.gender}
        <br/>
        <form action="post" onSubmit={this.handleSubmit.bind(this)}>
          <input type="text" onChange={this.handleChange.bind(this)}/>
          <button>push</button>
        </form>

      </div>
    );
  }
}

export default Input;
