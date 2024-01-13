import React from 'react';
import ReactDOM from 'react-dom/client';

const jsxHeader = (<h1 id='header'>
    Hello World From JSX!
    </h1>);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(jsxHeader);