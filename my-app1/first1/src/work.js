/**
 * Created by vlad on 6/6/17.
 */
import React, { Component } from 'react';
import './App.css';
import Print from './li-print';
const tiv=[];

class App1 extends Component {
    constructor(props){
        super(props);
        this.state = {
                bclicked:false

        }

        this.cikl= this.cikl.bind(this);


    }

    cikl() {
        this.setState({bclicked: true });
        for (let i = 1; i <= 70; i++) {
            tiv.push(i);

        }


    }

    render() {
        const rez=tiv.map( (item,index) => {
            return this.state.bclicked===true ? <Print pop={item} key={index} /> :""
        });

        return (

            <div  className="App1">
                <ul>
                    {rez}

                </ul>
                <button onClick={this.cikl}> + li </button>

            </div>
    );
    }
}

export default App1;
