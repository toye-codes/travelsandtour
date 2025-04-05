import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
// import Hero from "./components/Hero";
// import Sales from "./components/Sales";
// import Travel from "./components/Travel";
// import Magazine from "./components/Magazine";
// import Booking from "./components/Booking";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
]);


ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />;
  </React.StrictMode>
);
