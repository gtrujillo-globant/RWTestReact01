import React from 'react';
import ReactDOM from 'react-dom';

class UncontrolledComponent extends React.Component {
    state = { counter: 0 };

    clickHandler = () => {
        this.setState(
            (state) => ({ counter: state.counter + 1 }),
            () => { console.log('%cIncreased uncontrolled state to new value: %s','color: green',this.state.counter); }
        );
    };

    render() {
        return (
            <React.Fragment>
                <div>Uncontrolled: {this.state.counter}</div>
                <button onClick={this.clickHandler}>
                    Increase uncontrolled counter from the inside
                </button>
            </React.Fragment>
        );
    }
}

class ControlledComponent extends React.Component {
    render() {
        return (
            <div>Controlled: {this.props.counter}</div>
        );
    }
}

class ControllableComponent extends React.Component {
    state = { counter: 0 };

    componentWillReceiveProps(nextProps) {
        console.log(
            '%c Props changed from %s to %s',
            'color: blue',
            this.props.counter,
            nextProps.counter
        )
        if (
            this.props.counter !== nextProps.counter
            && this.state.counter !== nextProps.counter
        ) {
            this.setState({ counter: nextProps.counter});
        }
    }

    render() {
        return (
            <div>Controllable: {this.state.counter}</div>
        );
    }
}

class MyContainer extends React.Component {
    state = { counter: 0 };

    uncontrolledClickHandler = () => {
        this.uncontrolled.setState(
            (state) => ({ counter: state.counter - 1}),
            () => { console.log('%cDecreased uncontrolled state to new value: ','color:pink',this.uncontrolled.state.counter); }
        );
    }

    controllableClickHandler = () => {
        this.setState((state) => ({ counter: state.counter + 1}));
    }

    render () {
        return (
            <React.Fragment>
                <UncontrolledComponent
                    ref={(comp) => { this.uncontrolled = comp; }}
                />
                <button onClick={this.uncontrolledClickHandler}>
                    Decrease uncontrolled counter from the outside
                </button>
                <ControlledComponent counter={this.state.counter} />
                <ControllableComponent counter={this.state.counter} />
                <button onClick={this.controllableClickHandler}>
                    Increase controlled+controllable counters from the outside
                </button>
            </React.Fragment>
        )
    }
}

const mountNode = document.getElementById('app');
ReactDOM.render(<MyContainer />, mountNode);
