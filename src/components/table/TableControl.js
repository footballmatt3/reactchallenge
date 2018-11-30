import React, { Component } from 'react'
import style from './Table.module.css'

class TableControl extends Component {


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