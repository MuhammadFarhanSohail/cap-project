import React from 'react';
import './Header.css';
import q1 from "./images/q1.jpg";

function Header() {
    return(
        <header className="header">
            <div className="logo-container">
            <img src={q1} alt="Little Lemon Logo" className="logo" />
            </div>
            <h1>Little Lemon</h1>
      <p>Your Perfect Destination for Fresh and Delicious Food</p>
        </header>

    );
}

export default Header;