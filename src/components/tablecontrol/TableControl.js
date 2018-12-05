import React, { Component } from 'react'
import style from './TableControl.module.css'

class TableControl extends Component {

// Here the only thing different between the buttons is the class name. So you can write it more succinctly like this: 

// <button className = {this.props.selected ? style.selected : style.unselected} >

// The first style is when props.selected is true. 
// MF


  render() {
      
        return (
            <button className={this.props.selected ? style.selected_page : style.unselected_page} onClick={this.props.handleClick.bind(this.props.keys)} value={this.props.keys}>
              {this.props.keys}
            </button>
          )
    
  }
}
export default TableControl;