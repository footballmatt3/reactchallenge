import React, { Component } from 'react'

class PageSelector extends Component {
  render() {
    return (
        <div>
            <label>Items Per Page:</label>
            <select onChange={this.props.onChange.bind(this)}>
                <option value="1">1</option>
                <option value="5">5</option>
                <option value="10">10</option>
            </select>
        </div>
      
    )
  }
}
export default PageSelector;
