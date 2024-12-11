import "../styles/Header.css";

// need to make the sign-up button navigate to the sign up section

// create an export sign-up button to make it easy  to reuse the button. Done

export const SignUpButton = () => {
  return (
    <button className="sign-up">
      <a href="#">Sign Up</a>
    </button>
  );
};

const Header = () => {
  return (
    <header className="header">
      <p className="logo">
        <a href="#">
          Travels and <br />
          Tours
        </a>
      </p>

      <SignUpButton />

      <div className="nav">
        <img src="https://i.ibb.co/5Y1bFZJ/Nav-bar.png" alt="Nav-bar" />
      </div>
    </header>
  );
};
export default Header;
