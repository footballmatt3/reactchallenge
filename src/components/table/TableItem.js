import React, { Component } from 'react'
import style from './Table.module.css'

class Tableitem extends Component {
  render() {   
    
    if(this.props.column === 0){
      if(this.props.tableitem === true){
        return (    
          <td className={style.tableData1c}>Received</td>
        )
      } else if(this.props.tableitem === false){
        return (    
          <td className={style.tableData1c}>Pending</td>
        )
      }else{
        return (    
          <td className={style.tableData1c}>{this.props.tableitem}</td>
        )
      }
    }else{
      if(this.props.tableitem === true){
        return (    
          <td className={style.tableData}>Received</td>
        )
      } else if(this.props.tableitem === false){
        return (    
          <td className={style.tableData}>Pending</td>
        )
      }else{
        return (    
          <td className={style.tableData}>{this.props.tableitem}</td>
        )
      }
    }
 
    
  }
}
export default Tableitem;