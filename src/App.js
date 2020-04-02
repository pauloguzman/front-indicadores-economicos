import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import EconomicIndicators from './pages/EconomicIndicators';

function App() {
    return (
        <BrowserRouter basename="/economic-indicators">
            <EconomicIndicators/>
        </BrowserRouter>
    );
}

export default App;