import React, { Component } from 'react'
import TableItems from '../components/TableItems'
import TableHeaders from '../components/TableHeaders';

class Table extends Component {

    constructor(props){
        super(props);
        this.state = {
            page: 0,
            items:0
        }
    }    
    
  render() {
      let tableItems; 
      let tableItemsKeys;
      let tableObj;
      let tableKeys;     
      if(this.props.allTable){
        
        tableObj = this.props.allTable;

        tableKeys = Object.keys(tableObj[0]);

        tableItemsKeys = tableKeys.map(tableKey => {
            return(
            <TableHeaders key={tableKey} tableKey={tableKey}/>
            );
        })
        
        let wholeTable
        wholeTable = this.props.allTable

        let pageNumberStartIndex = (this.props.pageNumber - 1) * this.props.itemsPerPage

        let pageNumberEndIndex = this.props.pageNumber * this.props.itemsPerPage

        wholeTable = wholeTable.slice(pageNumberStartIndex,pageNumberEndIndex);
        

        tableItems = wholeTable.map(table =>{
            
            return(
            <TableItems keys={tableKeys} table={table} />
            )
        })
        return (
            <div>
              <h3>Latest Projects</h3>
              <table>
              <tbody>
              <tr>{tableItemsKeys}</tr>
              {tableItems}
              </tbody>
              </table>
            </div>
          )
      } else {
        return (
            <div>
              <h3>Latest Projects</h3>
              <h3>Nothing to Display</h3>
            </div>
          )
      }
     
  }
}
export default Table;