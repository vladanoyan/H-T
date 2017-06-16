import React, { Component } from 'react';
import './App.css';
import Input from './input';
import ShowImages from './home1';
import Slider from './slider';



const nkarner = [
    {
        id:"01",
        url:"2.jpg",
        discription:"nkar-1"
    },
    {
        id:"02",
        url:"3.jpg",
        discription:"nkar-2"
    },
    {
        id:"03",
        url:"4.jpg",
        discription:"nkar-3"
    }


];

class App extends Component {



  render() {
      const info = nkarner.map((item,index) =>{
          return <ShowImages
              hasce = {item.url}
              nkaragrutyun={item.discription}
               key={index} />
      });



    return (
      <div className="App">
        <Input />

          {info}

            <Slider/>
      </div>
    );
  }
}

export default App;
