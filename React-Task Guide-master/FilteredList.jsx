import React, { Component } from 'react';
import { DropdownButton, MenuItem } from 'react-bootstrap';
import List from './List';

class FilteredList extends Component {
  constructor(props) {
    super(props);

    // Add "type" to state with default value "All"
    this.state = {
      search: "",
      type: "All"
    };
  }

  onSearch = (event) => {
    this.setState({ search: event.target.value.trim().toLowerCase() });
  }

  // Set the state of "type" depending on selected filter
  onFilter = (eventKey) => {
    this.setState({ type: eventKey });
  }

  // Filter by both name and type
  filterItem = (item) => {
    const matchesSearch = item.name.toLowerCase().includes(this.state.search);
    const matchesType = this.state.type === "All" || item.type === this.state.type;
    return matchesSearch && matchesType;
  }

  render() {
    return (
      <div className="filter-list">

        {/* Dropdown Menu */}
        <DropdownButton title={`Type: ${this.state.type}`} id="dropdown-type" onSelect={this.onFilter}>
          <MenuItem eventKey="All">All</MenuItem>
          <MenuItem eventKey="Fruit">Fruit</MenuItem>
          <MenuItem eventKey="Vegetable">Vegetable</MenuItem>
        </DropdownButton>

        <input type="text" placeholder="Search" onChange={this.onSearch} />

        <List items={this.props.items.filter(this.filterItem)} />
      </div>
    );
  }
}

export default FilteredList;
