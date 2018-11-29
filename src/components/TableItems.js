import React, { Component } from 'react'
import TableItem from './TableItem'

class TableItems extends Component {

  render() {
     
   let tableHeadings;

   tableHeadings = this.props.keys;

   let arrayTD;

   arrayTD = [];
   for(let i =0 ; i < tableHeadings.length ; i++){

    const keys = tableHeadings[i];
    arrayTD.push(this.props.table[keys]);
  }
  let tableItem;

  tableItem = arrayTD.map(table =>{

    return(
    <TableItem keys={table.id} tableitem={table}/>
    )
  });

  
    return (
      <tr>   
        {tableItem}       
      </tr>
    )
  }
}
export default TableItems;