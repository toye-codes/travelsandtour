import { useState } from "react";
import axios from "axios";
import "../styles/Hero.css";
import "../index.css";

const heroIconsList = [
  { id: "flight", image: "https://i.ibb.co/7r3vfhm/flight.png" },
  { id: "Hotels", image: "https://i.ibb.co/XXkfmNv/Hotels.png" },
  { id: "Cars", image: "https://i.ibb.co/g7RQ27Q/Cars.png" },
  { id: "package Deals", image: "https://i.ibb.co/NWJwK4P/Package-deals.png" },
  { id: "Cruise", image: "https://i.ibb.co/2Ztx9GW/Cruise.png" },
  { id: "Tours", image: "https://i.ibb.co/GJvzzF3/Tours.png" },
];

const heroIcons = heroIconsList.map((icons) => (
  <img
    key={icons.id}
    src={icons.image}
    alt={icons.id}
    className={`hero-icons ${icons.id.toLowerCase().replace(/\s+/g, "-")}`}
  />
));

export const HeroForm = () => {
  // Step 1: Group related states into a single object for clarity
  const [formData, setFormData] = useState({
    destination: "",
    checkin: "",
    checkout: "",
    guestNumber: "",
  });

  const [errors, setErrors] = useState({
    destination: "",
    checkin: "",
    checkout: "",
    guestNumber: "",
  });

  const [loading, setLoading] = useState(false);
  const [results, setResults] = useState(null);

  // Step 2: Handle input changes dynamically
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // Step 3: Unified validation function
  const validateForm = () => {
    const newErrors = {};

    // Validate destination
    if (!formData.destination.trim()) {
      newErrors.destination = "Please input destination";
    }

    // Validate dates
    const newCheckin = new Date(formData.checkin);
    const newCheckout = new Date(formData.checkout);

    if (isNaN(newCheckin)) {
      newErrors.checkin = "Please input a valid check-in date";
    }
    if (isNaN(newCheckout)) {
      newErrors.checkout = "Please input a valid check-out date";
    } else if (newCheckout <= newCheckin) {
      newErrors.checkout = "Check-out date cannot be before check-in date.";
    }

    // Validate guests
    if (!formData.guestNumber) {
      newErrors.guestNumber = "Please select the number of guests!";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Step 4: Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (validateForm()) {
      setLoading(true);
      setResults(null);
      try {
        const response = await axios.get(
          "https://wft-geo-db.p.rapidapi.com/v1/geo/cities",
          {
            params: { namePrefix: formData.destination },
            headers: {
              "X-RapidAPI-Key": "YOUR_RAPIDAPI_KEY",
              "X-RapidAPI-Host": "wft-geo-db.p.rapidapi.com",
            },
          }
        );

        setResults(response.data.data);
      } catch (error) {
        console.error("Error fetching data:", error);
        alert("Failed to fetch data. Please try again later.");
      } finally {
        setLoading(false);
      }
    }
  };

  return (
    <div className="form-container">
      <p>Where would you like to go?</p>

      <form className="hero-form" onSubmit={handleSubmit}>
        <div>
          <label htmlFor="destination">Destination: </label>
          <input
            type="text"
            id="destination"
            placeholder="Country, City, Airport, Area, Landmark"
            name="destination"
            value={formData.destination}
            onChange={handleInputChange}
          />
          {errors.destination && (
            <p style={{ color: "red" }}>{errors.destination}</p>
          )}
          <hr />
        </div>

        <div className="check-in-and-out">
          <div>
            <label htmlFor="checkin">Check-in: </label>
            <input
              type="date"
              id="checkin"
              name="checkin"
              value={formData.checkin}
              onChange={handleInputChange}
            />
            {errors.checkin && <p style={{ color: "red" }}>{errors.checkin}</p>}
            <hr className="check-hr" />
          </div>

          <div>
            <label htmlFor="checkout">Check-Out: </label>
            <input
              type="date"
              id="checkout"
              name="checkout"
              value={formData.checkout}
              onChange={handleInputChange}
            />
            {errors.checkout && (
              <p style={{ color: "red" }}>{errors.checkout}</p>
            )}
            <hr />
          </div>
        </div>

        <div>
          <label htmlFor="guestNumber">Guest: </label>
          <select
            id="guestNumber"
            name="guestNumber"
            value={formData.guestNumber}
            onChange={handleInputChange}>
            <option value="">Choose number of guests</option>
            <option value="1">1 Guest</option>
            <option value="2">2 Guests</option>
            <option value="3">3 Guests</option>
            <option value="others">Others</option>
          </select>

          {errors.guestNumber && (
            <p style={{ color: "red" }}>{errors.guestNumber}</p>
          )}
          <hr className="guest-hr" />
        </div>

        <button type="submit" className="search" disabled={loading}>
          {loading ? "Loading..." : "Search"}
        </button>
      </form>

      {results && (
        <div className="results">
          <h3>Search Results:</h3>
          <ul>
            {results.map((city) => (
              <li key={city.id}>
                {city.name}, {city.country}
              </li>
            ))}
          </ul>
        </div>
      )}
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
      </div>

      <div className="hero-icons">{heroIcons}</div>

      <div className="form">
        <HeroForm />
      </div>
    </section>
  );
};

export default Hero;
