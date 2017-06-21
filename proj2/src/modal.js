
import React, { Component } from 'react';
import './App.css';


class Modal extends Component {

    render() {


        return (
            <div >
                <div className={this.props.modal}>
                    <div className="mymodal">
                        <h1 className={this.props.color}>{this.props.text}</h1>
                    </div>
                    <button onClick={this.props.open}>{this.props.text2}</button>
                </div>
            </div>


        );
    }
}

export default Modal;
