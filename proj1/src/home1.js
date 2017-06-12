/**
 * Created by vlad on 6/12/17.
 */
import React, { Component } from 'react';
import './App.css';
import Input from './input';


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



// this.setState({hover1: true });
// this.setState({hover2: true });
// this.setState({hover3: true });
// this.setState({hover4: true });
// this.setState({hover5: true });
// this.setState({hover6: true });
// this.setState({hover7: true });
// this.setState({hover8: true });
// this.setState({hover9: true });
// this.setState({hover10: true });
// this.setState({hover11: true });
// this.setState({hover12: true });
// this.setState({hover13: true });
// this.setState({hover14: true });




    render() {
        return (
            <div className="App1">
                <div onClick={() => this.setState({ hover: true })} className={ this.state.hover ? 'hover1' : 'hover'}></div>
                <div onClick={() => this.setState({hover1: true })} className={ this.state.hover1 ? 'hover1' : 'hover'}></div>
                <div onClick={() => this.setState({hover2: true })} className={ this.state.hover2 ? 'hover1' : 'hover'}></div>
                <div onClick={() => this.setState({hover3: true })} className={ this.state.hover3 ? 'hover1' : 'hover'}></div>
                <div onClick={() => this.setState({hover4: true })} className={ this.state.hover4 ? 'hover1' : 'hover'}></div>
                <div onClick={() => this.setState({hover5: true })} className={ this.state.hover5 ? 'hover1' : 'hover'}></div>
                <div onClick={() => this.setState({hover6: true })} className={ this.state.hover6 ? 'hover1' : 'hover'}></div>
                <div onClick={() => this.setState({hover7: true })} className={ this.state.hover7 ? 'hover1' : 'hover'}></div>
                <div onClick={() => this.setState({hover8: true })} className={ this.state.hover8 ? 'hover1' : 'hover'}></div>
                <div onClick={() => this.setState({hover9: true })} className={ this.state.hover9 ? 'hover1' : 'hover'}></div>
                <div onClick={() => this.setState({hover10: true })} className={ this.state.hover10 ? 'hover1' : 'hover'}></div>
                <div onClick={() => this.setState({hover11: true })} className={ this.state.hover11 ? 'hover1' : 'hover'}></div>
                <div onClick={() => this.setState({hover12: true })} className={ this.state.hover12 ? 'hover1' : 'hover'}></div>
                <div onClick={() => this.setState({hover13: true })} className={ this.state.hover13 ? 'hover1' : 'hover'}></div>
                <div onClick={() => this.setState({hover14: true })} className={ this.state.hover14 ? 'hover1' : 'hover'}></div>

                <Input />


            </div>
    );
    }
}

export default App1;
