import React from 'react';
import ReactDOM from 'react-dom';

class MyComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = { name: props.name };
    }

    render() {
        return (
            <div>Hello, {this.state.name}</div>
        )
    }
}

class MyContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = { name: "Click on the button..." };
    }

    names = ["Marty Mc. Fly", "Emmett L. Brown", "George Mc. Fly", "Biff Tannen", "Lorraine Baines"];

    clickHandler = () => {
        console.log('Name (before): ', this.state.name);
        const index = Math.floor(Math.random()*this.names.length);
        this.setState(
            { name: this.names[index] },
            () => {
                console.log('Name (after): ', this.state.name);
            }
        );
    }

    render() {
        return (
            <React.Fragment>
                <MyComponent name={this.state.name} />
                <button onClick={this.clickHandler}>Change name!</button>
            </React.Fragment>
        )
    }
}

const mountNode = document.getElementById('app');
ReactDOM.render(<MyContainer />, mountNode);
