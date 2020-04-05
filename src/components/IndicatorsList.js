import React, { Fragment } from 'react';
import Indicator from './Indicator';

const IndicatorList = ({indicators}) => (
    <Fragment>
        {
            indicators.map((indicator) => (
                <Indicator 
                    key = { indicator.key }
                    keyIndicator = { indicator.key }
                    { ...indicator }
                />
            ))
        }
    </Fragment>
);

export default IndicatorList;

