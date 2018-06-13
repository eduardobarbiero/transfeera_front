import React, { PropTypes } from 'react';
import { Link } from 'react-router';

export const HeaderNav = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <a className="navbar-brand">Transfeera</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
                <div className="navbar-nav">
                    <Link className="nav-item nav-link" activeClassName="active" to="/home">Home</Link>
                    <Link className="nav-item nav-link" activeClassName="active" to="/states" >Estados</Link>                        
                </div>
            </div>
      </nav>

        
    );
};
