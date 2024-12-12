import "../styles/Hero.css";
import { SignUpButton } from "./Header.jsx";

// Use props to fix the images. Done

const heroIconsList = [
  { id: "flight", image: "https://i.ibb.co/7r3vfhm/flight.png" },
  { id: "Hotels", image: "https://i.ibb.co/XXkfmNv/Hotels.png" },
  { id: "Cars", image: "https://i.ibb.co/g7RQ27Q/Cars.png" },
  { id: "package Deals", image: "https://i.ibb.co/NWJwK4P/Package-deals.png" },
  { id: "Cruise", image: "https://i.ibb.co/2Ztx9GW/Cruise.png" },
  { id: "Tours", image: "https://i.ibb.co/GJvzzF3/Tours.png" },
];

const heroIcons = heroIconsList.map((icons) => {
  return (
    <img
      key={icons.id}
      src={icons.image}
      alt={icons.id}
      className={`hero-icons ${icons.id.toLowerCase().replace(/\s+/g, "-")}`}
    />
  );
});

//Add form section. Done
// Add search icon
// Add form handling
// Add calender
// Add drop-down menu for Guest. Done but still needs further styling

export const HeroForm = () => {
  return (
    <div className="form-container">
      <p>Where would you like to go?</p>

      <form className="hero-form">
        <div>
          <label htmlFor="Destination">Destination: </label>
          <input
            type="text"
            id="destination"
            placeholder="Country, City, Airport, Area, Ladmark"
            name="destination"
          />
          <hr />
        </div>

        <div className="check-in-and-out">
          <div>
            <label htmlFor="check-in">Check-in: </label>
            <input type="date" id="check-in" name="check-in" />
            <hr className="check-hr" />
          </div>

          <div>
            <label htmlFor="Check-out">Check-Out: </label>
            <input type="date" id="check-out" name="check-out" />
            <hr />
          </div>
        </div>

        <div>
          <label htmlFor="Guest">Guest: </label>
          <select id="guest" name="guest">
            <option value="1"></option>
            <option value="2">2 Guests</option>
            <option value="3">3 Guests</option>
          </select>
          <hr className="guest-hr" />
        </div>

        {/* Incorporate the search icon into it later */}
        <button className="search">search</button>
      </form>
    </div>
  );
};

const Hero = () => {
  return (
    <section className="hero-section">
      <div className="hero-info">
        <img src="https://i.ibb.co/zbGjzfC/Star.png" alt="Star" />
        <h2 className="greetings">Welcome To Travels and Tours</h2>
        <p>Plan amazing trips from the comfort of your home</p>
        {/* <SignUpButton /> */}
      </div>

      <div className="hero-icons">{heroIcons}</div>

      <div className="form">
        <HeroForm />
      </div>
    </section>
  );
};
export default Hero;