import "./Header.css";
import React from 'react';
import logo from "../../img/mealdb.png";
import fb from "../../img/facebook_icon.png"; 
import twitter from "../../img/twitter_icon.png"; 

const Header = (props) => {

  
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light ">
                <div className="container">
                    <a className="navbar-brand" href=".">
                        <img src={logo} alt="Logo"/>
                    </a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target=".navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse nav-items" id="navbarSupportedContent">
                    <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <a className="nav-link active text-white" aria-current="page" href=".">Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link text-white" href=".">API</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link text-white" href=".">Forum</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link text-white" href=".">
                                <img src={fb} alt="fb" />
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link text-white" href=".">
                                <img src={twitter} alt="twitter" />

                            </a>
                        </li>
                    </ul>
                    <div className="d-flex ms-5">
                        <input onChange={props.handleChange} name="input" value={props.input?.input}className="form-control me-2" type="search" placeholder="Search Food" aria-label="Search"/>
                        <button onClick={() => props.handleSearch(props.input)} className="search-btn ">Search</button>
                    </div>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Header;