import React from 'react';
import ReactDOM from 'react-dom/client';

const Title = () => {
    return (<div id="title">
        <h1>This is Title From Functional Component.</h1>
    </div>)
};

const Header = () => {
    return (
        <div id='container'>
            <Title/>
            <div id='header'>
                <h2>This is Header Functional Component.</h2>
            </div>
        </div>
    );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Header/>);