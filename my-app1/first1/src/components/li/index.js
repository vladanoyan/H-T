
import React, { Component } from 'react';


class Li extends Component {

    render() {

        return (
            <div>

        {this.props.pop1.id +" = "+ this.props.pop1.anun}

            </div>
        );
    }
}

export default Li;
