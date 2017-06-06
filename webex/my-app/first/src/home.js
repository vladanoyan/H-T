/**
 * Created by vlad on 6/4/17.
 */
import React, { Component } from 'react';
import './square.css';
import {Button} from './button';




class Content1 extends Component {
        constructor(props){
        super(props);
        this.state= {
            home: false
        }
        this.circle= this.circle.bind(this);
    }
    circle(){
        let pi1 = document.getElementsByClassName("content1")[0];
        let ri= this.state.home ? false : true;
        this.setState({ home: ri });
        setTimeout(function(){
           pi1.style.display = 'none';
        }, 1000);

    }
    render() {

        return(
            <div>
            <div className={ this.state.home ? 'my-class' : 'content1' } onClick={this.circle} >1</div>
                <Button  />
            </div>
    );

    }
}

export default Content1;


