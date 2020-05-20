import React from 'react';
import PropTypes from 'prop-types';
import './header.css';
import { Link } from 'react-router-dom';

function Header(prop) {
    return (
        <div>
            <div className="navBar">
                <div className="navmain">
                    <ul>
                    <li className="heading">{prop.branding} &spades;</li>
                    <li className="navButton side">
                        <Link to="/" > Home </Link>
                    </li>
                    <li className="navButton side">
                        <Link to="/contact/add" > ADD </Link>
                    </li>

                    </ul>
                </div>
            </div>
        </div>
    )
};
Header.defaultProps = {
    branding:"My app"
}

Header.propTypes={
    branding: PropTypes.string.isRequired
}

export default Header;
