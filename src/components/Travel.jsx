import "../styles/Travel.css";
import { ArrowRight, MapPin } from "lucide-react";

const PropertiesCard = ({ name, totalNum, image }) => {
  return (
    <div className="properties-card">
      <div className="properties-info">
        <h3>{name}</h3>
        <p>Total Properties: {totalNum}</p>
      </div>
      <img
        src={image}
        alt={`Property image for ${name}`}
        className="property-image"
      />
    </div>
  );
};

const Properties = [
  {
    id: "London",
    name: "London - UK",
    totalNum: "289 Properties", // Fixed typo
    image: "https://i.ibb.co/5Ry4g6B/image.png",
  },
  {
    id: "Paris",
    name: "Paris - France",
    totalNum: "289 Properties",
    image: "https://i.ibb.co/gF23Kcr/image.png",
  },
  {
    id: "Rome",
    name: "Rome - Italy",
    totalNum: "129 Properties",
    image: "https://i.ibb.co/zZNvzbL/image.png",
  },
  {
    id: "Barcelona",
    name: "Barcelona - Spain",
    totalNum: "128 Properties",
    image: "https://i.ibb.co/F3C29J5/image.png",
  },
  {
    id: "Madrid",
    name: "Madrid - Spain",
    totalNum: "128 Properties", // Fixed typo
    image: "https://i.ibb.co/gF23Kcr/image.png",
  },
  {
    id: "Vienna",
    name: "Vienna - Austria",
    totalNum: "189 Properties", // Fixed typo
    image: "https://i.ibb.co/5Ry4g6B/image.png",
  },
];

const Travel = () => {
  return (
    <section className="travel-section">
      <div className="travel-info">
        <h3>Top Travel Destinations</h3>
        <button className="view-all-btn">
          View All
          <span>
            <ArrowRight size={20} className="arrow" />
          </span>
        </button>
      </div>

      <section className="location">
        <div className="discover">
          <div>
            <h3>Discover</h3>
            <p>
              2,364 <span>Destinations</span>
            </p>
          </div>

          <div>
            <h3>with</h3>
            <p>
              253,354 <span>Properties</span>
            </p>
          </div>
        </div>

        <div className="recommendation">
          {[
            "Recommendations for you",
            "Australia & Oceania",
            "Asia",
            "Europe",
            "USA & Canada",
            "The rest of the world",
          ].map((option, index) => (
            <div key={index}>
              <button>
                <MapPin size={20} className="map-pin" />
                <span>{option}</span>
              </button>
              {index < 5 && <hr className="recommendation-line" />}
            </div>
          ))}
        </div>

        <div className="properties">
          {Properties.map((property) => (
            <PropertiesCard
              key={property.id}
              name={property.name}
              totalNum={property.totalNum}
              image={property.image}
              className={`property ${property.id
                .toLowerCase()
                .replace(/\s+/g, "_")}`}
            />
          ))}
        </div>
      </section>
    </section>
  );
};

export default Travel;