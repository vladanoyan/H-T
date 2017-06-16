
import React, { Component } from 'react';
import './App.css';
import Lightbox from 'react-image-lightbox';



const images1 = [
    {
        id:"01",
        url:"01.jpg",
    },
    {
        id:"02",
        url:"02.jpg",
    },
    {
        id:"03",
        url:"03.jpg",
    },
    {
        id:"04",
        url:"04.jpg",
    },
    {
        id:"05",
        url:"05.jpg",
    },
    {
        id:"06",
        url:"06.jpg",
    },
    {
        id:"07",
        url:"07.jpg",
    },
    {
        id:"08",
        url:"08.jpg",
    },
    {
        id:"09",
        url:"09.jpg",
    }


];
const images = [
    {url: ["01.jpg", "10.jpg", "19.jpg"]    //1
    },
    {url: ["02.jpg", "11.jpg", "20.jpg"]    //2
    },
    {url: ["03.jpg", "12.jpg", "21.jpg"]    //3
    },
    {url: ["04.jpg", "13.jpg", "22.jpg"]    //4
    },
    {url: ["05.jpg", "14.jpg", "23.jpg"]    //5
    },
    {url: ["06.jpg", "15.jpg", "24.jpg"]    //6
    },
    {url: ["07.jpg", "16.jpg", "25.jpg"]    //7
    },
    {url: ["08.jpg", "17.jpg", "26.jpg"]    //8
    },
    {url: ["09.jpg", "18.jpg", "27.jpg"]    //9
    },
];
console.log(images);
class Slider extends Component {
constructor(props){
    super(props);
    this.state={
        open:false
    }
}

    fi() {
        this.setState({open: true});

    }

    left(){
        alert("left");
    }

    right(){
        alert("right");
    }

    render() {
        const {open}=this.state;
        const img = images.map(function(item,index){
            return <div className="slider">
                <img key={index}
                src ={require(`./thumbs/${item.url[0]}`)} />
            </div>

        });



        return (
            <div className="containerSlid">
                <div>
                    <i onClick={this.left.bind(this)} className='fa fa-angle-left'></i>
                    <div onClick={this.fi.bind(this)}>{img[0]}</div>
                    <i onClick={this.right.bind(this)} className="fa fa-angle-right"></i>
                </div>
                <div>
                    <i onClick={this.left.bind(this)} className='fa fa-angle-left'></i>
                    <div onClick={this.fi.bind(this)}>{img[1]}</div>
                    <i onClick={this.right.bind(this)} className="fa fa-angle-right"></i>
                </div>
                <div>
                    <i onClick={this.left.bind(this)} className='fa fa-angle-left'></i>
                    <div onClick={this.fi.bind(this)}>{img[2]}</div>
                    <i onClick={this.right.bind(this)} className="fa fa-angle-right"></i>
                </div>
                <div>
                    <i onClick={this.left.bind(this)} className='fa fa-angle-left'></i>
                    <div onClick={this.fi.bind(this)}>{img[3]}</div>
                    <i onClick={this.right.bind(this)} className="fa fa-angle-right"></i>
                </div>
                <div>
                    <i onClick={this.left.bind(this)} className='fa fa-angle-left'></i>
                    <div onClick={this.fi.bind(this)}>{img[4]}</div>
                    <i onClick={this.right.bind(this)} className="fa fa-angle-right"></i>
                </div>
                <div>
                    <i onClick={this.left.bind(this)} className='fa fa-angle-left'></i>
                    <div onClick={this.fi.bind(this)}>{img[5]}</div>
                    <i onClick={this.right.bind(this)} className="fa fa-angle-right"></i>
                </div>
                <div>
                    <i onClick={this.left.bind(this)} className='fa fa-angle-left'></i>
                    <div onClick={this.fi.bind(this)}>{img[6]}</div>
                    <i onClick={this.right.bind(this)} className="fa fa-angle-right"></i>
                </div>
                <div>
                    <i onClick={this.left.bind(this)} className='fa fa-angle-left'></i>
                    <div onClick={this.fi.bind(this)}>{img[7]}</div>
                    <i onClick={this.right.bind(this)} className="fa fa-angle-right"></i>
                </div>
                <div>
                    <i onClick={this.left.bind(this)} className='fa fa-angle-left'></i>
                    <div onClick={this.fi.bind(this)}>{img[8]}</div>
                    <i onClick={this.right.bind(this)} className="fa fa-angle-right"></i>
                </div>


                {open &&
                <Lightbox
                    onCloseRequest={() => this.setState({open: false})}
                />
                }
            </div>


        );
    }
}

export default Slider;
