import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import EconomicIndicatorsContainer from './pages/EconomicIndicatorsContainer';
import NotFound from './pages/404';

const App = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/economic-indicators" component={EconomicIndicatorsContainer} />
                <Route component={NotFound} />
            </Switch>
        </BrowserRouter>
    );
}

export default App;