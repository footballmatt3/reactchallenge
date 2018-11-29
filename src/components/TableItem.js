import React, { Component } from 'react'

class Tableitem extends Component {
  render() {
    if(this.props.tableitem === true){
      return (    
        <td>Received</td>
      )
    } else if(this.props.tableitem === false){
      return (    
        <td>Pending</td>
      )
    }else{
      return (    
        <td>{this.props.tableitem}</td>
      )
    }
    
  }
}
export default Tableitem;