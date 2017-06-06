/**
 * Created by vlad on 6/4/17.
 */
import React, { Component } from 'react';
import './square.css';


class Content2 extends Component {
    constructor(props){
        super(props);
        this.state= {
            test: false
        }
        this.clone= this.clone.bind(this);
    }
    clone(){
        let sm= document.getElementsByClassName("content2")[0];
        let cont = document.getElementById("container");
        const neval1 =  cont.appendChild(sm);
        this.setState({ test1: neval1 });



    }

    render() {

        return <div className="content2" onClick={this.clone}>2</div>;

    }
}

export default Content2;


