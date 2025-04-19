import React, { Component } from 'react';
import { DropdownButton, MenuItem } from 'react-bootstrap';
import List from './List';

class FilteredList extends Component {
    constructor(props) {
        super(props);

        // Add a new key/value pair in the state to keep track of type
        this.state = {
            search: "",
            type: "all"
        };
    }

    //  Update search string in state
    onSearch = (event) => {
        this.setState({ search: event.target.value.trim().toLowerCase() });
    }

    //Dropdown selection handler
    onFilter = (eventKey, event) => {
        this.setState({ type: eventKey });
    }

    // Filter by name and type
    filterItem = (item) => {
        const matchesSearch = item.name.toLowerCase().includes(this.state.search);
        const matchesType = this.state.type === "all" || item.type.toLowerCase() === this.state.type;
        return matchesSearch && matchesType;
    }

    render() {
        return (
            <div className="filter-list">
                <h1>Produce Search</h1>

                {/* DropdownButton with all filters */}
                <DropdownButton id="typeDropdown" title={`Type: ${this.state.type}`} onSelect={this.onFilter}>
                    <MenuItem eventKey="all">All</MenuItem>
                    <MenuItem eventKey="fruit">Fruit</MenuItem>
                    <MenuItem eventKey="vegetable">Vegetable</MenuItem>
                </DropdownButton>

                <input type="text" placeholder="Search" onChange={this.onSearch} />

                {/ Filtered List output */}
                <List items={this.props.items.filter(this.filterItem)} />
            </div>
        );
    }
}

export default FilteredList;
