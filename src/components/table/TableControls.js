import React, { Component } from 'react'
import TableControl from './TableControl';

class TableControls extends Component {
    



  render() {

    // Why don't you just write this as " let pagesArray = [] " ? MF

    let pagesArray;
    pagesArray = [];
    let pagesAmount;
    pagesAmount = 0;

    for(let i=1;i < this.props.totalItems; i++){
        if(i===1 || (i % this.props.itemsPerPage) === 1 || this.props.itemsPerPage == 1) {
        pagesAmount++
        if(pagesAmount == this.props.pageNumber){
            
            pagesArray.push({
                page: pagesAmount,
                selected:true
            });
        }else{            
            pagesArray.push({
                page: pagesAmount,
                selected:false
            });
        }
        
        }
    }
    let PagePages;
    PagePages = pagesArray.map(pages =>{
            
        return(
        <TableControl keys={pages.page} selected={pages.selected} handleClick={this.props.changePage.bind(this)}/>
        )
    })
    return(
        <div >
            {PagePages}
        </div>
    )
    }
}
export default TableControls;