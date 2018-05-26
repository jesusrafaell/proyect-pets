import React  from 'react';
import './Navbar.css';

const Navbar = () => {
    return (
        <div className="navbar" id="nav-bar">
          <ul className="navig">
            <li className="item proyectName"><p>Name Proyect</p></li>
            <li className="item"><a className="active" href="#">Home</a></li>
            <li className="item"><a href="#">Pictures</a></li>
            <li className="item"><a href="#">Add Pictures</a></li>
          </ul>
        </div>
    );
};

export default Navbar;