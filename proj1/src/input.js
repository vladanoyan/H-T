/**
 * Created by vlad on 6/12/17.
 */
import React, { Component } from 'react';
import './App.css';
import Modal from './modal';
let arr=[];
console.log(arr);

class App1 extends Component {
    constructor(props){
        super(props);
        this.state={
            search1:false,
            value1:"",
            clicked:false,
            text1:"",
            color:"mymodalh1",
            show:false,
            hid:false



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

    checked()
    {
        this.setState({search1: !this.state.search1})
    }



    valuechek(event){
       this.setState({value1:event.target.value});

    }
    cloes(){
        this.setState({clicked:false})
    }

    sho(){
        this.setState({show:true})

    }

    hid(){
        this.setState({hid:true})
    }
    copy() {
        arr.push(this.state.value1);
        let m = document.getElementsByClassName("container")[0];
        m.innerHTML = arr;
        this.setState({value1: ""});
    }
    render() {

return (
            <div className="App1">
                <input className="chek"  type="checkbox" onChange={this.checked.bind(this)}/>
                <input className={this.state.search1 ? 'search1' : 'search'}  type="text" onChange={this.valuechek.bind(this)} value={this.state.value1} placeholder="YOUR TEXT HERE" />
                <input className="chek"  type="radio" name="one" onChange={this.sho.bind(this)}/>
                <input className="chek"  type="radio" name="two" onChange={this.hid.bind(this)}/>
                <button className={this.state.hid ? "hidbat":"hidbat1"} onClick={this.copy.bind(this)}>push</button>

                <div className={this.state.show ? 'container' : 'container1'}></div>
                <br/>
                <button onClick={this.check.bind(this)}>check </button>
                <Modal modal={this.state.clicked ? 'modal1' : 'modal'} text={this.state.text1} color={this.state.color} open={this.cloes.bind(this)} />
            </div>
        );
    }
}

export default App1;
