import React, { Component } from 'react';
import Grandson from './Grandson';

class Input extends Component {
    constructor(props){
        super(props);
    }
  render() {
      console.log(this.props,'props')
    return (
        <div style={{border: "1px solid green",margin: "10px"}}>
            {this.props.name}：<input onChange={this.props.handleVal}/>
            <Grandson name="性别" handleSelect={this.props.handleSelect}/>
    </div>       
    );
  }
}

export default Input;   