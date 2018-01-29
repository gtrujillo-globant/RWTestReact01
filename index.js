import React from 'react';
import ReactDOM from 'react-dom';

class MyComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = { name: props.name };
    }

    componentWillReceiveProps(nextProps) {
        if (this.props.name != nextProps.name) {
            this.setState({ name: nextProps.name });
        }
        else {
            console.log("Didn't change anything");
        }
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

    clickHandler = () => {
        console.log('Name (before): ', this.state.name);
        this.setState(
            nameRouletteGen(`${this.state.name} says: `),
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

const nameRouletteGen = (text) => {
    const nameRoulette = (state) => {
        const names = ["Marty Mc. Fly", "Emmett L. Brown", "George Mc. Fly", "Biff Tannen", "Lorraine Baines"]; 
        const index = Math.floor(Math.random()*names.length);
        let quote = "";
        switch (state.name) {
            case "Marty Mc. Fly":
                quote = "Nobody calls me chicken!";
                break;
            case "Emmett L. Brown":
                quote = "Great Scott!!!";
                break;
            case "Biff Tannen":
                quote = "Do like a soldier and leave";
                break;
        }
        if (quote) console.log(`%c${text}"${quote}"`, 'color: blue');
        if (names[index] === 'Biff Tannen') {
            console.log("%cSorry, Biff, we don't like you", 'color:red');
            return undefined;
        }
        return { name: names[index] };
    }

    return nameRoulette;
}

const mountNode = document.getElementById('app');
ReactDOM.render(<MyContainer />, mountNode);
