
import React, { Component } from 'react';
import './modal.css';
import Input  from './Input'


class Modal extends Component {
    constructor(props){
        super(props);
        this.state = {
            clicked:false,
            password:false,
            username:false

        };

        this.myModal= this.myModal.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);

    }
    handleSubmit(event) {
        event.preventDefault();
       this.setState({ password: true });
        this.setState({ usernamed: true });

    }


    myModal(){
        this.setState({ clicked: true });
        document.getElementsByClassName("modal")[0].style.display="block";


    }






    render() {


        return (
            <div>
                <button onClick={this.myModal}>Modal Log</button>
                <div className="modal">
                    <div className="mymodal">
                        <form >
                            <Input  type="text" isRequired={true} />
                            <div className={ this.state.username ? 'hidden' : 'hidden1'}>please enter the name</div>
                             <Input type="password" isRequired={true} />
                            <div  className={ this.state.username ? 'hidden' : 'hidden1' }>please enter the password</div>


                            <button onClick={this.handleSubmit} className="button1">LogIn</button>
                        </form>
                    </div>
                </div>

            </div>


        );
    }
}

export default Modal;
