import React, { Component } from 'react'

class TableHeaders extends Component {
  render() {
    let titleStr;
    titleStr = this.props.tableKey;
    titleStr = titleStr.charAt(0).toUpperCase() + titleStr.substring(1,titleStr.length)
    return (
      <th>{titleStr}</th>
    )
  }
}
export default TableHeaders;