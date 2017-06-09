/**
 * Created by vlad on 6/6/17.
 */
import React, { Component } from 'react';
import './App.css';

class Li extends Component {

    render() {

        return (
                   <li>text {this.props.pop}</li>


    );
    }
}

export default Li;
