
import React, { Component } from 'react';
import './App.css';


class Slider extends Component {

    render() {


        return (
            <div>
                <div className="slider"><i className="fa fa-angle-left" aria-hidden="true"></i><img src={require('./thumbs/01.jpg')} />
                    <i className="fa fa-angle-right" aria-hidden="true"></i></div>

                <div className="slider"><img src={require('./thumbs/02.jpg')} /></div>
                <div className="slider"><img src={require('./thumbs/03.jpg')} /></div>
                <div className="slider"></div>
                <div className="slider"></div>
                <div className="slider"></div>
                <div className="slider"></div>
                <div className="slider"></div>
                <div className="slider"></div>
            </div>


        );
    }
}

export default Slider;
