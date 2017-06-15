import React, { Component } from 'react';
import './App.css';
import Input from './input';
import ShowImage from './home1';
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
          return <ShowImage
              hasce = {item.url}
              nkaragrutyun={item.discription}
         key={item.id} />
      });



    return (
      <div className="App">
        <Input />

          {info}

          <div className="containerSlid">
            <Slider />
          </div>
      </div>
    );
  }
}

export default App;
