import React, { Fragment } from 'react';
import Header from '../components/Header';
import IndicatorList from '../components/IndicatorsList';

const EconomicIndicators = ({data}) => (
    <Fragment>
        <Header />
        <IndicatorList 
            indicators = { data }
        />
    </Fragment>
);

export default EconomicIndicators;