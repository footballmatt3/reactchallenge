import React, { Component } from 'react'
import style from './Table.module.css'

class TableControl extends Component {

// Here the only thing different between the buttons is the class name. So you can write it more succinctly like this: 

// <button className = {this.props.selected ? style.selected : style.unselected} >

// The first style is when props.selected is true. 
// MF


  render() {
      if(this.props.selected === true){
        return (
            <button className={style.tablePage_Selected} onClick={this.props.handleClick.bind(this.props.keys)} value={this.props.keys}>
              {this.props.keys}
            </button>
          )
      }else{
        return (
            <button className={style.tablePage_Unselected}  onClick={this.props.handleClick.bind(this.props.keys)} value={this.props.keys}>
              {this.props.keys}
            </button>
          )
      }
    
  }
}
export default TableControl;