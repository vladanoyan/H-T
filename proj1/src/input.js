/**
 * Created by vlad on 6/12/17.
 */
import React, { Component } from 'react';
import './App.css';
import Modal from './modal';
let arr=[];
console.log(arr);
let count=0;


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
            hid:false,
            divshow:false,
            block:false,
            color2:"orange"



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
        this.setState({clicked:false});
        this.setState({divshow:false});

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

    divs2(){
        this.setState({block:true});

}
    divs(){
       this.setState({divshow:true});
        setTimeout(function () {
        this.setState({clicked:true, text1:"YOU WON !!!" + count});

        }.bind(this),7000)

    }

    divclick(event){
        count=count+1;

        console.log(count);

        let y = Math.floor((Math.random() * 1000000) + 1);
        this.setState({color2 : "#" + y});

    }
    render() {

return (
            <div className="App1">
                <input className="chek"  type="checkbox" onChange={this.checked.bind(this)}/>
                <input className={this.state.search1 ? 'search1' : 'search'}  type="text" onChange={this.valuechek.bind(this)} value={this.state.value1} placeholder="YOUR TEXT HERE" />
                <input className="chek"  type="radio" name="one" onChange={this.sho.bind(this)}/>show
                <input className="chek"  type="radio" name="two" onChange={this.hid.bind(this)}/>button
                <button className={this.state.hid ? "hidbat":"hidbat1"} onClick={this.copy.bind(this)}>push</button>

                <div className={this.state.show ? 'container' : 'container1'} ></div>
                <br/>
                <Modal modal={this.state.clicked ? 'modal1' : 'modal'} text={this.state.text1} color={this.state.color} open={this.cloes.bind(this)} />
                <input className="chek"  type="radio" name="trees" onChange={this.divs2.bind(this)}/>show divs
                <div  className={this.state.block ? 'block' : 'none'}>
                <button type="radio"  onClick={this.divs.bind(this)}>play</button>
                <hr/>
                <div style={{background:this.state.color2}} className={this.state.divshow ? 'left' : 'divshow'} onClick={this.divclick.bind(this)}></div>
                <hr/>
                <div style={{background:this.state.color2}} className={this.state.divshow ? 'left1' : 'divshow'} onClick={this.divclick.bind(this)}></div>
                <hr/>
                <div style={{background:this.state.color2}} className={this.state.divshow ? 'left2' : 'divshow'} onClick={this.divclick.bind(this)}></div>
                <hr/>
                </div>


            </div>
        );
    }
}

export default App1;
