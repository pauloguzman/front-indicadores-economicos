import React from 'react';
import './styles/Indicator.css';
import emptyIcon from '../images/default_icon.png';
import cobreIcon from '../images/copper_icon.png';
import dolarIcon from '../images/dollar_icon.png';
import euroIcon from '../images/euro_icon.png';
import goldenIcon from '../images/golden_icon.png';
import yenIcon from '../images/yen_icon.png';

const Indicator = ({ keyIndicator, name, unit, date, value, formatted_date }) => (
    <div className="container-indicator" style={{backgroundColor: 'blue'}}>
        <div className="indicator-body">
            <div className="row">
                <div className="col-2">
                    <img src={IconIndicator(keyIndicator)} alt="icon-indicator" className="indicator-img"/>
                </div>
                <div className="col-6 indicator-info">
                    <h1>{keyIndicator}</h1>
                </div>
            </div>
        </div>
    </div>
);

const IconIndicator = (key) => {
    switch (key) {
        case 'cobre':
            return cobreIcon;
        case 'dolar':
            return dolarIcon;
        case 'euro':
            return euroIcon;
        case 'oro':
            return goldenIcon;
        case 'yen':
            return yenIcon;
        default:
            return emptyIcon;
    }
}

export default Indicator;