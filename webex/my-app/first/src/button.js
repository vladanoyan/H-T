/**
 * Created by vlad on 6/4/17.
 */
import React, { Component } from 'react';
import './square.css';


class Button extends Component {
    // constructor(props){
    //     super(props);
    //     this.state= {
    //         tesy: false
    //     }
    //     this.circle= this.circle.bind(this);
    // }
    // circle(){
    //     let pi = document.getElementsByClassName("content1")[0];
    //     let ri= this.state.tesy ? false : true;
    //     this.setState({ tesy: ri })
    //
    //
    //
    // }

    render() {

        return (
            <div className="bat1">
                <button onClick={this.circle}>Push1</button>
            </div>
        );

    }
}



class Button1 extends Component {
    circle2(){
        setTimeout(function(){
            pi1.style.display = 'none';
        }, 1000);
        let pi1 = document.getElementsByClassName("content2")[0];
        pi1.classList.add("my-class1");

    }

    render() {

        return (
            <div className="bat1">
                <button onClick={this.circle2}>Push2</button>
            </div>
        );

    }
}



class Button2 extends Component {
    circle3(){
        setTimeout(function(){
            pi2.style.display = 'none';
        }, 1000);
        let pi2 = document.getElementsByClassName("content3")[0];
        pi2.classList.add("my-class2");

    }
    render() {

        return (
            <div className="bat1">
                <button onClick={this.circle3}>Push3</button>
            </div>
        );

    }
}

export { Button,Button1,Button2 };


