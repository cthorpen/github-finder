import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

// Navbar functional component. has icon and title props
const Navbar = ({ icon, title }) => {

    return (
        <nav className="navbar bg-primary">
            <h1>
                <i className={icon}/> {title}
            </h1>
            <ul>
                <li>
                    <Link to='/'>Home</Link>
                </li>
                <li>
                    <Link to='/about'>About</Link>
                </li>
            </ul>
        </nav>
    );
};

// give props default value
Navbar.defaultProps = {
    title: 'GitHub Finder',
    icon: 'fab fa-github'
};

// not needed, but good to ensure everything is the correct type
//makees app more robust 
Navbar.propTypes = {
    title: PropTypes.string.isRequired,
    icon: PropTypes.string.isRequired
};

export default Navbar;
