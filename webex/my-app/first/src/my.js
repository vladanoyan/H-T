/**
 * Created by vlad on 6/4/17.
 */
import React, { Component } from 'react';
import './App.css';


class my extends Component {
    constructor(props){
        super(props);
        this.state= {
            test: false
        }
        this.fi= this.fi.bind(this);
    }
    fi(){
        const neval = this.state.test ? false : true;
        this.setState({ test: neval })
    }


    render() {
        const m1 = this.props.panun;
        console.log(m1);
        return (
            <div className="my">
                <h1 onClick={this.fi}>{ this.state.test ? 'on' : 'off' } </h1>
                { m1.anun + m1.azg}
        </div>
    );
    }
}

export default my;


