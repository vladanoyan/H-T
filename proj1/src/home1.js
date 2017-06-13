/**
 * Created by vlad on 6/12/17.
 */
import React, { Component } from 'react';
import './App.css';
import Input from './input';

let m=0;
class App1 extends Component {
    constructor(props){
        super(props);
        this.state={
            hover:false,
            hover1:false,
            hover2:false,
            hover3:false,
            hover4:false,
            hover5:false,
            hover6:false,
            hover7:false,
            hover8:false,
            hover9:false,
            hover10:false,
            hover11:false,
            hover12:false,
            hover13:false,
            hover14:false
        }
    }


    render() {

        if( document.getElementsByClassName("hover").clicked==true )
        {
            m=m+1
        }
        console.log(m);
        return (
            <div className="App1">
                <div onClick={() => this.setState({ hover: !this.state.hover })} className={ this.state.hover ? 'hover1' : 'hover'}></div>
                <div onClick={() => this.setState({hover1: !this.state.hover1 })} className={ this.state.hover1 ? 'hover1' : 'hover'}></div>
                <div onClick={() => this.setState({hover2: !this.state.hover2 })} className={ this.state.hover2 ? 'hover1' : 'hover'}></div>
                <div onClick={() => this.setState({hover3: !this.state.hover3 })} className={ this.state.hover3 ? 'hover1' : 'hover'}></div>
                <div onClick={() => this.setState({hover4: !this.state.hover4 })} className={ this.state.hover4 ? 'hover1' : 'hover'}></div>
                <div onClick={() => this.setState({hover5: !this.state.hover5 })} className={ this.state.hover5 ? 'hover1' : 'hover'}></div>
                <div onClick={() => this.setState({hover6: !this.state.hover6 })} className={ this.state.hover6 ? 'hover1' : 'hover'}></div>
                <div onClick={() => this.setState({hover7: !this.state.hover7 })} className={ this.state.hover7 ? 'hover1' : 'hover'}></div>
                <div onClick={() => this.setState({hover8: !this.state.hover8 })} className={ this.state.hover8 ? 'hover1' : 'hover'}></div>
                <div onClick={() => this.setState({hover9: !this.state.hover9 })} className={ this.state.hover9 ? 'hover1' : 'hover'}></div>
                <div onClick={() => this.setState({hover10: !this.state.hover10 })} className={ this.state.hover10 ? 'hover1' : 'hover'}></div>
                <div onClick={() => this.setState({hover11: !this.state.hover11 })} className={ this.state.hover11 ? 'hover1' : 'hover'}></div>
                <div onClick={() => this.setState({hover12: !this.state.hover12 })} className={ this.state.hover12 ? 'hover1' : 'hover'}></div>
                <div onClick={() => this.setState({hover13: !this.state.hover13 })} className={ this.state.hover13 ? 'hover1' : 'hover'}></div>
                <div onClick={() => this.setState({hover14: !this.state.hover14 })} className={ this.state.hover14 ? 'hover1' : 'hover'}></div>

                <Input />
            </div>
    );
    }
}

export default App1;
