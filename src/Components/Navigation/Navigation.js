import React from 'react';
import background from '../../images/logo.png';
import './Navigation.css';

const Navigation = () => {
    return (
        <div className="fix">
          <div className="header">  

            <header className="float-left">
                <div className="logo img-fluid" style={{backgroundImage:`url(${background})`}}>
                    <p className="logo_p">Robo Mechatronics Association Bangladesh</p>
                </div>
            </header>  

            <nav className="navbar navbar-expand-xl navbar-dark bg-light d-inline-block">
                <button className="navbar-toggler" type="button" data-toggle="collapse"
                    data-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false"
                    aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarTogglerDemo03">
                    <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
                        <li className="nav-item">
                            <a className="nav-link" href="/event">EVENT</a>
                        </li>
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href=" " id="navbarDropdown" role="button"
                                data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                MEMBERS
                            </a>
                            <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                                <a className="dropdown-item" href>ADVISORY COMMITTEE</a>
                                <a className="dropdown-item" href>ALUMNI MEMBERS</a>
                                <a className="dropdown-item" href>COMMITTEE MEMBERS</a>
                                <a className="dropdown-item" href>EXECUTIVE MEMBERS</a>
                            </div>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/blog">BLOG</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/gallery">GALLERY</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="tutorials">TUTORIALS</a>
                        </li>
                    </ul>
                </div>
            </nav>
            <div className="clearfix"></div>
        </div>
      </div>
    );
};

export default Navigation;