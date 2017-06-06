/**
 * Created by vlad on 6/4/17.
 */
import React, { Component } from 'react';
import './square.css';




class Content1 extends Component {
    // constructor(props){
    //     super(props);
    //     this.state= {
    //         test: false
    //     }
    //     this.clone= this.clone.bind(this);
    // }
    // clone(){
    //     let sq= document.getElementsByClassName("content1")[0];
    //     let cont = document.getElementById("container");
    //     const neval1 =  cont.appendChild(sq);
    //     this.setState({ test1: neval1 });
    //
    //
    //
    // }

    constructor(props){
        super(props);
        this.state= {
            tesy: false
        }
        this.circle= this.circle.bind(this);
    }
    circle(){
        let ri= this.state.tesy ? false : true;
        this.setState({ tesy: ri })



    }
    render() {

        return(
            <div>
            <div className={ this.state.tesy ? 'content1' : 'my-class' } onClick={this.clone}>
                    1
            </div>
            </div>
    );

    }
}

export default Content1;


