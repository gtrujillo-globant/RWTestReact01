import React from 'react';
import ReactDOM from 'react-dom';

const MyComponent = () => (
    <div>Hello, React</div>
);

const mountNode = document.getElementById('app');
ReactDOM.render(<MyComponent />, mountNode);
