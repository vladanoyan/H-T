/**
 * Created by vlad on 6/4/17.
 */
import React, { Component } from 'react';
import './square.css';
import {Button1} from './button';

class Content2 extends Component {
    constructor(props){
        super(props);
        this.state= {
            home1: false
        }
        this.circle1= this.circle1.bind(this);
    }
    circle1(){
        let pi3 = document.getElementsByClassName("content2")[0];
        let ri3= this.state.home1 ? false : true;
        this.setState({ home1: ri3 });
        setTimeout(function(){
            pi3.style.display = 'none';
        }, 1000);

    }
    render() {

        return (
            <div>
            <div className={ this.state.home1 ? 'my-class1' : 'content2'} onClick={this.circle1}>2</div>
                <Button1 />

         </div>
        );

    }
}

export default Content2;


