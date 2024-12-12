import "../styles/Header.css";
import { useState } from "react";

export const SignUpButton = () => {
  return (
    <button className="sign-up">
      <a href="#">Sign Up</a>
    </button>
  );
};

const Header = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleNavBar = () => {
    setIsVisible(!isVisible);
  };

  return (
    <header className="header">
      <p className="logo">
        <a href="#">
          Travels and <br />
          Tours
        </a>
      </p>

      <SignUpButton />

      <nav>
        <div className="nav text-xl align-center">
          <img
            src="https://i.ibb.co/5Y1bFZJ/Nav-bar.png"
            alt="Nav-bar"
            onClick={toggleNavBar}
          />
        </div>

        <div className={`navbar-items ${isVisible ? "show" : "hide"}`}>
          <ul>
            <li>
              <a href="/Sales-section">Sales</a>
            </li>
            <li>
              <a href="/Travels">Travels</a>
            </li>
            <li>
              <a href="/Booking">Booking</a>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};
export default Header;
