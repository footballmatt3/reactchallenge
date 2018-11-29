import React, { Component } from 'react'

class TableControl extends Component {


  render() {
      if(this.props.selected === true){
        return (
            <button onClick={this.props.handleClick.bind(this.props.keys)} value={this.props.keys}>
              {this.props.keys}
            </button>
          )
      }else{
        return (
            <button  onClick={this.props.handleClick.bind(this.props.keys)} value={this.props.keys}>
              {this.props.keys}
            </button>
          )
      }
    
  }
}
export default TableControl;