import React, { Component } from 'react';
import Table from './Table'
import TableControls from '../components/table/TableControls'
import PageSelector from'../components/table/PageSelector'
import './App.css';


class App extends Component {
  constructor(){
    super();
    this.state = {
      allTable: [],
      pageNumber: 1,
      totalItems:1,
      itemsPerPage:1
    }
    this.handleChangePage = this.handleChangePage.bind(this);
    this.handlePageSelectChange = this.handlePageSelectChange.bind(this);
  }
  componentWillMount(){
    this.setState({
      allTable:[
        {
          id: 1,
          projectName: 'Dildos',
          finished: '2018-07-18',
          price: 1000,
          paid: true
        },
        {
          id: 2,
          projectName: 'Hypnotise Cats',
          finished: '2018-06-13',
          price: 1400,
          paid: true
        },
        {
          id: 3,
          projectName: 'How to get with elderly ladies',
          finished: '2018-02-18',
          price: 1200,
          paid: true
        },
        {
          id: 4,
          projectName: 'How to lose at poker',
          finished: '2018-07-18',
          price: 1100,
          paid: true
        },
        {
          id: 5,
          projectName: 'How to get Rich',
          finished: '2018-07-18',
          price: 990,
          paid: false
        },
        {
          id: 6,
          projectName: 'Cabbage Soup',
          finished: '2018-07-18',
          price: 100,
          paid: false
        },
        {
          id: 7,
          projectName: 'Ivory Hunting for Beginners',
          finished: '2018-07-18',
          price: 600,
          paid: true
        },
        {
          id: 8,
          projectName: 'Dance for Love',
          finished: '2018-07-18',
          price: 500,
          paid: true
        },
        {
          id: 9,
          projectName: 'How to mend Cotton Balls',
          finished: '2018-07-18',
          price: 3400,
          paid: false
        }
      ]
      
    })
  }
  handleChangePage(page){
    
    this.setState({pageNumber: page.target.value})
  }
  handlePageSelectChange(selection){
    this.setState({itemsPerPage: selection.target.value})
  }
  render() {
    return (
      <div className="App">
        <Table allTable={this.state.allTable} pageNumber={this.state.pageNumber} itemsPerPage={this.state.itemsPerPage}/>
        <TableControls pageNumber={this.state.pageNumber} totalItems={this.state.allTable.length} changePage={this.handleChangePage.bind(this)} itemsPerPage={this.state.itemsPerPage}/>
        <PageSelector itemsPerPage={this.state.itemsPerPage} onChange={this.handlePageSelectChange}/>
      </div>
    );
  }
}

export default App;
