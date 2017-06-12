
import React, { Component } from 'react';
import './App.css';
import LI from './components/li/';



const zang = ['mek','erku','ereq','chors','hing','vec','yot','ut','in@','tas'];




const zang1=[{
         anun: "Simon ",
         id: "mek"
     },
     {
         anun: "Alex ",
         id:"erku"
     },
     {
         anun:"Tom ",
         id:"ereq"

 }];


class Button extends Component {

    render() {
        const t1= zang.map(function(arjek, tiv){
            return (<li key={tiv}>| {arjek} |</li>)
                });
        const t2= zang1.map(function(arjek1, tiv2){
            return <LI key={tiv2} pop1={arjek1} />
        })
        return (
            <div>
                {/*{t1}*/}
                {t2}
            </div>

        );
    }
}


export default Button;
