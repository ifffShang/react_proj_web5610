import React from 'react';
import './App.css';
import Grid from './components/Grid';
import { CountProvider } from './components/CountContext';

function App() {
    return (
        <div className="App">
            <CountProvider>
                <Grid />
            </CountProvider>
        </div>
    );
}

export default App;
