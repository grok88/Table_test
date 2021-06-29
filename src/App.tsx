import React from 'react';
import './App.css';
import {TableRow} from './components/Table/TableRow';

function App() {
    return (
        <div className="App">
            <TableRow dataUrl={'https://trycode.pw/c/FW1NE.json'}/>
            <TableRow dataUrl={'https://trycode.pw/c/IPHCS.json'}/>
        </div>
    );
}

export default App;
