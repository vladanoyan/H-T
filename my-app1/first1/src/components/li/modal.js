
import React, { Component } from 'react';
import './modal.css';
import Input  from './Input'


class Modal extends Component {
    constructor(props){
        super(props);
        this.state = {
            clicked:false,
            value:"",
            password:"",
            username:"",

        };

        this.myModal= this.myModal.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleChange1 = this.handleChange1.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);

    }
    handleSubmit(event) {
        event.preventDefault();


        //
        // if(this.state.value === ""){
        //     document.getElementsByClassName("hidden")[0].style.display="block";
        //     document.getElementsByClassName("name")[0].style.border="1px solid red";
        // }
        // else {
        //     document.getElementsByClassName("name")[0].style.border="1px solid blue";
        //     document.getElementsByClassName("hidden")[0].style.display="none";
        //
        // }
        // if(this.state.pass === ""){
        //     document.getElementsByClassName("hidden1")[0].style.display="block";
        //     document.getElementsByClassName("pass")[0].style.border="1px solid red";
        //
        // }
        // else{
        //     document.getElementsByClassName("pass")[0].style.border="1px solid blue";
        //     document.getElementsByClassName("hidden1")[0].style.display="none";
        //
        // }
        // if(this.state.value !== "" && this.state.pass !== ""){
        //     document.getElementsByClassName("modal")[0].style.display="none";
        //
        // }
        //
        //

    }



    myModal(){
        this.setState({ clicked: true });
        document.getElementsByClassName("modal")[0].style.display="block";


    }

    handleChange(event) {
        this.setState({value: event.target.value});

    }

    handleChange1(event) {
        this.setState({pass: event.target.value});

    }





    render() {

        return (
            <div>
                <button onClick={this.myModal}>Modal Log</button>
                <div className="modal">
                    <div className="mymodal">
                        <form >
                            <Input type="text" isRequired={true} />
                            {/*<div className="hidden">please enter the name</div>*/}
                        <Input type="password" isRequired={true} />
                            {/*<div className="hidden1">please enter the password</div>*/}


                            <button onClick={this.handleSubmit} className="button1">LogIn</button>
                        </form>
                    </div>
                </div>

            </div>


        );
    }
}

export default Modal;
