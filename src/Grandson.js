import React, { Component } from 'react';
import './Grandson.css';

class Grandson extends Component {
    constructor(props){
        super(props);
    }
  render() {
      
    return (
        <div style={{border: "1px solid red",margin: "10px"}}>{this.props.name}：
            <select onChange={this.props.handleSelect}>
                <option value="男">男</option>
                <option value="女">女</option>
            </select>
        </div>    
    );
  }
}

export default Grandson;   