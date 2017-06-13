/**
 * Created by vlad on 6/12/17.
 */
import React, { Component } from 'react';
import './App.css';
import Modal from './modal';


class App1 extends Component {
    constructor(props){
        super(props);
        this.state={
            value1:"",
            clicked:false,
            text1:"",
            color:"mymodalh1",



        }
    }

    check(){
        if(this.state.value1==="orange"){
            this.setState({clicked:true});
            this.setState({text1:"YOU WON !!!"});
        }
        else{
            this.setState({clicked:true});
            this.setState({text1:"YOU LOSE !!!"});
            this.setState({color:"mymodalh2"});
        }
    }

    valuechek(event){
            this.setState({value1:event.target.value})

    }
    cloes(){
        this.setState({clicked:false})
    }
    render() {

return (
            <div className="App1">

                <input type="text" onChange={this.valuechek.bind(this)} value={this.state.value1} />
                <button onClick={this.check.bind(this)}>check </button>
                <Modal modal={this.state.clicked ? 'modal1' : 'modal'} text={this.state.text1} color={this.state.color} open={this.cloes.bind(this)} />
            </div>
        );
    }
}

export default App1;
