import React from 'react';
import './styles/Header.css';
import iconPage from '../images/default_icon.png';

const Header = () => (
    <div className="row header-container">
        <div className="col-sm-4">
            <img src={iconPage} alt="iconPage" className="header-icon-img" />
        </div>
        <div className="col-sm">
            <h1 className="header-title"> Economic indicators </h1>
        </div>
    </div>
);

export default Header;