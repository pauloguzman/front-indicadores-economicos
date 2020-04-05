import React from 'react';
import Loading from '../components/Loading';
import FatalError from './500';
import EconomicIndicators from './EconomicIndicators';
import useFetch from '../hooks/useFetch';
import url from '../config';

const EconomicIndicatorsContainer = () => {
    const { data, loading, error } = useFetch(`${url}/indicadores/today`);

    if (loading) {
        return <Loading />;
    }
    if (error) {
        return <FatalError />;
    }

    return <EconomicIndicators
        data = { data }
    />
}

export default EconomicIndicatorsContainer;