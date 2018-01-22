import React from 'react';
import ReactDOM from 'react-dom';

class MyCounter extends React.Component {
    constructor(props) {
        super(props);
        this.state = { counter: 0 };
        this.clickHandler = this.clickHandler.bind(this);
    }

    clickHandler() {
        this.setState({ counter: this.state.counter + 1 });
    }

    render() {
        return (
            <div>
                <h1>setState piftalls</h1>
                <div>Counter is: {this.state.counter}</div>
                <button onClick={this.clickHandler}>1Up!</button>
            </div>
        )
    }
}

const mountNode = document.getElementById('app');
ReactDOM.render(<MyCounter />, mountNode);
