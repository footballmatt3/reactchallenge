import React, { Component } from 'react'
import TableItem from './TableItem'
import style from './Table.module.css'

class TableItems extends Component {

  render() {
    console.log(Math.sign(this.props.remainder))
    
   let tableHeadings = this.props.keys;

   let arrayTD;

   arrayTD = [];
   for(let i = 0 ; i < tableHeadings.length ; i++){

    const keys = tableHeadings[i];
    
      arrayTD.push(this.props.table[keys]);
    
    
  }
  let tableItem;

  tableItem = arrayTD.map((table,index) =>{

    return(
    <TableItem keys={table.id} tableitem={table} column={index} />
    )
  });
  
  if(Math.sign(this.props.remainder) === 1){
    
    if(this.props.row % 2 == 1){
      return (
        <tr className={style.tableRowEven} >   
          {tableItem}       
        </tr>
      )
    }else{
      return (
        <tr className={style.tableRowOdd} >   
          {tableItem}       
        </tr>
      )
    }
  }else{
    if(this.props.row % 2 == 1){
      return (
        <tr className={style.tableRowEven} >   
          {tableItem}       
        </tr>
      )
    }else{
      return (
        <tr className={style.tableRowOdd} >   
          {tableItem}       
        </tr>
      )
    }

  }

    
    
  }
}
export default TableItems;