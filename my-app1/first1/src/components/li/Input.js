
import React, { Component } from 'react';
import './modal.css';



class Input extends Component {
constructor(props){
    super(props)
    this.state={
        isValid:true
    }

}

    onChange(evt){
        if (this.props.isRequired && evt.target.value == '' ){
            this.setState({isValid:false})
        }
        else{
            this.setState({isValid:true})
        }


    }

    render() {


        const className = this.state.isValid ? '' : 'hidden3 shake';

        return (
            <div>
                <input
                    type={this.props.type}
                    value={this.props.value}
                    onChange={this.onChange.bind(this)}
                    className={ className }
                />

            </div>
        );
    }
}

export default Input;
