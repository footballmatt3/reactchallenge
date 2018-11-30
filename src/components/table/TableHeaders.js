import React, { Component } from 'react'
import style from './Table.module.css'

class TableHeaders extends Component {
  render() {
    let titleStr;
    titleStr = this.props.tableKey;
    titleStr = titleStr.charAt(0).toUpperCase() + titleStr.substring(1,titleStr.length)
    return (
      <th className={style.tableHeading}>{titleStr}</th>
    )
  }
}
export default TableHeaders;