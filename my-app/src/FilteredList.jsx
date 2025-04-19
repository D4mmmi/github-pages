import React, { Component } from 'react';
import { Dropdown } from 'react-bootstrap';
import List from './List';

class FilteredList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      search: "",
      type: "all"
    };
  }

  // Handles the search bar input
  onSearch = (event) => {
    this.setState({ search: event.target.value.trim().toLowerCase() });
  }

  // Handles dropdown selection
  handleSelect = (eventKey, event) => {
    this.setState({ type: eventKey });
  }

  // Filters each item based on search and type
  filterItem = (item) => {
    const matchesSearch = item.name.toLowerCase().includes(this.state.search);
    const matchesType = this.state.type === "all" || item.type === this.state.type;
    return matchesSearch && matchesType;
  }

  render() {
    return (
      <div className="filter-list">
        <h1>Produce Search</h1>

        {/* Dropdown to filter by type */}
        <Dropdown onSelect={this.handleSelect}>
          <Dropdown.Toggle variant="primary" id="dropdown-basic">
            {this.state.type.charAt(0).toUpperCase() + this.state.type.slice(1)}
          </Dropdown.Toggle>

          <Dropdown.Menu>
            <Dropdown.Item eventKey="all">All</Dropdown.Item>
            <Dropdown.Item eventKey="fruit">Fruit</Dropdown.Item>
            <Dropdown.Item eventKey="vegetable">Vegetable</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>

        {/* Search input */}
        <input
          type="text"
          placeholder="Search"
          onChange={this.onSearch}
          style={{ marginTop: "10px", padding: "5px", width: "100%" }}
        />

        {/* Filtered list of items */}
        <List items={this.props.items.filter(this.filterItem)} />
      </div>
    );
  }
}

export default FilteredList;
