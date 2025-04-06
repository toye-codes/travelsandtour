import { useContext } from "react";
import { HotelSearchContext } from "./HotelProvider";

export const useFinder = () => useContext(HotelSearchContext);
