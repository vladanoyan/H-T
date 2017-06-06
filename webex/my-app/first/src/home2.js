/**
 * Created by vlad on 6/4/17.
 */
import React, { Component } from 'react';
import './square.css';
import {Button2} from './button';


class Content3 extends Component {
    constructor(props){
        super(props);
        this.state= {
            tesy1: false
        }
        this.circle2= this.circle2.bind(this);
    }
    circle2(){
        let pi2 = document.getElementsByClassName("content3")[0];
        let rii= this.state.tesy1 ? false : true;
        this.setState({ tesy1: rii });
        setTimeout(function(){
            pi2.style.display = 'none';
        }, 1000);

    }
    render() {

        return (
            <div>
            <div className={ this.state.tesy1 ? 'my-class2' : 'content3'} onClick={this.circle2}>3</div>
            <Button2 />

            </div>
        );

    }
}

export default Content3;


