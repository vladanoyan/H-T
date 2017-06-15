
import React, { Component } from 'react';
import './App.css';
import Lightbox from 'react-image-lightbox';



class ShowImage extends Component {
    constructor(props){
        super(props);
        this.state={
            bace:false
        }
    }



    render() {
        const {bace}=this.state;
        let {hasce, nkaragrutyun} = this.props;
        hasce = require(`./image/${hasce}`);

        return (
                <div id="nk">
                    <img id="nk" src={hasce} onClick={()=>this.setState({bace:true})}/>
                    <div>{nkaragrutyun}</div>
                    {bace &&
                    <Lightbox
                        mainSrc={hasce}
                        onCloseRequest ={()=> this.setState({bace:false})}
                    />
                    }
                </div>

    );
    }
}

export default ShowImage;
