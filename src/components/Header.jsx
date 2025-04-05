import "../styles/Header.css";
import { useState } from "react";
import {Link} from "react-router-dom"




export const SignUpButton = () => {
  return (
    <button className="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition-colors duration-300">
      <a href="#">Sign Up</a>
    </button>
  );
};

const Header = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleNavBar = () => {
    setIsVisible(!isVisible);
  };

  // Dynamic nav items
  const navItems = [
    { name: "Home", link: "#home" },
    { name: "Sales", link: "#sales" },
    { name: "Travels", link: "#travel" },
    { name: "Booking", link: "#booking" },
    { name: "Blog", link: "#blog" },
  ];

  return (
    <header className="bg-white shadow-md py-4 px-6">
      <div className="flex justify-between items-center">
        <p className="text-2xl font-bold text-blue-600 text-nowrap">
          <a href="#" className="text-nowrap">
            Travels and <br /> Tours
          </a>
        </p>

        {/* Hamburger Icon for Mobile */}
        <div className="lg:hidden flex items-center" onClick={toggleNavBar}>
          <img
            src="https://i.ibb.co/5Y1bFZJ/Nav-bar.png"
            alt="Nav-bar"
            className="w-8 h-8 cursor-pointer"
          />
        </div>

        {/* Navbar Items - Desktop */}
        <nav className="hidden lg:flex space-x-8 text-xl font-medium">
          {navItems.map((item) => (
            <a
              href={item.link}
              key={item.name}
              className="text-gray-800 hover:text-blue-600 transition-colors duration-300">
              {item.name}
            </a>
          ))}
        </nav>

        <SignUpButton />
      </div>

      {/* Navbar Items - Mobile */}
      <div
        className={`lg:hidden mt-4 space-y-4 text-lg transition-all duration-300 ${
          isVisible ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
        } overflow-hidden`}>
        <ul className="bg-white shadow-md rounded-lg">
          {navItems.map((item) => (
            <li key={item.name}>
              <a
                href={item.link}
                className="block px-4 py-2 text-gray-800 hover:bg-blue-500 hover:text-white transition-colors duration-300">
                {item.name}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
};

export default Header;

