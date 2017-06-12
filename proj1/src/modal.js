
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
                </div>
            </div>


        );
    }
}

export default Modal;
