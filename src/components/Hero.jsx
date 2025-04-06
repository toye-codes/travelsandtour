import { useState } from "react";
import "../styles/Hero.css";
import "../index.css";
import {useFinder} from "../context/useFinder"

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
    const {
    formData,
    errors,
    loading,
    results,
    handleInputChange,
    searchHotels,
    handleCancel
  } = useFinder();

  const handleSubmit = (e) => {
    e.preventDefault();
    searchHotels();
  };



  return (
    <div className="form-container" id="home">
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
        <div className="absolute top-full bg-white left-0 mt-4 w-full p-4 shadow-lg rounded-lg">
          <button
            className="text-red-500 font-bold mb-4"
            onClick={handleCancel}
          >
            Back
          </button>
          <h3 className="text-xl font-semibold mb-4">Search Results:</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 bg-white gap-4">
            {results.slice(0, 10).map((hotel) => (
              <div
                key={hotel.id}
                className=" p-2 rounded-lg hover:p-3">
                <div>
                  <img
                    src={hotel.photoMainUrl}
                    alt={hotel.name}
                    className="w-24 h-16 md:w-full md:h-64 object-cover rounded-lg shadow-lg"
                  />
                </div>

               <div className="bg-white p-4 rounded-lg shadow-md w-auto">
                 <h4 className="font-semibold text-lg mt-2">{hotel.name}</h4>
                {/* <p className="text-gray-600 mt-1">
                  {hotel.location || "Location not available"}
                </p> */}
                <div className="flex items-center mt-2">
                  <span className="text-sm text-green-500">
                    Price: ₦
                    {hotel.priceBreakdown?.grossPrice?.value.toLocaleString()}
                  </span>
                  <span className="ml-2 text-sm text-yellow-500">
                    {hotel.star} ⭐
                  </span>
                </div>
                {/* <p className="text-gray-500 mt-2">
                  {hotel.availability?.minRoomsLeft}
                </p> */}
                <p className="text-gray-600 mt-1">
                  {hotel.reviewScoreWord} ({hotel.reviewCount} reviews)
                </p>
               </div>
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
      <div className="hero-info w-full">
        <img src="https://i.ibb.co/zbGjzfC/Star.png" alt="Star" />
        <h2 className="greetings">Welcome To Travels and Tours</h2>
        <p>Plan amazing trips from the comfort of your home</p>
      </div>

      <div className="hero-icons gap-5 md:gap-[50px] ">{heroIcons}</div>

      <div className="form">
        <HeroForm />
      </div>
    </section>
  );
};

export default Hero;
