/**
 * Created by vlad on 6/4/17.
 */
import React, { Component } from 'react';
import './square.css';


class Button extends Component {
    clone(){
        let sm= document.getElementsByClassName("content1")[0];
        sm.style.display = 'block';

        let cont = document.getElementById("container");
        cont.appendChild(sm);
    }
    render() {

        return (
            <div className="bat1">
                <button onClick={this.clone}>Push1</button>
            </div>
        );

    }
}


class Button1 extends Component {
    clone1(){

        let sm= document.getElementsByClassName("content2")[0];
        let cont = document.getElementById("container");
        cont.appendChild(sm);
    }
    render() {

        return (
            <div className="bat1">
                <button onClick={this.clone1}>Push2</button>
            </div>
        );

    }
}



class Button2 extends Component {
    clone2(){
        let sm= document.getElementsByClassName("content3")[0];
        let cont = document.getElementById("container");
         cont.appendChild(sm);
    }
    render() {

        return (
            <div className="bat1">
                <button onClick={this.clone2}>Push3</button>
            </div>
        );

    }
}
export { Button,Button1,Button2 };


