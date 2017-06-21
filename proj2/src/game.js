/**
 * Created by developer-04 on 21-Jun-17.
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
            clicked:false,
            clicked1:false,
            text1:"",
            color:"mymodalh1",
            show:false,
            divshow:false,
            block:false,
            text2:"Show Details",
            r1:"r1"
        }
    }

    cloes(){
        this.setState({clicked:false});
        this.setState({clicked1:false});
        this.setState({divshow:false});

    }
    cloes1(){

        this.setState({clicked1:true});
        this.setState({text2:"cloes"});


    }


    divs(){
        this.setState({divshow:true});
        document.getElementById("r1").addEventListener('click', function  myFunction(event) {
                let obj1 = {
                    url: event.target.src,
                    name: event.target.id
                };
                arr.push(obj1);
            document.getElementById("r1").removeEventListener("click", myFunction);

            }

        );
        document.getElementById("rr").addEventListener('click', function  myFunction(event) {
            let obj1 = {
                url: event.target.src,
                name: event.target.id
            };
            arr.push(obj1);
            document.getElementById("rr").removeEventListener("click", myFunction);

        });
        document.getElementById("r3").addEventListener('click', function  myFunction(event) {
            let obj1 = {
                url: event.target.src,
                name: event.target.id
            };
            arr.push(obj1);
            document.getElementById("r3").removeEventListener("click", myFunction);

        });
        document.getElementById("r2").addEventListener('click', function  myFunction(event) {
                let obj1 = {
                    url: event.target.src,
                    name: event.target.id
                };
                arr.push(obj1);
            document.getElementById("r2").removeEventListener("click", myFunction);

            }

        );

        setTimeout(function () {
            this.setState({clicked:true, text1:"YOU WON !!!"});

        }.bind(this),7000)
    }


    render() {
        const arritem=arr.map(function(item,index){
            return <div>
                <img className="di" key={index}
                     src ={item.url} /></div>

        });

        return (
            <div className="App1">
                <Modal modal={this.state.clicked ? 'modal1' : 'modal'} text={this.state.text1} text2={this.state.text2} color={this.state.color} open={this.cloes1.bind(this)} />
                <div  className='block'>
                    <button type="radio"  onClick={this.divs.bind(this)}>play</button>
                    <hr/>
                    <div id="r1" className={this.state.divshow ? 'left' : 'divshow'}>
                        <img  id="animated-bird-image-0121" src={require('./animated-bird-image-0121.gif')} />
                    </div>
                    <hr/>
                    <div id="rr" className={this.state.divshow ? 'left1' : 'divshow'}>
                        <img id="animated-bird-image-0132" src={require('./animated-bird-image-0132.gif')} />

                    </div>
                    <hr/>
                    <div  id="r2" className={this.state.divshow ? 'left3' : 'divshow2'} >
                        <img id="animated-bird-image-0397" src={require('./animated-bird-image-0397.gif')} />

                    </div>
                    <hr/>
                    <div  id="r3" className={this.state.divshow ? 'left2' : 'divshow'} >
                        <img id="animated-bird-image-0250" src={require('./animated-bird-image-0250.gif')} />

                    </div>
                    <hr/>
                </div>
                <div className={this.state.clicked1 ? 'modal2' : 'modal3'}>
                    <div className="mymodal">
                        <h1>{arritem}</h1>
                    </div>
                    <button onClick={this.cloes.bind(this)}>{this.state.text2}</button>
                </div>


            </div>
        );
    }
}

export default App1;
