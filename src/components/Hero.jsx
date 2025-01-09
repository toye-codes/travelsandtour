import { useState } from "react";
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

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.destination.trim()) {
      newErrors.destination = "Please input destination";
    }

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

    if (!formData.guestNumber) {
      newErrors.guestNumber = "Please select the number of guests!";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (validateForm()) {
      setLoading(true);
      setResults(null);

      const getHotels = async () => {
        const url =
          "https://hotels-com-provider.p.rapidapi.com/v2/hotels/search?amenities=WIFI%2CPARKING&meal_plan=FREE_BREAKFAST&available_filter=SHOW_AVAILABLE_ONLY&price_min=10&payment_type=PAY_LATER%2CFREE_CANCELLATION&star_rating_ids=3%2C4%2C5&guest_rating_min=8&children_ages=4%2C0%2C15&checkin_date=2025-05-26&locale=es_AR&adults_number=1&sort_order=REVIEW&page_number=1&domain=AR&price_max=500&region_id=2872&lodging_type=HOTEL%2CHOSTEL%2CAPART_HOTEL&checkout_date=2025-05-27";
        const option = {
          method: "GET",
          headers: {
            "x-rapidapi-key":
              "9870786ffemshe48412e97ed53a3p1aabb5jsn92f8d087973a",
            "x-rapidapi-host": "hotels-com-provider.p.rapidapi.com",
          },
        };

        try {
          const response = await fetch(url, option);
          const hotelResults = await response.json();
          setResults(hotelResults.properties);
        } catch (error) {
          console.error("Failed to fetch", error);
        }
      };

      getHotels();
    }
  };

  const handleCancel = () => {
    setResults(null);
    setLoading(false);
    
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
        <div className="absolute top-full left-0 mt-4 w-full p-4 bg-white shadow-lg rounded-lg">
          <button
            className="text-red-500 font-bold mb-4"
            onClick={handleCancel}>
            Cancel
          </button>
          <h3 className="text-xl font-semibold mb-4">Search Results:</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {results.slice(0, 10).map((hotel) => (
              <div
                key={hotel.id}
                className="bg-gray-100 p-2 rounded-lg shadow-md hover:bg-gray-200">
                <h4 className="font-semibold text-lg">{hotel.name}</h4>
                <p className="text-gray-600">{hotel.location}</p>
                <div className="flex items-center mt-2">
                  <span className="text-sm text-green-500">
                    Price: {hotel.price.formatted}
                  </span>
                  <span className="ml-2 text-sm text-yellow-500">
                    {hotel.star} ⭐
                  </span>
                </div>
                <p className="text-gray-500 mt-2">
                  {hotel.availability.minRoomsLeft} rooms left
                </p>
              </div>
            ))}
          </div>
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
