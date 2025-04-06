import { createContext, useState } from "react";
import axios from "axios";

export const HotelSearchContext = createContext();

export const HotelProvider = ({ children }) => {
  const [formData, setFormData] = useState({
    destination: "",
    checkin: "",
    checkout: "",
    guestNumber: "",
  });

  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [results, setResults] = useState(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.destination.trim())
      newErrors.destination = "Please input destination";

    const checkinDate = new Date(formData.checkin);
    const checkoutDate = new Date(formData.checkout);

    if (isNaN(checkinDate)) newErrors.checkin = "Invalid check-in date";
    if (isNaN(checkoutDate)) newErrors.checkout = "Invalid check-out date";
    else if (checkoutDate <= checkinDate)
      newErrors.checkout = "Check-out cannot be before check-in";

    if (!formData.guestNumber)
      newErrors.guestNumber = "Select number of guests";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const searchHotels = async () => {
    if (!validateForm()) return;

    setLoading(true);
    setResults(null);



    const apiKey = import.meta.env.VITE_API_KEY;

    try {
      // Step 1: Get dest_id by using the location to query the api for search id
      const locationRes = await axios.get(
        "https://booking-com.p.rapidapi.com/v1/hotels/locations",
        {
          params: {
            name: formData.destination,
            locale: "en-gb",
          },
          headers: {
            "x-rapidapi-key":
              apiKey,
            "x-rapidapi-host": "booking-com.p.rapidapi.com",
          },
        }
      );

      const match = locationRes.data?.[0];
      if (!match) {
        setErrors({ destination: "Destination not found" });
        setLoading(false);
        return;
      }

      const { dest_id, dest_type } = match;


      
        // Step 2: Search Hotels using the location gotten
      const hotelRes = await axios.get(
        "https://booking-com.p.rapidapi.com/v2/hotels/search",
        {
          params: {
            dest_id,
            dest_type,
            checkin_date: formData.checkin,
            checkout_date: formData.checkout,
            adults_number: formData.guestNumber,
            children_number: "2",
            children_ages: "5,0",
            include_adjacency: "true",
            units: "metric",
            page_number: "0",
            room_number: "1",
            locale: "en-gb",
            filter_by_currency: "NGN",
            categories_filter_ids: "class::2,class::4,free_cancellation::1",
            order_by: "popularity",
          },
          headers: {
            "x-rapidapi-key": apiKey,
            "x-rapidapi-host": "booking-com.p.rapidapi.com",
          },
        }
      );

      setResults(hotelRes.data.results);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

          const handleCancel = ()=> {
          setResults(null);
        setFormData({
          destination: "",
          checkin: "",
          checkout: "",
          guestNumber: "",
        });
          setErrors({});
          setLoading(false)
      }

  return (
    <HotelSearchContext.Provider
      value={{
        formData,
        errors,
        loading,
        results,
        handleInputChange,
        searchHotels,
        handleCancel,
      }}>
      {children}
    </HotelSearchContext.Provider>
  );
};

export default HotelProvider