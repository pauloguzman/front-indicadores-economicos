import React from 'react';
import Indicator from '../components/Indicator';

class EconomicIndicators extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: {
                "cobre": {
                    "key": "cobre",
                    "name": "Precio del Cobre, dólares por libra",
                    "unit": "dolar",
                    "date": 1584489600,
                    "value": 2.39,
                    "formatted_date": "2020-03-17"
                },
                "dolar": {
                    "key": "dolar",
                    "name": "Dólar observado",
                    "unit": "pesos",
                    "date": 1584489600,
                    "value": 855.09,
                    "formatted_date": "2020-03-17"
                },
                "euro": {
                    "key": "euro",
                    "name": "Euro",
                    "unit": "pesos",
                    "date": 1584489600,
                    "value": 938.42,
                    "formatted_date": "2020-03-17"
                },
                "ipc": {
                    "key": "ipc",
                    "name": "Indice de Precios al Consumidor (Var. c/r al período anterior)",
                    "unit": "porcentual",
                    "date": 1577836800,
                    "value": 1.1,
                    "formatted_date": "2019-12-31"
                },
                "ivp": {
                    "key": "ivp",
                    "name": "Indice de valor promedio",
                    "unit": "pesos",
                    "date": 1585800132,
                    "value": 29683.19,
                    "formatted_date": "2020-04-02"
                },
                "oro": {
                    "key": "oro",
                    "name": "Precio del Oro, dólares por onza",
                    "unit": "dolar",
                    "date": 1584576000,
                    "value": 1473.2,
                    "formatted_date": "2020-03-18"
                },
                "plata": {
                    "key": "plata",
                    "name": "Precio de la Plata, dólares por onza",
                    "unit": "dolar",
                    "date": 1584576000,
                    "value": 11.69,
                    "formatted_date": "2020-03-18"
                },
                "uf": {
                    "key": "uf",
                    "name": "Unidad de fomento",
                    "unit": "pesos",
                    "date": 1585800132,
                    "value": 28604.83,
                    "formatted_date": "2020-04-02"
                },
                "utm": {
                    "key": "utm",
                    "name": "Unidad tributaria mensual",
                    "unit": "pesos",
                    "date": 1583020800,
                    "value": 50021,
                    "formatted_date": "2020-02-29"
                },
                "yen": {
                    "key": "yen",
                    "name": "Yen",
                    "unit": "dolar",
                    "date": 1584489600,
                    "value": 107.33,
                    "formatted_date": "2020-03-17"
                }
            }
        }
    }
    render() {
        return (
            <div className="container-economic-indicators">
                <div className="header">
                    <div className="header-logo">
                        <image src="" alt="header-logo"/>
                    </div>
                    <div>
                        <h1>Economic Indicators</h1>
                    </div>
                </div>
                <div>
                    <Indicator
                        
                    />
                </div>
            </div>
        );
    } 
}

export default EconomicIndicators;