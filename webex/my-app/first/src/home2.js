/**
 * Created by vlad on 6/4/17.
 */
import React, { Component } from 'react';
import './square.css';


class Content3 extends Component {
    constructor(props){
        super(props);
        this.state= {
            test: false
        }
        this.clone= this.clone.bind(this);
    }
    clone(){
        let ss= document.getElementsByClassName("content3")[0];
        let cont = document.getElementById("container");
        const neval1 =  cont.appendChild(ss);
        this.setState({ test1: neval1 });



    }

    render() {

        return <div className="content3" onClick={this.clone}>3</div>;

    }
}

export default Content3;


