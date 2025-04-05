import "../styles/Sales.css";
import { ArrowRight } from "lucide-react";

const HotelCard = (props) => {
  return (
    <div className="hotelcard">
      <img src={props.image} alt={props.name} className="image" />
      <h3 className="card-name">{props.name}</h3>
      <p className="card-address">{props.address}</p>
      <hr className="hotel-line" />

      <div className="pricing">
        <p className="old-price">
          from <span>$600</span>
        </p>
        <p className="new-price">
          $450 <span>/Night</span>
        </p>
      </div>
    </div>
  );
};

// Hotel data array: Contains information for multiple hotels
const hotel = [
  {
    id: "Corpley Square Hotel",
    name: "Corpley Square Hotel",
    address: "Baston, Massachusetts",
    image: "https://i.ibb.co/N6rzQVj/image.png",
  },
  {
    id: "Grand Hotel Bagni",
    name: "Grand Hotel Bagni",
    address: "Baston, Massachusetts",
    image: "https://i.ibb.co/6414BSG/image.png",
  },
  {
    id: "Town Hall Hotel",
    name: "Town Hall Hotel",
    address: "Baston, Massachusetts",
    image: "https://i.ibb.co/PFqntQR/image.png",
  },
  {
    id: "A Hidden NYC Mystery Hotel",
    name: "A Hidden NYC Mystery Hotel",
    address: "Baston, Massachusetts",
    image: "https://i.ibb.co/fNFNgx5/image.png",
  },
];

// Sales Component: Main component for displaying hotel sales
const Sales = () => {
  return (
    <section className="sales-section" id="sales">
      {/* Header section for sales */}
      <div className="sales-info">
        <h3>Hot Sales Today</h3>
        <button>
          All sales{" "}
          <span>
            {" "}
            <ArrowRight className="arrow-right" size={35} />{" "}
          </span>
        </button>
      </div>

      {/* Grid section for first two hotels */}
      <div className="block-section">
        {hotel.map((hotelData) => (
          <HotelCard
            key={hotelData.id}
            name={hotelData.name}
            address={hotelData.address}
            image={hotelData.image}
          />
        ))}
      </div>

      {/* Block section for remaining hotels */}
      <div className="block-section">
        {hotel.map((hotelData) => (
          <HotelCard
            key={hotelData.id}
            name={hotelData.name}
            address={hotelData.address}
            image={hotelData.image}
          />
        ))}
      </div>
    </section>
  );
};

export default Sales;
