import React from 'react';
import ReactDOM from 'react-dom';

const App = () => {
    let number = {a: 'string'}
    
    return (
        <div>
            <h1>Test page {number.a}</h1>
        </div>
    )
}

const root = document.getElementById('root');
ReactDOM.render(<App />, root);


