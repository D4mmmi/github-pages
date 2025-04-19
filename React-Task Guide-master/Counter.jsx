import React, { Component } from 'react';

class Counter extends Component {
    constructor(props) {
        super(props);

        this.state = {
            count: 5
        };
    }

    incrementCount = () => {
        this.setState({
            count: this.state.count + 1
        });
    }

    render() {
        return (
            <div className="counter">
                {/* TODO (Counter): display the value of count */}
                <p>Count: {this.state.count}</p>

                {/* TODO (Counter): add a button that calls incrementCount() when clicked */}
                <button onClick={this.incrementCount}>Increment</button>
            </div>
        );
    }
}

export default Counter;
