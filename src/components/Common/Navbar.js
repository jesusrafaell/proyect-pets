import React  from 'react';

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
            <a className="navbar-brand" href="#">PETS</a>
            <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
              <li className="nav-item active">
                <a className="nav-link" href="/">Home<span className="sr-only">(current)</span></a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Buttom 2</a>
              </li>
              <li className="nav-item">
                <a className="nav-link disabled" href="#">Buttom 3</a>
              </li>
            </ul>
          </div>
        </nav>
    );
};

export default Navbar;